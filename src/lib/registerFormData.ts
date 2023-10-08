import {none, Option, some} from "$lib/option";

export function checkboxValue(value: FormDataEntryValue | null): Option<boolean> {
    if (value === null) {
        return none<boolean>();
    }

    return some(value.toString() === "on");
}


export class RegisterFormData {
    ign: Option<string>
    nickname: Option<string>
    timezone: Option<string>
    age: Option<string>
    bio: Option<string>
    notes: Option<string>
    rules: Option<boolean>
    staff: Option<boolean>
    all: Option<boolean>

    constructor(data: FormData) {
        this.ign = Option.of<string>(data.get("ign")?.toString());
        this.nickname = Option.of<string>(data.get("nickname")?.toString());
        this.timezone = Option.of<string>(data.get("timezone")?.toString());
        this.age = Option.of<string>(data.get("age")?.toString());
        this.bio = Option.of<string>(data.get("bio")?.toString());
        this.notes = Option.of<string>(data.get("notes")?.toString());

        this.rules = checkboxValue(data.get("rules"));
        this.staff = checkboxValue(data.get("staff"));
        this.all = checkboxValue(data.get("all"));
    }

    toJSON() {
        return {
            ign: this.ign,
            nickname: this.nickname,
            timezone: this.timezone,
            age: this.age,
            bio: this.bio,
            notes: this.notes,
            rules: this.rules,
            staff: this.staff,
            all: this.all,
        };
    }
}

