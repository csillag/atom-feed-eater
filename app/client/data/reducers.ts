// The file containes Redux reducer function
import { AppState } from './State';
import { Action, EDIT_URL, TRY_URL } from './actions';

export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        return {
            url: 'http://github.com/csillag.atom',
            urlErrorMessage: "",
            fetching: false,
            title: null,
            articles: [],
        };
    }
    switch (action.type) {
    case EDIT_URL:
        return Object.assign({}, state, {
            url: action.url,
            urlErrorMessage: ""
        });        
    case TRY_URL:
        console.log("Should fetch", state.url);  // TODO
        return Object.assign({}, state, {
            urlErrorMessage: "Fetching data..."
        });
    default:
        return state;
    }    
};
