import React from "react";
import Toggle from "react-bootstrap-toggle";

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
            <div className="checkbox form-group row">
                <label className="col-sm-8 col-form-label" >
                    {this.props.label}
                </label>
                <div  className="col-sm-4">
                    <Toggle
                        onClick={this.onToggle}
                        on={<h6>ON</h6>}
                        off={<h6>OFF</h6>}
                        size="xs"
                        active={this.state.toggleActive}
                        width={80}
                    />
                </div>

            </div>
        )
    }
}

export default CheckField;