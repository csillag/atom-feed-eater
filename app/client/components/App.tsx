import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';

import { GithubRibbon } from './GithubRibbon';
import { TargetFormContainer } from './TargetFormContainer';
import { FeedDisplayerContainer } from './FeedDisplayerContainer';

// This React component represents the whole application
export const App = () => (
        <Provider store={store}>
            <div>
                <GithubRibbon url="csillag/atom-feed-eater" />
                <div className="panel-heading atom-title">
                    <h3 className="panel-title">Csillag's Atom feed eater</h3>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                    <TargetFormContainer />
                    <FeedDisplayerContainer />
                </div>
                

            </div>
        </Provider>
)
