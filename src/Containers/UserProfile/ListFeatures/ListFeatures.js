import React from "react";
import CheckField from '../../../Components/Fields/CheckField/CheckField';
import classes from './ListFeatures.scss';

class ListFeatures extends React.Component{
    render(){
        return(
            <div className={"form-group row " + classes.FeatureS}>
                <h4>{this.props.title}</h4>
                <div className="col-sm-12">
                    {this.props.features.map(function(name, index){
                        return <CheckField label={name} key={index}/>
                    })}

                </div>


            </div>
        )
    }
}

export default ListFeatures;