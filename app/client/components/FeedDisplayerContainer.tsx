/*
 This is a container component around the TargetForm

 This component is responsible for subscribing to the Redux state,
 and for dispatching the required actions.
 */
import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { FeedDisplayer, FeedDisplayerProps } from './FeedDisplayer';

function mapStateToProps(state:AppState):FeedDisplayerProps {
    return {
        feed: state.getFeed()
    }
}

export const FeedDisplayerContainer = connect(mapStateToProps)(FeedDisplayer);
