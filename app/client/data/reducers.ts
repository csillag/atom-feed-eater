// The file containes Redux reducer function
import { AppState } from './State';
import { Action, EDIT_URL, SUBMIT_URL, LOAD, LOAD_FAIL, LOAD_SUCCESS, PARSE_ERROR, FEED_PARSED } from './actions';

export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = {
            url: 'http://github.com/csillag.atom',
            urlErrorMessage: "",
            shouldFetch: false,
            fetching: false,
            incomingResponse: null,
            feed: null,
        };
        return result;
    }
    console.log("Action:", action);
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
    case LOAD:
        return Object.assign({}, state, {
            shouldFetch: false,
            fetching: true,
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
        });
    case PARSE_ERROR:
        return Object.assign({}, state, {
            incomingResponse: null,
            urlErrorMessage: action.error,
        });
    case FEED_PARSED:
        return Object.assign({}, state, {
            incomingResponse: null,
            feed: action.results,
        });
    default:
        return state;
    }    
};
