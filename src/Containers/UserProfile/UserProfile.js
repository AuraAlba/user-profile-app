import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {injectIntl} from 'react-intl';
import axios from '../../axiosInstance';

import InputField from '../../Components/Fields/InputField/InputField';
import SelectField from '../../Components/Fields/SelectField/SelectField';
import ListFeatures from './ListFeatures/ListFeatures';
import DisplayField from '../../Components/Fields/DisplayField/DisplayField';
import DateField from '../../Components/Fields/DateField/DateField';
import ImageField from '../../Components/Fields/ImageField/ImageField';
import MessageField from '../../Components/Fields/MessageField/MessageField';
import AutocompleteField from '../../Components/Fields/AutocompleteField/AutocompleteField';
import classes from './UserProfile.scss';
import {FormattedMessage} from 'react-intl';
import {updateObject, checkValidity} from "../../shared/utility";


//Keys
// a237ed14-88fb-45f3-b9b1-471877dbdc60
// 49a6307e-c261-414d-86f5-c6004bcec8ab
// 1b2f7b83-7b4d-441d-a210-afaa970e5b76


class UserProfile extends Component {
    state = {
        "formIsValid": true,
        "subscription": null,
        "creationDate": null,
        "lastPaymentDate": null,
        "userProfileImage": null,
        "formData": {
            "enabledFeatures": {
                "CERTIFICATES_INSTRUCTOR_GENERATION": false,
                "INSTRUCTOR_BACKGROUND_TASKS": false,
                "ENABLE_COURSEWARE_SEARCH": false,
                "ENABLE_COURSE_DISCOVERY": false,
                "ENABLE_DASHBOARD_SEARCH": false,
                "ENABLE_EDXNOTES": false,
                "valid": true,
                "touched": false,

            },
            "languageCode": {
                "valid": true,
                "touched": false,
                "value": null
            },
            "bannerMessage": {
                "valid": true,
                "touched": false,
                "value": null
            },
            "displayedTimezone": {
                "valid": true,
                "touched": false,
                "value": null
            },
            "userEmail": {
                "valid": true,
                "touched": false,
                "value": null,
                "validation": {
                    "required": true,
                    "isEmail": true
                },
            },
            "themeName": {
                "valid": true,
                "touched": false,
                "value": null
            }
        },
        "dataLoaded": false,
        "dataSent": false,
        "userId": null
    };

