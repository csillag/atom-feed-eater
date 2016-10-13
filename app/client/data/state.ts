
import { AtomFeedInfo } from '../logic/atom';

export interface AppState {
    url:string;
    urlErrorMessage:string;
    shouldFetch: boolean;
    fetching: boolean;
    incomingResponse: string;
    parsing: boolean;
    feed: AtomFeedInfo;
}
