import React from 'react';
import classes from './InputField.scss';

const inputField = (props) => {
    return(
        <div className={classes.InputField + " form-group row"}>
            <label className="col-sm-3 col-form-label">{props.label}</label>
            <div className="col-sm-9">
                <input type="props.type" className={classes.Input + " form-control"} id={props.id} name={props.id} placeholder={props.label} />
            </div>
        </div>
    )
};

export default inputField;