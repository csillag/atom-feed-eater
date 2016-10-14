import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

import { Article } from '../logic/atom';

export interface FeedItemProps {
    item: Article;
}

export class FeedItem extends React.Component<FeedItemProps, {}> {

    private renderImage(url:string) {
        if (!url) {
            return null;
        }
        return (<div><img
            className="atom-thumbnail"
            src={url}
        /></div>)
    }

    private renderBody(item:Article) {
        if (item.description) {
            return (<div className="atom-description" dangerouslySetInnerHTML={{__html: item.description}} />);
        } else {
            return (<blockquote className="atom-summary">{ item.summary }</blockquote>);
        }
    }

    render() {
        const item = this.props.item;
        const date = item.date.toLocaleString();
        return (<div className="atom-article">
            <div className="atom-title">
                <a target="_blank" href={item.link}>{ item.title }</a>
            </div>
            <div className="atom-content">
                <span className="atom-author">{ item.author }</span>
                <span>&nbsp;|&nbsp;</span>
                <span className="atom-date">{ date }</span>
                { this.renderImage(item.image) }
                { this.renderBody(item) }
            </div>
        </div>);
    }
}
