export type Power = {
    id: string,
    name: string,
    description: string,
    path: string
};

export type RaceJson = {
    name: string,
    description: string,
    min_weight: number,
    max_weight: number,
    skin_urls: string[],
    powers: string[]
};

export type Race = {
    name: string,
    description: string,
    min_weight: number,
    max_weight: number,
    skin_urls: string[],
    powers: Power[]
    power_ids: string[]
};
