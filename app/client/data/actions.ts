
// === Our store supports the following actions ===

export const EDIT_URL = "EDIT_URL";
export const TRY_URL = "TRY_URL";

// Generic type to describe all actions
export interface Action {
    type: string,
    url?: string;
    value?: number,
}

// === Action generator functions ===

export function editUrl(url:string):Action {
    return { type: EDIT_URL, url }
}

export function tryUrl():Action {
    return { type: TRY_URL }
}
