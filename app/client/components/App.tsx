import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';

import { TargetFormContainer } from './TargetFormContainer';
import { FeedDisplayerContainer } from './FeedDisplayerContainer';

// This React component represents the whole application
export class App extends React.Component<{}, {}> {

    handleSubmit(event) {
        event.preventDefault();
        console.log(event)
//        console.debug();
    }
    
    public render() {
        return (<Provider store={store}>
            <div>
                <div className="panel-heading">    
                    <h3 className="panel-title">Atom feed reader</h3>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                    <TargetFormContainer />
                    <FeedDisplayerContainer />
                </div>
                

            </div>
        </Provider>);
    }
}
