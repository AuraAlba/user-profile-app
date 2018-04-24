import React from "react";
import dataTimeZone from './timeZones';
import classes from './Autocomplete.scss';
import Autosuggest from 'react-autosuggest';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    const suggestions = dataTimeZone.filter(dataTime => regex.test(dataTime.value));

    if (suggestions.length === 0) {
        return [
            {isAddNew: true}
        ];
    }

    return suggestions;
}

class AutocompleteField extends React.Component {
    constructor(props) {
        super();

        this.state = {
            value: props.value,
            suggestions: []
        };
    }

    onChange = (event, {newValue, method}) => {
        this.setState({
            value: newValue
        });
        this.props.changed({
            "target": {
                "value": newValue
            }
        });
        console.log(newValue);
    };

    getSuggestionValue = suggestion => {
        if (suggestion.isAddNew) {
            return this.state.value;
        }

        return suggestion.value;
    };

    renderSuggestion = suggestion => {
        if (suggestion.isAddNew) {
            return (
                <span>
          [+] Add new: <strong>{this.state.value}</strong>
        </span>
            );
        }

        return suggestion.value;
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, {suggestion}) => {
        if (suggestion.isAddNew) {
            console.log('Add new:', this.state.value);
        }
    };

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: "Select time zone",
            value,
            onChange: this.onChange
        };

        return (
            <div className={classes.AutoCompleteS + " form-group row"}>
                <label className="col-sm-3 col-form-label">{this.props.label}</label>
                <div className="col-sm-9">
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        onSuggestionSelected={this.onSuggestionSelected}
                        inputProps={inputProps}
                    />
                </div>
            </div>
        );
    }
}

export default AutocompleteField;

