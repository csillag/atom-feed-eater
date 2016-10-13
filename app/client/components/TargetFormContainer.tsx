/*
 This is a container component around the TargetForm

 This component is responsible for subscribing to the Redux state,
 and for dispatching the required actions.
 */
import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { editUrl, tryUrl} from '../data/actions';
import { TargetForm, TargetFormProps } from './TargetForm';

function mapStateToProps(state:AppState):TargetFormProps {
    return {
        url: state.url,
        errorMessage: state.urlErrorMessage,
    }
}

function mapDispatchToProps(dispatch):TargetFormProps {
    return {
        edit: (url:string) => { dispatch(editUrl(url)) },
        submit: () => { dispatch(tryUrl()) }
    }
}

export const wtf = null;
export const TargetFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TargetForm);
