import * as React from 'react';
import * as classNames from 'classnames';

export interface TargetFormProps {
    url?: string;
    fetching?: boolean;
    parsing?: boolean;
    errorMessage?: string;
    edit?(url:string):void;
    submit?():void;
}

export const TargetForm = (props:TargetFormProps) => {
        const fetching = props.fetching;
        const parsing = props.parsing;
        const busy = fetching || parsing;
        const hasError = props.errorMessage != "";
        const urlGroupClasses = classNames({
            "input-group": true,
            "has-error": hasError,
        });
        
        return (<div id="atom-target-form">
            <div className="row">
                <div className={urlGroupClasses}>    
                    <input
                        type="url"
                        className="form-control"
                        id="url"
                        value={props.url}
                        placeholder="Enter the URL of an ATOM feed!"
                        onChange={(event) => {
                            props.edit((event.target as any).value)
                        }}
                        onKeyUp={(event) => {
                            if (event.key == "Enter") {
                                props.submit();
                            }
                        } }
                    />
                    { busy && (<span className="input-group-addon">
                        <span className="glyphicon glyphicon-repeat fast-right-spinner"></span>&nbsp;
                        { fetching && (<span>Loading...</span> ) }
                        { parsing && (<span>Parsing...</span> ) }
                    </span>)}
                    <span className="input-group-btn">
                       <button
                            disabled={busy}
                            type="submit"                
                            className="btn btn-primary"
                            onClick={ props.submit }
                        >
                            Go fetch!
                        </button>
                    </span>
                </div>
            </div>
            { hasError && <div className="row alert alert-danger">
                {props.errorMessage}
            </div>}
        </div>);
}

// TODO: find out how to apply propTypes
// to stateless function components in TS

//TargetForm.propTypes = React.ValidationMap<TargetFormProps> = {
//        "url": React.PropTypes.string.isRequired,
//        "fetching": React.PropTypes.bool.isRequired,
//        "parsing": React.PropTypes.bool.isRequired,
//        "message": React.PropTypes.string,
//        "edit": React.PropTypes.func.isRequired,
//        "submit": React.PropTypes.func.isRequired,
//};
