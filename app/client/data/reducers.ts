// The file containes Redux reducer function
import { AppState } from './State';
import { Action, EDIT_URL, SUBMIT_URL, LOAD, LOAD_FAIL, LOAD_SUCCESS } from './actions';
import { isResultValid } from '../logic/proxy';

export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = {
            url: 'http://github.com/csillag.atom',
            urlErrorMessage: "",
            shouldFetch: false,
            fetching: false,
            title: null,
            articles: [],
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
        const xml = action.payload.data;
        if (isResultValid(xml)) {
            console.log("We loaded something!", xml);
            // TODO: populate articles
            return Object.assign({}, state, {
                fetching: false,
            });
        } else {
            return Object.assign({}, state, {
                fetching: false,
                urlErrorMessage: "We couldn't load anything from that URL.",
            });
        }
    default:
        return state;
    }    
};
