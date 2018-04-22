import React from "react";

const DisplayField = (props) =>{
    return(
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-10">
                <span>{props.children}</span>
            </div>

        </div>
    )
};

export default DisplayField;