import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';
import { ControlsContainer } from './ControlsContainer';

// This React component represents the whole application
export class App extends React.Component<{}, {}> {

    public render() {
        return (<Provider store={store}>
            <div className="container">
                <header>
                    <h1>Application</h1>
                </header>

                <ControlsContainer />
                Content comes here.

            </div>
        </Provider>);
    }
}
