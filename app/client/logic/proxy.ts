// This files describes the proxy we are using to get the data.

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// We are using Yahoo's JQL service to get the feed for us.
// (This is the best way to get around CORS restrictions.)
const baseURL = "https://query.yahooapis.com/v1/public";

export function getURL(url:string) {
    return "yql?q=" + encodeURIComponent("select * from xml where url = '"  + url + "'");
}

// We are using axios to send our HTTP requests. Here, we prepare the redux middleware for it.

export const proxyMiddleware = axiosMiddleware(axios.create({
    baseURL,
    responseType: 'text'
}));

export function isResultValid(text:string) {
    return text.indexOf("<results/>") === -1
}
