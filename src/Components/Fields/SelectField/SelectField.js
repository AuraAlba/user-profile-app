import React from "react";
import classes from "./SelectField.scss";
import themeClasses from "../../../scss/themeStyles.scss";

const selectField = (props) => {
    return(
        <div className={"form-group row "+ classes.SelectS }>
            <label className="col-sm-3 col-form-label">{props.label}</label>
            <div  className="col-sm-9">
                <select
                    className={"form-control "+ themeClasses.FieldS }
                    value={props.selected}
                    onChange={props.changed}
                >
                    {props.option.map(function (option, index) {
                        return <option key={index} value={option.value} >{option.label}</option>
                    })}
                </select>
            </div>
        </div>
    )
};

export default selectField;
