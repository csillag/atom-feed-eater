// In these files, we define the wrapper objects
// that we are wrapping around the various immutable
// state objects as syntatic sugar, in order to get
// dedicated (and type-safe) getters for our data fields.

import { List, Map } from 'immutable';
import { AppState, AppStateChange } from './state';
import { Article, FeedInfo } from '../logic/atom';

class ArticleWrapper implements Article {

    private state:Map<string,any> = null;

    constructor(data:any) {
        this.state = Map<string,any>(data);
    }

    public getAuthor() { return this.state.get("author"); }
    public getDate() { return this.state.get("date"); }
    public getDescription() { return this.state.get("description"); }
    public getLink() { return this.state.get("link"); }
    public getTitle() { return this.state.get("title"); }
    public getSummary() { return this.state.get("summary"); }
    public getImage() { return this.state.get("image"); }
}

function wrapRawArticle(rawArticle):Article {
    return new ArticleWrapper(rawArticle);
}

export type ArticleList = List<Article>;

class FeedInfoWrapper implements FeedInfo {

    private state:Map<string,any> = null;

    // Here is the trick: we wrap the correct wrappers around
    // all the required plain data objects.
    constructor(data:any) {
        this.state = Map<string,any>({
            site: new ArticleWrapper(data.site),
            items: data.items.map(wrapRawArticle),
        });
    }

    public getSite() { return this.state.get("site"); }
    public getItems() { return this.state.get("items"); }
}

export function wrapRawFeedInfo(rawFeedInfo):FeedInfo {
    return new FeedInfoWrapper(rawFeedInfo);
}

class AppStateWrapper implements AppState {

    private state:Map<string,any> = null;

    constructor(state?:Map<string,any>) {
        this.state = state || Map<string,any>({});
    }

    public getUrl() { return this.state.get("url") }
    public getUrlErrorMessage() { return this.state.get("urlErrorMessage") }
    public shouldLoad() { return this.state.get("shouldLoad") }
    public isLoading() { return this.state.get("isLoading") }
    public getIncomingResponse() { return this.state.get("incomingResponse") }
    public shouldProcess() { return this.state.get("shouldProcess") }
    public isProcessing() { return this.state.get("isProcessing"); }
    public getFeed() { return this.state.get("feed"); }

    // This class also has a mutator method, for creating a new
    // version of the application state.
    public mutate(changes:AppStateChange) {
        return new AppStateWrapper(this.state.merge(changes));
    }
}

export function wrapRawAppState(rawState:AppStateChange):AppState {
    return new AppStateWrapper(Map<string,any>(rawState));
}
