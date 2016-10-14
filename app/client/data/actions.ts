
import { getProxyRequestURL } from '../logic/proxy';

// === Our store supports the following actions ===

export const EDIT_URL = "EDIT_URL";
export const SUBMIT_URL = "SUBMIT_URL";
export const URL_ERROR = "URL_ERROR";
export const LOAD = "LOAD";
export const LOAD_FAIL = "LOAD_FAIL";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const PARSING_STARTED = "PARSING_STARTED";
export const PARSE_ERROR = "PARSE_ERROR";
export const FEED_PARSED = "FEED_PARSED";

// Generic type to describe all actions
export interface Action {
    type: string,
    url?: string;
    payload?: any;
    error?: any;
    results?: any;
}

// === Action generator functions ===

export function editUrl(url:string):Action {
    return { type: EDIT_URL, url }
}

export function submitUrl():Action {
    return { type: SUBMIT_URL }
}

export function urlError(error:string):Action {
    return { type: URL_ERROR, error }
}

export function load(url:string):Action {
    return { type: LOAD, payload: { request: { url: getProxyRequestURL(url) } } }
}

export function parsingStarted():Action {
    return { type: PARSING_STARTED }
}

export function parseError(error:string):Action {
    return { type: PARSE_ERROR, error }
}

export function feedParsed(results:any):Action {
    return { type: FEED_PARSED, results }
}
