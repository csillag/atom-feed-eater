/*
 This is a container component around the Controls.

 This component is responsible for subscribing to the Redux state,
 and for dispatching the required actions.
 */
import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { doSomething } from '../data/actions';
import { Controls, ControlsProps } from './Controls';

function mapStateToProps(state:AppState):ControlsProps {
    return { value: state.value }
}

function mapDispatchToProps(dispatch):ControlsProps {
    return {
        increase: () => { dispatch(doSomething(1)) },
    }
}

export const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
