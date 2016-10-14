
import { AtomFeedInfo } from '../logic/atom';

export interface AppState {
    url:string;
    urlErrorMessage:string;
    shouldFetch: boolean; // To trigger loading
    fetching: boolean;
    incomingResponse: string;
    shouldParse: boolean; // To trigger parsing
    parsing: boolean;
    feed: AtomFeedInfo;
}
