/*
 This React component represents the controls. (The buttons and input above the cell grid.)

 This is purely a presentational component. (See also the ControlsContainer.)
*/

import * as React from 'react';

export interface ControlsProps {
    value?: number;
    increase?():void;
}

export class Controls extends React.Component<ControlsProps,{}> {

    static propTypes: React.ValidationMap<ControlsProps> = {
        value: React.PropTypes.number.isRequired,
        increase: React.PropTypes.func.isRequired,
    };

    protected renderValue() {
        return (<div>
                The current value is {this.props.value}.
        </div>)
    }

    protected renderIncrease() {
        return (<button onClick={this.props.increase}>
            Increase
        </button>)
    }

    render() {
        return (<div id="controls">
            { this.renderValue() }
            { this.renderIncrease() }
        </div>);
    }

}
