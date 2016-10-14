import * as React from 'react';

import { Article, AtomFeedInfo } from '../logic/atom';

import styles from './FeedDisplayer.css';

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
                className={styles.thumbnail}
                src={url}
            />
        </div>
    )
}

const renderArticleBody = (item:Article) => {
    if (item.description) {
        return (<div className={styles.description} dangerouslySetInnerHTML={{__html: item.description}} />);
    } else {
        return (<blockquote className={styles.summary}>{ item.summary }</blockquote>);
    }
}

const renderArticle = (item:Article) => {
    const date = item.date.toLocaleString();
    const key = date + item.link;

    return (<div key={key} className={styles.article}>
        <div className={styles.articleTitle}>
            <a target="_blank" href={item.link} className={styles.titleLink}>{ item.title }</a>
        </div>
        <div className={styles.content}>
            <span className={styles.author}>{ item.author }</span>
            <span>&nbsp;|&nbsp;</span>
            <span className={styles.date}>{ date }</span>
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
            <div className={styles.site}>
                <div className={styles.siteTitle}>
                    <a target="_blank" href={site.link} className={styles.titleLink}>
                        {site.title}
                    </a>
                </div>
                { renderImage(site.image) }
                    <div className={styles.content}>
                    <span>Feed last updated:&nbsp;</span>
                    { site.author && <span className={styles.author}>{ site.author }&nbsp;|&nbsp;</span> }
                    <span className={styles.date}>{ date }</span>
                    { site.description && <div className={styles.content}>
                        { site.description }
                    </div> }
                        <div className={styles.articles}>
                        { renderArticles(feed.items) }
                    </div>
                </div>
            </div>
    )
}

export const FeedDisplayer = (props:FeedDisplayerProps) => {
    return renderFeed(props.feed);
}
