import React from "react";
import Toggle from "react-bootstrap-toggle";
import classes from "./CheckField.scss";

class CheckField extends React.Component{
    constructor(props){
        super();
        this.state= {toggleActive: props.active};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        const newToggleValue = !this.state.toggleActive;
        this.setState({ toggleActive: newToggleValue });
        this.props.clicked(newToggleValue, this.props.index, this.props.keyFeature);
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
                        disabled={this.props.disabled}
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