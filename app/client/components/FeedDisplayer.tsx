import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

import { Article, AtomFeedInfo } from '../logic/atom';
import { FeedItem } from './FeedItem';

export interface FeedDisplayerProps {
    feed: AtomFeedInfo;
}

export class FeedDisplayer extends React.Component<FeedDisplayerProps, {}> {

    private renderSiteInfo(site:Article) {
        return (<div className="atom-site">
                Displaying feed:&nbsp;
                <a target="_blank" href={site.link}>{site.title}</a>
        </div>)
    }

    private renderItems(items:Article[]) {
        return items.map((item:Article) => {
            const key = item.date + item.link;
            return <FeedItem key={key} item={item} />
        });
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
