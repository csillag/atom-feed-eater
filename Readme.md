
## Atom Feed Eater

This is a demo implementation of an Atom feed displayer.

The live demo is available here:

http://csillag.github.io/atom-feed-eater
    
If you want to run in locally, you need to install [Meteor](http://meteor.com/),
and then run `make dev`.

Since this project is client-only, it can be deployed at any static hosting
solution. For building it that way, run `make build`. The resulting build
will be placed in the `docs` directory.

### Components, libraries and technology used:

 - Languages: 95.8% [Typescript](https://www.typescriptlang.org/) + 2.7% [CoffeeScript](http://coffeescript.org/) + 1.5% ES6
 - Framework: [Meteor](https://www.meteor.com/)
 - UI framework: [React](https://facebook.github.io/react/)
 - Groundwork for styling: [twbs:bootstrap](https://atmospherejs.com/twbs/bootstrap)
 - CSS modules system: [nathantreid:css-modules](https://atmospherejs.com/nathantreid/css-modules)
 - State management: [Redux](http://redux.js.org/)
 - URL validation: [valid-url](https://www.npmjs.com/package/valid-url)
 - Proxy services: [Yahoo Query Language](https://developer.yahoo.com/yql/)
 - Redux middleware for HTTP requests: [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)
 - Parsing ATOM feeds: [node-feedparser](https://www.npmjs.com/package/node-feedparser)
 - xml2json transformation: [xml2js](https://www.npmjs.com/package/xml2js)
 - Bundling the app for server-less static deployment: [meteor-bundle-client](https://www.npmjs.com/package/meteor-build-client)

### Known problems and limitations:

 - Relative links inside the individual articles might be broken.
   (They should be prefixed with the original domain, but currently the
   content of the articles is simply outputted as raw HTML, without
   processing.)
