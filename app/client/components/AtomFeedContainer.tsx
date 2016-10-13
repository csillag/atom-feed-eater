/*
 This is a container component around the TargetForm

 This component is responsible for subscribing to the Redux state,
 and for dispatching the required actions.
 */
import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { AtomFeed, AtomFeedProps } from './AtomFeed';

function mapStateToProps(state:AppState):AtomFeedProps {
    return {
        feed: state.feed
    }
}

export const AtomFeedContainer = connect(mapStateToProps)(AtomFeed);
