// This file declared the Redux state store.

import { Store, createStore } from 'redux';

import { AppState } from './state';
import { getNextState } from './reducers';

export const store:Store<AppState> = createStore(getNextState);
