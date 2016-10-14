import * as React from 'react';
import * as classNames from 'classnames';

import styles from './Spinner.css';

export const Spinner = () => {
    const classes:ClassDictionary = {
        "glyphicon": true,
        "glyphicon-repeat": true,
    }
    classes[styles["fast-right-spinner"]] = true;
    return (<span className={classNames(classes)}></span>);
}
