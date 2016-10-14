
## Atom Feed Eater

This is a demo implementation of an Atom feed displayer.

The live demo is available here:

http://csillag.github.io/atom-feed-eater
    
If you want to run in locally, you need to install [Meteor](http://meteor.com/),
and then run `make dev`.

Since this project is client-only, it can be deployed at any static hosting
solution. For building it that way, it depends on the [meteor-build-client](https://github.com/frozeman/meteor-build-client) tool.

### Components, libraries and technology used:

 - Language: [Typescript](https://www.typescriptlang.org/)
 - Framework: [Meteor](https://www.meteor.com/)
 - UI framework: [React](https://facebook.github.io/react/)
 - CSS: [twbs:bootstrap](https://atmospherejs.com/twbs/bootstrap)
 - State management: [Redux](http://redux.js.org/)
 - Proxy services: [Yahoo Query Language](https://developer.yahoo.com/yql/)
 - Redux middleware for HTTP requests: [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
 - Parsing ATOM feeds: [node-feedparser](https://www.npmjs.com/package/node-feedparser)

### Known problems and limitations:

 - Relative links inside the individual articles might be broken.
   (They should be prefixed with the original domain, but currently the
   content of the articles is simply outputted as raw HTML, without
   processing.)
