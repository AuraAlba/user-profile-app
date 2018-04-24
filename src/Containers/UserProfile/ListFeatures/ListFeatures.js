import React from "react";
import CheckField from '../../../Components/Fields/CheckField/CheckField';
import classes from './ListFeatures.scss';

class ListFeatures extends React.Component{
    state = {
        numFeaturesEnabled: null,
        listFeatures: []
    };

    getNumerFeautersEnabled() {
        return this.state.listFeatures.filter( (feature) => {
            return feature.value;
        }).length
    }

    componentDidMount(){
        console.log(this.props);
        const numFeaturesEnabled = this.getNumerFeautersEnabled();

        this.setState({
            listFeatures : this.props.features,
            numFeaturesEnabled : numFeaturesEnabled
        });

        console.log(this.state);
    }

    onToggleHandler(value, key){
        let valuesToReplace = [...this.state.listFeatures];
        valuesToReplace[key].value = value;

        if (this.getNumerFeautersEnabled() >= this.props.maxNumberFeatures) {
            valuesToReplace = valuesToReplace.map((feature) => {
                return {
                    ...feature,
                    "disabled": !feature.value
                }
            });
        } else {
            valuesToReplace = valuesToReplace.map((feature) => {
                return {
                    ...feature,
                    "disabled": false
                }
            });
        }

        this.setState({
            "listFeatures": valuesToReplace,
            "numFeaturesEnabled": this.getNumerFeautersEnabled()
        });
    }

    render(){
        return(
            <div className={"form-group row " + classes.FeatureS}>
                <h4>{this.props.title}</h4>
                <div className="col-sm-12">
                    {this.state.listFeatures.map((name, index) => {
                        return <CheckField
                            label={name.label}
                            key={index}
                            index={index}
                            active={name.value}
                            clicked={(value, key) => this.onToggleHandler(value, key)}
                            disabled={name.disabled}
                        />
                    })}

                </div>


            </div>
        )
    }
}

export default ListFeatures;