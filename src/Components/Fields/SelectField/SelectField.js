import React from "react";
import classes from "./SelectField.scss";

const selectField = (props) => {
    return(
        <div className={"form-group row "+ classes.SelectS }>
            <label className="col-sm-3 col-form-label">{props.label}</label>
            <div  className="col-sm-9">
                <select className={"form-control "+ classes.FieldS }>
                    {props.option.map(function (name, index) {
                        return <option key={index} >{name}</option>
                    })}
                </select>
            </div>

        </div>

    )

};

export default selectField;
