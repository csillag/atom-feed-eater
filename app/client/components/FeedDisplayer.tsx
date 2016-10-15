import * as React from 'react';
import { List } from 'immutable';

import { Article, FeedInfo } from '../logic/atom';

import styles from './FeedDisplayer.css';

export interface FeedDisplayerProps {
    feed: FeedInfo;
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
    if (item.getDescription()) {
        return (<div className={styles.description} dangerouslySetInnerHTML={{__html: item.getDescription()}} />);
    } else {
        return (<blockquote className={styles.summary}>{ item.getSummary() }</blockquote>);
    }
}

const renderArticle = (item:Article) => {
    const date = item.getDate().toLocaleString();
    const key = date + item.getLink();

    return (<div key={key} className={styles.article}>
        <div className={styles.articleTitle}>
            <a target="_blank" href={item.getLink()} className={styles.titleLink}>{ item.getTitle() }</a>
        </div>
        <div className={styles.content}>
            <span className={styles.author}>{ item.getAuthor() }</span>
            <span>&nbsp;|&nbsp;</span>
            <span className={styles.date}>{ date }</span>
            { renderImage(item.getImage()) }
            { renderArticleBody(item) }
        </div>
    </div>);
}

const renderArticles = (items:List<Article>) => {
    if (items.size == 0) {
        return (<span>No articles found.</span>) as any;
    }
    return items.map(renderArticle);
}

const renderFeed = (feed:FeedInfo) => {
    if (!feed) {
        return null;
    }
    const site = feed.getSite();
    const date = site.getDate().toLocaleString();
    return (
        <div className={styles.site}>
            <div className={styles.siteTitle}>
                <a target="_blank" href={site.getLink()} className={styles.titleLink}>
                    { site.getTitle() }
                </a>
            </div>
            { renderImage(site.getImage()) }
            <div className={styles.content}>
                <span>
                    Feed last updated:&nbsp;
                </span>
                { site.getAuthor() && <span className={styles.author}>
                    { site.getAuthor() }&nbsp;|&nbsp;
                </span> }
                <span className={styles.date}>
                    { date }
                </span>
                { site.getDescription() && <div className={styles.content}>
                    { site.getDescription() }
                </div> }
                <div className={styles.articles}>
                    { renderArticles(feed.getItems()) }
                </div>
            </div>
        </div>
    )
}

export const FeedDisplayer = (props:FeedDisplayerProps) => {
    return renderFeed(props.feed);
}
