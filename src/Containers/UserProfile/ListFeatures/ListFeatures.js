import React from "react";
import CheckField from '../../../Components/Fields/CheckField/CheckField'

class ListFeatures extends React.Component{
    render(){
        return(
            <div className="form-group row">
                <h2>Features</h2>
                <div className="col-sm-10">
                    {this.props.features.map(function(name, index){
                        return <CheckField label={name} id={index}/>
                    })}

                </div>


            </div>
        )
    }
}

export default ListFeatures;