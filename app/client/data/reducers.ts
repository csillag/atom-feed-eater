// The file containes Redux reducer function

import { AppStateChange, AppState } from './state';
import { wrapRawAppState } from './wrappers';
import { Action,
         EDIT_URL, SUBMIT_URL, URL_ERROR,
         LOAD, LOAD_FAIL, LOAD_SUCCESS,
         PARSING_STARTED, PARSE_ERROR, FEED_PARSED
       } from './actions';

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = wrapRawAppState({
            url: "",
            urlErrorMessage: "",
            shouldLoad: false,
            isLoading: false,
            incomingResponse: null,
            shouldProcess: false,
            isProcessing: false,
            feed: null,
        });
        return result;
    }
//    console.log("Action:", action);
    switch (action.type) {
    case EDIT_URL:
        return state.mutate({
            url: action.url,
            urlErrorMessage: "",
        });
    case SUBMIT_URL:
        return state.mutate({
            shouldLoad: true,
        });
    case URL_ERROR:
        return state.mutate({
            shouldLoad: false,
            urlErrorMessage: action.error,
        });
    case LOAD:
        return state.mutate({
            shouldLoad: false,
            isLoading: true,
            feed: null,
        });
    case LOAD_FAIL:
        return state.mutate({
            isLoading: false,
            urlErrorMessage: action.error.message || action.error.data,
        });
    case LOAD_SUCCESS:
        return state.mutate({
            isLoading: false,
            incomingResponse: action.payload.data,
            shouldProcess: true,
        });
    case PARSING_STARTED:
        return state.mutate({
            shouldProcess: false,
            isProcessing: true,
        });
    case PARSE_ERROR:
        return state.mutate({
            isProcessing: false,
            urlErrorMessage: action.error,
        });
    case FEED_PARSED:
        return state.mutate({
            isProcessing: false,
            feed: action.results,
        });
    default:
        return state;
    }    
};
