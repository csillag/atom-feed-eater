// Here we collect our atom-related logic

import { List, Map } from 'immutable';

const parseAtomFeedWithFeedParser = require('node-feedparser');
const xml2js = require('xml2js').parseString;

import { FeedWrapper } from '../logic/wrappers';
const enrichFeed = require('./atom-enrichment');

export interface Article {
    getAuthor(): string;
    getDate(): Date;
    getDescription(): string;
    getLink(): string;
    getTitle(): string
    getSummary(): string;
    getImage(): string;
}

export interface FeedInfo {
    getSite(): Article;
    getItems(): List<Article>;
}

// This is the entry point for parsing an atom feed.
export function parseAtomFeed(input:string,
    callback:(error:string,ret)=>void
) {
    // We are going to do three things:
    // 1. Parse the XML feed with node-feedparser
    // 2. Also convert the XML feed into a JSON object
    // 3. Pick and choose some fields from the JSON
    //    to enrich the data extracted by the primary parser
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
                        callback(null, new FeedWrapper(feed));
                    }
                })
            }
        });
    } catch (e) {
        callback(e.toString(), null);
    }
};
