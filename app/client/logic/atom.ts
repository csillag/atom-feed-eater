// Here we collect our atom-related logic

const parseAtomFeedWithFeedParser = require('node-feedparser');
const xml2js = require('xml2js').parseString;

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

// Try to extract some more data from the raw JSON
// in order to make up for the deficiencies of the atom parser
function enhanceItem(item:Article, raw:any) {
    const thumbnail = (((raw["media:thumbnail"] || [])[0] || {}).$ || {}).url;
    if (!item.image && !!thumbnail) {
        item.image = thumbnail;
    }
}

// Try to fill in the missing pieces of info
// from the raw JSON data
function enhanceFeed(feed:AtomFeedInfo, raw:any) {
    if (!feed.site.image) {
        feed.site.image = ((((((raw.feed || raw.rss).channel || [])[0] || {}).image || [])[0] || {}).url || [])[0];
    }
    const entries = (raw.feed || {}).entry
          || (((raw.rss || {}).channel || [])[0] || {}).item
    if (entries) {
        for (let i=0; i<feed.items.length; i++) {
            enhanceItem(feed.items[i], entries[i]);
        }
    }
    return;
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
                        enhanceFeed(feed, json);
                        callback(null, feed);
                    }
                })
            }
        });
    } catch (e) {
        callback(e.toString(), null);
    }
};

