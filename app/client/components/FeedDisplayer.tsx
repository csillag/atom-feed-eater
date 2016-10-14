import * as React from 'react';

import { Article, AtomFeedInfo } from '../logic/atom';
import { FeedItem } from './FeedItem';

export interface FeedDisplayerProps {
    feed: AtomFeedInfo;
}

const renderImage = (url:string) => {
        if (!url) {
            return null;
        }
        return (<div><img
            className="atom-thumbnail"
            src={url}
        /></div>)
}

const renderItems = (items:Article[]) => {
        if (items.length == 0) {
            return (<span>No articles found.</span>) as any;
        }
        return items.map((item:Article) => {
            const key = item.date + item.link;
            return <FeedItem key={key} item={item} />
        }) as any;
}

export const FeedDisplayer = (props:FeedDisplayerProps) => {
        const feed  = props.feed;
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
                { renderImage(site.image) }
                <div className="atom-content">
                    <span>Feed last updated:&nbsp;</span>
                    { site.author && <span className="atom-author">{ site.author }&nbsp;|&nbsp;</span> }
                    <span className="atom-date">{ date }</span>
                    { site.description && <div className="atom-content">
                        { site.description }
                    </div> }
                    <div id="atom-articles">
                        { renderItems(feed.items) }
                    </div>
                </div>
            </div>
        )
}
