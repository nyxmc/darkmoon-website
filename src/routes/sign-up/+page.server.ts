import type {Actions} from "@sveltejs/kit";
import {RegisterFormData} from "$lib/registerFormData";
import {fail} from "@sveltejs/kit";
import {some} from "$lib/option";
import type {PageServerLoad} from "./$types";
import {parsePowers, parseRaces} from "$lib/data";

export const load: PageServerLoad = async ({ cookies: _cookies }) => {
    const powers = await parsePowers();
    const races = await parseRaces(powers);

    return { races, powers };
};

export const actions = {
    register: async ({ cookies: _cookies, request }) => {
        const data = new RegisterFormData(await request.formData());

        if (data.all.getOrElse(false)) {
            return fail(400, { success: false, invalid: "all" });
        }
        data.all = some(false);


        if (!data.rules.getOrElse(false)) {
            return fail(400, { success: false, invalid: "rules" });
        }

        if (!data.staff.getOrElse(false)) {
            return fail(400, { success: false, invalid: "staff" });
        }

        for (const key of Object.keys(data)) {
            // @ts-ignore the key is always valid
            if (data[key].isNone()) {
                return fail(400, { success: false, invalid: key });
            }
        }

        return { success: true };
    },
} satisfies Actions;