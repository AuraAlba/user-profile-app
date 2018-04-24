import React from 'react';
import classes from './InputField.scss';
import themeClasses from '../../../scss/themeStyles.scss';

const inputField = (props) => {
    const inputClasses = [themeClasses.Input, " form-control"];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    return(
        <div className={classes.InputField + " form-group row"}>
            <label className="col-sm-3 col-form-label">{props.label}</label>
            <div className="col-sm-9">
                <input
                    type="props.type"
                    className={inputClasses.join(" ")}
                    id={props.id}
                    name={props.id}
                    placeholder={props.label}
                    value={props.value}
                    onChange={props.changed}
                />
            </div>
        </div>
    )
};

export default inputField;