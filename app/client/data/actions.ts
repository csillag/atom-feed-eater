
import { getURL } from '../logic/proxy';

// === Our store supports the following actions ===

export const EDIT_URL = "EDIT_URL";
export const SUBMIT_URL = "SUBMIT_URL";
export const LOAD = "LOAD";
export const LOAD_FAIL = "LOAD_FAIL";
export const LOAD_SUCCESS = "LOAD_SUCCESS";

// Generic type to describe all actions
export interface Action {
    type: string,
    url?: string;
    payload?: any;
    error?: any;
}

// === Action generator functions ===

export function editUrl(url:string):Action {
    return { type: EDIT_URL, url }
}

export function submitUrl():Action {
    return { type: SUBMIT_URL }
}

export function load(url:string):Action {
    return {
        type: LOAD,
        payload: {
            request: {
                url: getURL(url)
            }
        }
    }
}
