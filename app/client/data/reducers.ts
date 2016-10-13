// The file containes Redux reducer function

import { AppState } from './State';
import { Action, DO_SOMETHING } from './actions';

// Get the initial state of the app
export function getInitialState():AppState {
    const result:AppState = {
        value:42
    }
    return result;
}

// Get the next state of the app, after a given action
export function getNextState(state:AppState, action:Action) {
    //    console.log("Executing action", action);
    let next:AppState;

    switch (action.type) {
    case DO_SOMETHING:
        next = Object.assign({}, state, {
            value: state.value + action.value
        });
        return next;
    default:
        return state;
    }
}
