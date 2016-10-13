// This file declared the Redux state store.

import { Store, createStore } from 'redux';
import { AppState } from './state';
import { getNextState, getInitialState } from './reducers';

export const store:Store<AppState> = createStore(getNextState, getInitialState());
