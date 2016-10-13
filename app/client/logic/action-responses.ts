// In this file, we will define how we want to respond to some of the
// state changes.

import { store } from '../data/store';
import { load } from '../data/actions';

store.subscribe(() => {
    const state = store.getState();
    if (state.shouldFetch) {
        // The "should fetch" flag is set, which means we should try to fetch the data.
        // Therefore we dispatch the action to load the URL.
        store.dispatch(load(state.url));
    }
})
