// Here we collect our atom-related logic

export const parseAtomFeed = require('node-feedparser');

export interface Article {
    author: string;
    date: Date;
    description: string;
    link: string;
    title: string
    summary: string;
}

export interface AtomFeedInfo {
    site: Article;
    items: Article[];
}
