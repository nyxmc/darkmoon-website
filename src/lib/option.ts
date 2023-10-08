export class Option<T> {
    static of<T>(value: T | undefined | null): Option<T> {
        return value === null || value === undefined ? none() : some(value);
    }

    isNone(): boolean {
        return this instanceof None;
    }

    isSome(): boolean {
        return !(this instanceof None);
    }

    getOrElse<U>(defaultValue: U): T | U {
        return defaultValue;
    }

    toJSON(): T | null  {
        return this.getOrElse(null);
    }
}

export class Some<T> extends Option<T> {
    constructor(private value: T) {
        super();
    }

    getOrElse<U>(_defaultValue: T | U): T {
        return this.value;
    }
}

export class None<T> extends Option<T> {}

// Factory function to create Some
export function some<T>(value: T): Option<T> {
    return new Some(value);
}

// Factory function to create None
export function none<T>(): Option<T> {
    return new None();
}