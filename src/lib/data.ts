import type {Power, Race, RaceJson} from "$lib/types";
import JSON5 from "json5";
import {lstat, readdir} from "fs/promises";
import {join} from "path/posix";


export async function parseRace(powers: Power[], path: string): Promise<Race> {
    const file = Bun.file(path);
    const json: RaceJson = JSON5.parse(await file.text());

    const racePowers: Power[] = [];

    json.powers.map(power => {
        const p = powers.find(p => p.id === power);
        if (p) racePowers.push(p);
    });

    return {
        ...json,
        powers: racePowers,
        power_ids: json.powers,
    };
}

async function getTranslation(key: string) {
    const files = await readdir("data/lang")

    for (const file of files) {
        if (file.startsWith("en_") && (file.endsWith(".json") || file.endsWith(".json5")) ) {
            const json = JSON5.parse(await Bun.file("data/lang/" + file).text());

            if (json[key] !== undefined) {
                return json[key];
            }
        }
    }
}

export async function parsePower(path: string): Promise<Power | null> {
    const file = Bun.file(path);
    const power = JSON5.parse(await file.text());

    const regex = /^\/?data\/(.*?)\/powers\/(.*)\.json5?/gm;
    const id = path.replace(regex, `$1:$2`);

    if (id === path || power.hidden === true) {
        return null;
    }

    if (power.name === undefined) {
        const key = `power.${id.replace(":", ".")}.name`;
        power.name = await getTranslation(key) ?? key;
    }

    if (power.description === undefined) {
        const key = `power.${id.replace(":", ".")}.description`;
        power.description = await getTranslation(key) ?? key;
    }

    return {
        id,
        name: power.name,
        description: power.description,
        path
    }
}

export async function parsePowers(): Promise<Power[]> {
    const powers: Power[] = [];
    const regex = /^\/?data\/(.*?)\/powers\/(.*)\.json5?/gm;

    const loadPowers = async (p: string) => {
        const files = await readdir(p);

        for (const file of files) {
            const path = join(p, file);
            const stats = await lstat(path);

            if (stats.isFile() && regex.test(path)) {
                const power = await parsePower(path)
                if (power !== null) powers.push(power);
            }

            if (stats.isDirectory()) {
                await loadPowers(path);
            }
        }
    }

    await loadPowers("./data");
    return powers;
}

export async function parseRaces(powers: Power[]): Promise<Race[]> {
    const races: Race[] = [];
    const regex = /^\/?data\/(.*?)\/races\/(.*)\.json5?/gm;

    const loadRaces = async (p: string) => {
        const files = await readdir(p);

        for (const file of files) {
            const path = join(p, file);
            const stats = await lstat(path);

            // for some reason regex.test edgecases here
            if (stats.isFile() && path.replace(regex, "") !== path) {
                races.push(await parseRace(powers, path));
            }

            if (stats.isDirectory()) {
                await loadRaces(path);
            }
        }
    }

    await loadRaces("./data");
    return races;
}