// The file containes Redux reducer function
import { AppState } from './State';
import { Action,
         EDIT_URL, SUBMIT_URL, URL_ERROR,
         LOAD, LOAD_FAIL, LOAD_SUCCESS,
         PARSING_STARTED, PARSE_ERROR, FEED_PARSED
} from './actions';

export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = {
            url: "",
            urlErrorMessage: "",
            shouldFetch: false,
            fetching: false,
            incomingResponse: null,
            shouldParse: false,
            parsing: false,
            feed: null,
        };
        return result;
    }
//    console.log("Action:", action);
    switch (action.type) {
    case EDIT_URL:
        return Object.assign({}, state, {
            url: action.url,
            urlErrorMessage: "",
        });
    case SUBMIT_URL:
        return Object.assign({}, state, {
            shouldFetch: true,
        });
    case URL_ERROR:
        return Object.assign({}, state, {
            shouldFetch: false,
            urlErrorMessage: action.error,
        });
    case LOAD:
        return Object.assign({}, state, {
            shouldFetch: false,
            fetching: true,
            feed: null,
        });
    case LOAD_FAIL:
        return Object.assign({}, state, {
            fetching: false,
            urlErrorMessage: action.error.message || action.error.data,
        });
    case LOAD_SUCCESS:
        return Object.assign({}, state, {
            fetching: false,
            incomingResponse: action.payload.data,
            shouldParse: true,
        });
    case PARSING_STARTED:
        return Object.assign({}, state, {
            shouldParse: false,
            parsing: true,
        });
    case PARSE_ERROR:
        return Object.assign({}, state, {
            parsing: false,
            urlErrorMessage: action.error,
        });
    case FEED_PARSED:
        return Object.assign({}, state, {
            parsing: false,
            feed: action.results,
        });
    default:
        return state;
    }    
};
