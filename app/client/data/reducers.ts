// The file containes Redux reducer function
import { PartialAppState, AppState } from './State';
import { Action,
         EDIT_URL, SUBMIT_URL, URL_ERROR,
         LOAD, LOAD_FAIL, LOAD_SUCCESS,
         PARSING_STARTED, PARSE_ERROR, FEED_PARSED
} from './actions';

// Helper funcion for generating the next state, by applying a set of
// changes to the current state.
function applyChanges(state:AppState, changes:PartialAppState):AppState {
    return Object.assign({}, state, changes);
}

// This is the reducer function
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
        return applyChanges(state, {
            url: action.url,
            urlErrorMessage: "",
        });
    case SUBMIT_URL:
        return applyChanges(state, {
            shouldFetch: true,
        });
    case URL_ERROR:
        return applyChanges(state, {
            shouldFetch: false,
            urlErrorMessage: action.error,
        });
    case LOAD:
        return applyChanges(state, {
            shouldFetch: false,
            fetching: true,
            feed: null,
        });
    case LOAD_FAIL:
        return applyChanges(state, {
            fetching: false,
            urlErrorMessage: action.error.message || action.error.data,
        });
    case LOAD_SUCCESS:
        return applyChanges(state, {
            fetching: false,
            incomingResponse: action.payload.data,
            shouldParse: true,
        });
    case PARSING_STARTED:
        return applyChanges(state, {
            shouldParse: false,
            parsing: true,
        });
    case PARSE_ERROR:
        return applyChanges(state, {
            parsing: false,
            urlErrorMessage: action.error,
        });
    case FEED_PARSED:
        return applyChanges(state, {
            parsing: false,
            feed: action.results,
        });
    default:
        return state;
    }    
};
