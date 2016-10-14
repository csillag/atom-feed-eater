import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

export interface TargetFormProps {
    url?: string;
    fetching?: boolean;
    parsing?: boolean;
    errorMessage?: string;
    edit?(url:string):void;
    submit?():void;
}

export class TargetForm extends React.Component<TargetFormProps, {}> {

    static propTypes: React.ValidationMap<TargetFormProps> = {
        url: React.PropTypes.string.isRequired,
        fetching: React.PropTypes.bool.isRequired,
        parsing: React.PropTypes.bool.isRequired,
        message: React.PropTypes.string,
        edit: React.PropTypes.func.isRequired,
        submit: React.PropTypes.func.isRequired,        
    };

    private onEdit(event) { this.props.edit(event.target.value); }

    private onKeyUp(event) {
        if (event.key == "Enter") {
            this.props.submit();
        }
    }
    
    private onSubmit(event) {
        this.props.submit();
    }

    render() {
        const fetching = this.props.fetching;
        const parsing = this.props.parsing;
        const busy = fetching || parsing;
        const hasError = this.props.errorMessage != "";
        const urlGroupClasses = classNames({
            "input-group": true,
            "has-error": hasError,
        });
        
        return (<div>
            <div className="row">
                <div className={urlGroupClasses}>    
                    <input
                        type="url"
                        className="form-control"
                        id="url"
                        value={this.props.url}
                        placeholder="Enter the URL of an ATOM feed!"
                        onChange={this.onEdit.bind(this)}
                        onKeyUp={this.onKeyUp.bind(this)}
                    />
                    { busy && (<span className="input-group-addon">
                        <span className="glyphicon glyphicon-repeat fast-right-spinner"></span>&nbsp;
                        { fetching && (<span>Loading...</span> ) }
                        { parsing && (<span>Parsing...</span> ) }
                    </span>)}
                    <span className="input-group-btn">
                       <button
                            disabled={fetching}
                            type="submit"                
                            className="btn btn-primary"
                            onClick={this.onSubmit.bind(this)}
                        >
                            Go fetch!
                        </button>
                    </span>
                </div>
            </div>
            { hasError && <div className="row alert alert-danger">
                {this.props.errorMessage}
            </div>}
        </div>)
    }
}
