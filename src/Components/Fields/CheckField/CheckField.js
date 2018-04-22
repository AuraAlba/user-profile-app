import React from "react";
import Toggle from "react-bootstrap-toggle";
import classes from "./CheckField.scss";

class CheckField extends React.Component{
    constructor(){
        super();
        this.state= {toggleActive: false};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
    }


    render(){
        return(
            <div className={"checkbox form-group row "+ classes.CheckFieldS}>
                <label className={"col-sm-6 col-form-label "+classes.CheckLabel} >
                    {this.props.label}
                </label>
                <div  className="col-sm-6">
                    <Toggle
                        onClick={this.onToggle}
                        on={<h6>ON</h6>}
                        off={<h6>OFF</h6>}
                        size="xs"
                        active={this.state.toggleActive}
                        width={80}
                        offClassName={classes.ToggleOffS}
                        onClassName={classes.ToggleOnS}

                    />
                </div>

            </div>
        )
    }
}

export default CheckField;