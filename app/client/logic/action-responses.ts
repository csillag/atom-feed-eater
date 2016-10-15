// In this file, we will define how we want to respond to some of the
// state changes by dispatching new actions.

const validUrl = require('valid-url');

import { AppState } from '../data/state';
import { store } from '../data/store';
import { editUrl, submitUrl, urlError, load, parsingStarted, parseError, feedParsed } from '../data/actions';
import { extractDataFromProxyResponse } from '../logic/proxy';
import { parseAtomFeed } from '../logic/atom';

store.subscribe(() => {
    const state:AppState = store.getState();
    if (state.shouldLoad()) {
        // The "should fetch" flag is set, which means we should try to fetch the data.
        if (validUrl.isUri(state.getUrl())) { // Is this a valid URL?
            // Therefore we dispatch the action to load the URL.
            store.dispatch(load(state.getUrl()));
        } else { // No, URL is invalid
            store.dispatch(urlError("This doesn't seem to be a valid URL!"));
        }
    } else if (state.shouldProcess()) {
        // We should parse the proxy response
        store.dispatch(parsingStarted());
        const result = extractDataFromProxyResponse(state.getIncomingResponse()); // Extract the feed from the proxy response
        if (result) {
            parseAtomFeed(result, (error, ret) => {
                if (error) {
                    store.dispatch(parseError("While parsing the feed: " + error));
                } else {
                    store.dispatch(feedParsed(ret));
                }
            });
        } else {
            store.dispatch(parseError("We couldn't load anything from that URL."));
        }
    }
})

// For debugging, uncomment this
//const testFeed = "http://github.com/csillag.atom"
//const testFeed = "http://feeds.feedburner.com/tomstocky"
//setTimeout(() => {
//    store.dispatch(editUrl(testFeed))
//    store.dispatch(submitUrl())
//}, 1000);
