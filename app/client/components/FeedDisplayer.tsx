import * as React from 'react';

import { Article, AtomFeedInfo } from '../logic/atom';

export interface FeedDisplayerProps {
    feed: AtomFeedInfo;
}

const renderImage = (url:string) => {
    if (!url) {
        return null;
    }
    return (
        <div>
            <img
                className="atom-thumbnail"
                src={url}
            />
        </div>
    )
}

const renderArticleBody = (item:Article) => {
    if (item.description) {
        return (<div className="atom-description" dangerouslySetInnerHTML={{__html: item.description}} />);
    } else {
        return (<blockquote className="atom-summary">{ item.summary }</blockquote>);
    }
}

const renderArticle = (item:Article) => {
    const date = item.date.toLocaleString();
    const key = date + item.link;

    return (<div key={key} className="atom-article">
        <div className="atom-title">
            <a target="_blank" href={item.link}>{ item.title }</a>
        </div>
        <div className="atom-content">
            <span className="atom-author">{ item.author }</span>
            <span>&nbsp;|&nbsp;</span>
            <span className="atom-date">{ date }</span>
            { renderImage(item.image) }
            { renderArticleBody(item) }
        </div>
    </div>);
}

const renderArticles = (items:Article[]) => {
    if (items.length == 0) {
        return (<span>No articles found.</span>) as any;
    }
    return items.map(renderArticle);
}

const renderFeed = (feed:AtomFeedInfo) => {
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
                        { renderArticles(feed.items) }
                    </div>
                </div>
            </div>
    )
}

export const FeedDisplayer = (props:FeedDisplayerProps) => {
    return renderFeed(props.feed);
}
