
import { Article, AtomFeedInfo } from './atom';

// Try to extract some more data from the raw JSON
// in order to make up for the deficiencies of the atom parser
function enrichItem(item:Article, raw:any) {
    const thumbnail = (((raw["media:thumbnail"] || [])[0] || {}).$ || {}).url;
    if (!item.image && !!thumbnail) {
        item.image = thumbnail;
    }
}

// Try to fill in the missing pieces of info
// from the raw JSON data
export function enrichFeed(feed:AtomFeedInfo, raw:any) {
    if (!feed.site.image) {
        feed.site.image = ((((((raw.feed || raw.rss).channel || [])[0] || {}).image || [])[0] || {}).url || [])[0];
    }
    const entries = (raw.feed || {}).entry
          || (((raw.rss || {}).channel || [])[0] || {}).item
    if (entries) {
        for (let i=0; i<feed.items.length; i++) {
            enrichItem(feed.items[i], entries[i]);
        }
    }
    return;
}

