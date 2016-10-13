import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

export interface AtomFeedProps {
    feed: any;
}

export class AtomFeed extends React.Component<AtomFeedProps, {}> {

    render() {
        const feed = this.props.feed;
        if (!feed) {
            return null;
        }
        console.log("Rendering atom feed", feed);
        return (<div>
                The feed comes here
        </div>)
    }
}
