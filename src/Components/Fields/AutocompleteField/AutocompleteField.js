import React from "react";
import Autocomplete from 'react-autocomplete';
import dataTimeZone from './timeZones';
import classes from './Autocomplete.scss';

class AutocompleteField extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "",
            autocompleteData: dataTimeZone
        };

        this.renderItem = this.renderItem.bind(this);
    }


    renderItem(item, highlighted){
        return (
            <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#e4f7ffdb' : '#3d91b7',
                        color: highlighted ? '#3d91b7' : 'white'}}
            >
                {item.label}
            </div>
        );
    }

    render() {
        return (
            <div className={"form-group row "+ classes.AutoCompleteS}>
                <label className="col-sm-3 col-form-label">{this.props.label}</label>
                <div className={"col-sm-9"}>
                <Autocomplete
                    getItemValue={(item) => item.label}
                    items={this.state.autocompleteData}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    renderItem={this.renderItem}
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
                </div>
            </div>
        );
    }

}

export default AutocompleteField;

