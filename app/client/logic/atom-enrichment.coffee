# In this file, we try to extract some more data from the raw JSON
# in order to make up for the deficiencies of the atom parser

# Enrich one article
enrichItem = (item, raw) ->
        # Try to get the acticle thumbnail image
        item["image"] ?= raw["media:thumbnail"]?[0]?.$?.url

# Enrich the whole feed
module.exports = enrichFeed = (feed, raw) ->
        # Try to get the feed thumbnail image
        feed.site.image ?= (raw.feed ? raw.rss)?.channel?[0]?.image?[0]?.url?[0]
        # Get the articles
        if entries = raw.feed?.entry ? raw.rss?.channel?[0]?.item
                # Go over all the articles
                enrichItem(feed.items[i], entries[i]) for i in [0 ... feed.items.length]
