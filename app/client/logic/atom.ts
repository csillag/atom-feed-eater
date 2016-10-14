// Here we collect our atom-related logic

const parseAtomFeedWithFeedParser = require('node-feedparser');
const xml2js = require('xml2js').parseString;

const enrichFeed = require('./atom-enrichment');

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

// This is the entry point for parsing an atom feed.
export function parseAtomFeed(input:string, callback:(error,ret)=>void) {
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
                        callback(null, feed);
                    }
                })
            }
        });
    } catch (e) {
        callback(e.toString(), null);
    }
};
