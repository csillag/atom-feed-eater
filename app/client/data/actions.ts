
// === Our store supports the following actions ===

export const DO_SOMETHING = "DO_SOMETHING";

// Generic type to describe all actions
export interface Action {
    type: string,
    value?: number,
}

// === Action generator functions ===

export function doSomething(value:number):Action {
    return { type: DO_SOMETHING, value }
}