    componentDidMount() {
        const idUser = sessionStorage.getItem("idUser");

        if (idUser) {
            axios.get('customerData/' + idUser)
                .then(res => {
                    const formData = {
                        "enabledFeatures": updateObject(this.state.formData.enabledFeatures, {
                            "CERTIFICATES_INSTRUCTOR_GENERATION": res.data.ENABLED_FEATURES.CERTIFICATES_INSTRUCTOR_GENERATION,
                            "INSTRUCTOR_BACKGROUND_TASKS": res.data.ENABLED_FEATURES.INSTRUCTOR_BACKGROUND_TASKS,
                            "ENABLE_COURSEWARE_SEARCH": res.data.ENABLED_FEATURES.ENABLE_COURSEWARE_SEARCH,
                            "ENABLE_COURSE_DISCOVERY": res.data.ENABLED_FEATURES.ENABLE_COURSE_DISCOVERY,
                            "ENABLE_DASHBOARD_SEARCH": res.data.ENABLED_FEATURES.ENABLE_DASHBOARD_SEARCH,
                            "ENABLE_EDXNOTES": res.data.ENABLED_FEATURES.ENABLE_COURSEWARE_SEARCH
                        }),
                        "languageCode": updateObject(this.state.formData.languageCode, {"value": res.data.language_code}),
                        "bannerMessage": updateObject(this.state.formData.bannerMessage, {"value": res.data.banner_message}),
                        "displayedTimezone": updateObject(this.state.formData.displayedTimezone, {"value": res.data.displayed_timezone}),
                        "userEmail": updateObject(this.state.formData.userEmail, {"value": res.data.user_email}),
                        "themeName": updateObject(this.state.formData.themeName, {"value": res.data.theme_name})
                    };

                    this.setState({
                        "dataLoaded": true,
                        "subscription": res.data.SUBSCRIPTION,
                        "creationDate": res.data.CREATION_DATE,
                        "lastPaymentDate": res.data.LAST_PAYMENT_DATE,
                        "userProfileImage": res.data.user_profile_image,
                        "formData": formData,
                        "userId": idUser
                    });
                    this.props.dataSaved(formData);
                });
        }
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.formData[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.formData[inputIdentifier].validation),
                touched: true
            }),
            updatedOrderForm = updateObject(this.state.formData, {
                [inputIdentifier]: updatedFormElement
            });
        let formIsValid = true;

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formData: updatedOrderForm,
            formIsValid: formIsValid
        });
    };

    featureChanged(value, key) {
        const updatedFormElement = updateObject(this.state.formData.enabledFeatures, {
                [key]: value
            }),
            updatedOrderForm = updateObject(this.state.formData, {
                "enabledFeatures": updatedFormElement
            });

        this.setState({
            formData: updatedOrderForm,
        });
        console.log(this.state);
    }

    onSubmitButton(evt) {
        const formmData = {
            "userEmail": this.refs.emailInput
        };

        evt.preventDefault();
        axios.post('customerData/' + this.state.userId, {
            "banner_message": this.state.formData.bannerMessage.value,
            "LAST_PAYMENT_DATE": this.state.lastPaymentDate,
            "theme_name": this.state.formData.themeName.value,
            "user_profile_image": this.state.userProfileImage,
            "ENABLED_FEATURES": {
                "CERTIFICATES_INSTRUCTOR_GENERATION": this.state.formData.enabledFeatures.CERTIFICATES_INSTRUCTOR_GENERATION,
                "ENABLE_COURSEWARE_SEARCH": this.state.formData.enabledFeatures.ENABLE_COURSEWARE_SEARCH,
                "ENABLE_EDXNOTES": this.state.formData.enabledFeatures.ENABLE_EDXNOTES,
                "ENABLE_DASHBOARD_SEARCH": this.state.formData.enabledFeatures.ENABLE_DASHBOARD_SEARCH,
                "INSTRUCTOR_BACKGROUND_TASKS": this.state.formData.enabledFeatures.INSTRUCTOR_BACKGROUND_TASKS,
                "ENABLE_COURSE_DISCOVERY": this.state.formData.enabledFeatures.ENABLE_COURSE_DISCOVERY
            },
            "displayed_timezone": this.state.formData.displayedTimezone.value,
            "language_code": this.state.formData.languageCode.value,
            "CREATION_DATE": this.state.creationDate,
            "user_email": this.state.formData.userEmail.value,
            "SUBSCRIPTION": this.state.subscription
        })
            .then((res) => {
                console.log(res);
                this.setState({
                    "dataSent": true
                });
                window.scrollTo(0, 0);
                this.props.dataSaved({...this.state.formData});
            });
        console.log(this.state);
    }

    render() {
        const intl = this.props.intl;
        const subscription = {
            "free": 1,
            "basic": 3,
            "premium": 6
        };

        let returnedComponent = (
            <h2 className={classes.Center}><FormattedMessage id="informationNotAvailabke"
                                                             defaultMessage="Information not available"/></h2>
        );

        let succesMessage = this.state.dataSent ? (
            <h2 className={classes.Center}><FormattedMessage id="succesMessage"
                                                             defaultMessage="Information saved successfully"/></h2>
        ) : null;

        if (this.state.dataLoaded) {
            returnedComponent = (
                <div>
                    {succesMessage}
                    <h3 className={classes.Center}><FormattedMessage id="userProfile" defaultMessage="User profile"/>
                    </h3>
                    <form action="">
                        <div className={classes.SectionB}>
                            <ImageField src={this.state.userProfileImage} alt="Image User"/>
                            <div className={classes.SubSectionB}>
                                <h4><FormattedMessage id="informationAccount" defaultMessage="Information Account"/>
                                </h4>
                                <DisplayField
                                    label={intl.formatMessage({id: 'subscriptionType'})}>{this.state.subscription}</DisplayField>
                                <DisplayField label={intl.formatMessage({id: 'creationDate'})}><DateField
                                    date={this.state.creationDate}/></DisplayField>
                                <DisplayField label={intl.formatMessage({id: 'lastPayment'})}><DateField
                                    date={this.state.lastPaymentDate}/></DisplayField>
                            </div>
                            <div className={classes.SubSectionB}>
                                <AutocompleteField label={"Time Zones"}/>
                            </div>
                            <div className={classes.SubSectionB}>
                                <InputField
                                    label={intl.formatMessage({id: 'email'})}
                                    id="userEmail"
                                    type="email"
                                    value={this.state.formData.userEmail.value}
                                    invalid={!this.state.formData.userEmail.valid}
                                    shouldValidate={this.state.formData.userEmail.validation}
                                    touched={this.state.formData.userEmail.touched}
                                    changed={(event) => this.inputChangeHandler(event, "userEmail")}
                                />
                            </div>
                            <div className={classes.SubSectionB}>
                                <SelectField
                                    label={intl.formatMessage({id: 'language'})}
                                    option={[
                                        {
                                            "value": "zh",
                                            "label": "Chinese"
                                        },
                                        {
                                            "value": "it",
                                            "label": "Italian"
                                        },
                                        {
                                            "value": "en",
                                            "label": "English"
                                        },
                                        {
                                            "value": "es",
                                            "label": "Spanish"
                                        },
                                        {
                                            "value": "fr",
                                            "label": "French"
                                        },
                                        {
                                            "value": "de",
                                            "label": "German"
                                        }
                                    ]}
                                    selected={this.state.formData.languageCode.value}
                                    changed={(event) => this.inputChangeHandler(event, "languageCode")}
                                />
                            </div>
                            <div className={classes.SubSectionB}>
                                <SelectField
                                    label={intl.formatMessage({id: 'themeName'})}
                                    selected={this.state.formData.themeName.value}
                                    changed={(event) => this.inputChangeHandler(event, "themeName")}
                                    option={[
                                        {
                                            "value": "Simply Fabulous",
                                            "label": "Simply Fabulous"
                                        },
                                        {
                                            "value": "Tropical Island",
                                            "label": "Tropical Island"
                                        },
                                        {
                                            "value": "Safari",
                                            "label": 'Safari'
                                        },
                                        {
                                            "value": "Tranquility",
                                            "label": 'Tranquility'
                                        },
                                        {
                                            "value": "Mustache Bash",
                                            "label": "Mustache Bash"
                                        },
                                        {
                                            "value": "Candy Crush",
                                            "label": 'Candy Crush'
                                        },
                                        {
                                            "value": "Garden Party",
                                            "label": 'Garden Party'
                                        }
                                    ]}
                                />
                            </div>
                            <div className={classes.SubSectionB}>
                                <ListFeatures
                                    maxNumberFeatures={subscription[this.state.subscription]}
                                    title={intl.formatMessage({id: 'features'})}
                                    features={[
                                        {
                                            "label": intl.formatMessage({id: 'CERTIFICATES_INSTRUCTOR_GENERATION'}),
                                            "keyFeature": 'CERTIFICATES_INSTRUCTOR_GENERATION',
                                            "value": this.state.formData.enabledFeatures.CERTIFICATES_INSTRUCTOR_GENERATION,
                                            "disabled": false
                                        },
                                        {
                                            "label": intl.formatMessage({id: 'INSTRUCTOR_BACKGROUND_TASKS'}),
                                            "keyFeature": 'INSTRUCTOR_BACKGROUND_TASKS',
                                            "value": this.state.formData.enabledFeatures.INSTRUCTOR_BACKGROUND_TASKS,
                                            "disabled": false
                                        },
                                        {
                                            "label": intl.formatMessage({id: 'ENABLE_COURSEWARE_SEARCH'}),
                                            "keyFeature": 'ENABLE_COURSEWARE_SEARCH',
                                            "value": this.state.formData.enabledFeatures.ENABLE_COURSEWARE_SEARCH,
                                            "disabled": false
                                        },
                                        {
                                            "label": intl.formatMessage({id: 'ENABLE_COURSE_DISCOVERY'}),
                                            "keyFeature": 'ENABLE_COURSE_DISCOVERY',
                                            "value": this.state.formData.enabledFeatures.ENABLE_COURSE_DISCOVERY,
                                            "disabled": false
                                        },
                                        {
                                            "label": intl.formatMessage({id: 'ENABLE_DASHBOARD_SEARCH'}),
                                            "keyFeature": 'ENABLE_DASHBOARD_SEARCH',
                                            "value": this.state.formData.enabledFeatures.ENABLE_DASHBOARD_SEARCH,
                                            "disabled": false
                                        },
                                        {
                                            "label": intl.formatMessage({id: 'ENABLE_EDXNOTES'}),
                                            "keyFeature": 'ENABLE_EDXNOTES',
                                            "value": this.state.formData.enabledFeatures.ENABLE_EDXNOTES,
                                            "disabled": false
                                        }

                                    ]}
                                    changed={this.featureChanged.bind(this)}
                                />
                            </div>

                            <div className={classes.SubSectionB}>
                                <MessageField
                                    message={this.state.formData.bannerMessage.value}
                                    changed={(event) => this.inputChangeHandler(event, "bannerMessage")}
                                />
                            </div>

                            <button
                                className="btn btn-primary"
                                onClick={(evt) => this.onSubmitButton(evt)}
                                disabled={!this.state.formIsValid}
                            >
                                <FormattedMessage
                                    id="sendButton"
                                    defaultMessage="Save"/>
                            </button>
                        </div>
                    </form>
                </div>)
        }

        return (
            <div>
                {returnedComponent}
            </div>
        );
    }
}

export default injectIntl(UserProfile);