import React from "react";
import '../../../../node_modules/froala-editor/js/froala_editor.pkgd.min';
import '../../../../node_modules/froala-editor/css/froala_style.min.css?raw';
import '../../../../node_modules/froala-editor/css/froala_editor.pkgd.min.css?raw';
import '../../../../node_modules/font-awesome/css/font-awesome.css?raw';
import FroalaEditor from 'react-froala-wysiwyg';
import classes from "./MessageField.scss";


class MessageField extends React.Component{
    constructor (props) {
        super();

        this.handleModelChange = this.handleModelChange.bind(this);

        this.state = {
            model: props.message
        };
    }

    handleModelChange(model) {
        this.setState({
            model: model
        });
        console.log(model);
        this.props.changed({
            "target": {
                "value": model
            }
        });
    };

    render () {
        return (
            <div className={ classes.MessageS }>
                <h4>Welcome Message</h4>
                <FroalaEditor
                    tag='textarea'
                    config={this.config}
                    model={this.state.model}
                    onModelChange={this.handleModelChange}
                />
            </div>

        )
    }
};

export default MessageField;
