import { FeedInfo } from '../logic/atom';

export interface AppStateChange {
    url?:string;
    urlErrorMessage?:string;
    shouldLoad?: boolean; // To trigger loading
    isLoading?: boolean;
    incomingResponse?: string;
    shouldProcess?: boolean; // To trigger parsing
    isProcessing?: boolean;
    feed?: FeedInfo;
}

export interface AppState {
    getUrl():string;
    getUrlErrorMessage():string;
    shouldLoad(): boolean; // To trigger loading
    isLoading(): boolean;
    getIncomingResponse(): string;
    shouldProcess(): boolean; // To trigger parsing
    isProcessing(): boolean;
    getFeed(): FeedInfo;

    mutate(change:AppStateChange):AppState;
}
