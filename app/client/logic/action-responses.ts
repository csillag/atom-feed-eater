// In this file, we will define how we want to respond to some of the
// state changes by dispatching new actions.

import { store } from '../data/store';
import { load, parseError, feedParsed } from '../data/actions';
import { extractResult } from '../logic/proxy';
import { parseAtomFeed } from '../logic/atom';

store.subscribe(() => {
    const state = store.getState();
    if (state.shouldFetch) {
        // The "should fetch" flag is set, which means we should try to fetch the data.
        // Therefore we dispatch the action to load the URL.
        store.dispatch(load(state.url));
    } else if (state.incomingResponse) {
        // We have an incoming proxy response. We should parse it.
        const result = extractResult(state.incomingResponse); // Extract the feed from the proxy response
        if (result) {
            try {
                parseAtomFeed(result, (error, ret) => {
                    if (error) {
                        store.dispatch(parseError("While parsing the feed: " + error));
                    } else {
                        store.dispatch(feedParsed(ret));
                    }
                });
            } catch (e) {
                store.dispatch(parseError("While parsing the feed: " + e.toString()));
            }
        } else {
            store.dispatch(parseError("We couldn't load anything from that URL."));
        }
    }
})
