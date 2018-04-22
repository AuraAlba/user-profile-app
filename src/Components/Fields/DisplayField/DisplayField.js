import React from "react";
import classes from "./DisplayField.scss";

const DisplayField = (props) =>{
    return(
        <div className={"form-group row " + classes.DisplayS}>
            <label className={"col-sm-5 col-form-label " + classes.LabelS }>{props.label}</label>
            <div className="col-sm-7">
                <span>{props.children}</span>
            </div>

        </div>
    )
};

export default DisplayField;