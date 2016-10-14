
import { AtomFeedInfo } from '../logic/atom';

export interface PartialAppState {
    url?:string;
    urlErrorMessage?:string;
    shouldFetch?: boolean; // To trigger loading
    fetching?: boolean;
    incomingResponse?: string;
    shouldParse?: boolean; // To trigger parsing
    parsing?: boolean;
    feed?: AtomFeedInfo;
}

export interface AppState extends PartialAppState {
    url:string;
    urlErrorMessage:string;
    shouldFetch: boolean; // To trigger loading
    fetching: boolean;
    incomingResponse: string;
    shouldParse: boolean; // To trigger parsing
    parsing: boolean;
    feed: AtomFeedInfo;
}
