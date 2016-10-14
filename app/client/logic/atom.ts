// Here we collect our atom-related logic

const parseAtomFeedWithFeedParser = require('node-feedparser');
const xml2js = require('xml2js').parseString;

import { enrichFeed } from './atom_enrichment';

export interface Article {
    author?: string;
    date: Date;
    description?: string;
    link: string;
    title: string
    summary?: string;
    image?: string;
}

export interface AtomFeedInfo {
    site: Article;
    items: Article[];
}

export function parseAtomFeed(input:string, callback:(error,ret)=>void) {
    try {
        parseAtomFeedWithFeedParser(input, (error, feed) => {
            if (error) {
                callback(error, null);
            } else {
                xml2js(input, (error, json) => {
                    if (error) {
                        callback(error, null);
                    } else {
                        enrichFeed(feed, json);
                        callback(null, feed);
                    }
                })
            }
        });
    } catch (e) {
        callback(e.toString(), null);
    }
};

