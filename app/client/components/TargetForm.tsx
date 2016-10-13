import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

export interface TargetFormProps {
    url?: string;
    errorMessage?: string;
    edit?(url:string):void;
    submit?():void;
}

export class TargetForm extends React.Component<TargetFormProps, {}> {

    static propTypes: React.ValidationMap<TargetFormProps> = {
        url: React.PropTypes.string.isRequired,
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
                        onChange={this.onEdit.bind(this)}
                        onKeyUp={this.onKeyUp.bind(this)}
                    />
                    <span className="input-group-btn">
                        <button
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
                Error: {this.props.errorMessage}
            </div>}
        </div>)
    }
}
