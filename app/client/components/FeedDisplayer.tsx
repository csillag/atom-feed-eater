import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

import { Article, AtomFeedInfo } from '../logic/atom';
import { FeedItem } from './FeedItem';

export interface FeedDisplayerProps {
    feed: AtomFeedInfo;
}

export class FeedDisplayer extends React.Component<FeedDisplayerProps, {}> {

    private renderImage(url:string) {
        if (!url) {
            return null;
        }
        return (<div><img
            className="atom-thumbnail"
            src={url}
        /></div>)
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
        const site = feed.site;
        const date = site.date.toLocaleString();
        return (
            <div className="atom-site">
                <div className="atom-title">
                    <a target="_blank" href={site.link}>
                        {site.title}
                    </a>
                </div>
                { this.renderImage(site.image) }
                <div className="atom-content">
                    <span>Feed last updated:&nbsp;</span>
                    { site.author && <span className="atom-author">{ site.author }&nbsp;|&nbsp;</span> }
                    <span className="atom-date">{ date }</span>
                    { site.description && <div className="atom-content">
                        { site.description }
                    </div> }
                    <div id="atom-articles">
                        { this.renderItems(feed.items) }
                    </div>
                </div>
            </div>
        )
    }
}
