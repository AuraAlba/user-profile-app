import React from "react";

const selectField = (props) => {
    return(
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{props.label}</label>
            <div  className="col-sm-10">
                <select className="form-control">
                    {props.option.map(function (name, index) {
                        return <option key={index} >{name}</option>
                    })}
                </select>
            </div>

        </div>

    )

};

export default selectField;
