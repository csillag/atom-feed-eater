import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

import { Article, AtomFeedInfo } from '../logic/atom';

export interface FeedDisplayerProps {
    feed: AtomFeedInfo;
}

export class FeedDisplayer extends React.Component<FeedDisplayerProps, {}> {

    private renderSiteInfo(site:Article) {
        return (<div>
            <h3>{site.title}</h3>
        </div>)
    }

    private renderItems(items:Article[]) {
        return (<div>
            The articles come here.
        </div>)
    }

    render() {
        const feed:AtomFeedInfo = this.props.feed;
        if (!feed) {
            return null;
        }
        return (<div>
                { this.renderSiteInfo(feed.site) }
                { this.renderItems(feed.items) }
        </div>)
    }
}
