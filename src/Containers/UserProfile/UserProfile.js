import React, {Component} from 'react';
import {injectIntl} from 'react-intl';
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


class UserProfile extends Component {
    render() {
        const intl = this.props.intl;
        const subscription = {
            "free": 1,
            "basic": 3,
            "premium": 6
        };

        return (
            <div>
                <h3 className={classes.Center}><FormattedMessage id="userProfile" defaultMessage="User profile"/></h3>
                <form action="">
                    <div className={classes.SectionB}>
                        <ImageField src="https://i.imgur.com/LMhM8nn.jpg" alt="Image User"/>
                        <div className={classes.SubSectionB}>
                            <h4><FormattedMessage id="informationAccount" defaultMessage="Information Account"/></h4>
                            <DisplayField label={intl.formatMessage({id: 'subscriptionType'})}>Basic</DisplayField>
                            <DisplayField label={intl.formatMessage({id: 'creationDate'})}><DateField
                                date={"2013-03-10T02:00:00Z"}/></DisplayField>
                            <DisplayField label={intl.formatMessage({id: 'lastPayment'})}><DateField
                                date={"2010-01-10T09:25:00Z"}/></DisplayField>
                        </div>
                        <div className={classes.SubSectionB}>
                            <AutocompleteField label={"Time Zones"}/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <InputField label={intl.formatMessage({id: 'email'})} id="email" type="email"/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <SelectField label={intl.formatMessage({id: 'language'})}
                                         option={['Chinese', 'Italian', 'English', 'Spanish', 'French', 'German']}/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <SelectField label={intl.formatMessage({id: 'themeName'})}
                                         option={['Simply Fabulous', 'Tropical Island', 'Safari', 'Tranquility', 'Mustache Bash', 'Candy Crush', 'Garden Party']}/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <ListFeatures
                                maxNumberFeatures={subscription["basic"]}
                                title={intl.formatMessage({id: 'features'})}
                                features={[
                                    {
                                        "label": intl.formatMessage({id: 'CERTIFICATES_INSTRUCTOR_GENERATION'}),
                                        "value": true,
                                        "disabled": false
                                    },
                                    {
                                        "label": intl.formatMessage({id: 'INSTRUCTOR_BACKGROUND_TASKS'}),
                                        "value": false,
                                        "disabled": false
                                    },
                                    {
                                        "label": intl.formatMessage({id: 'ENABLE_COURSEWARE_SEARCH'}),
                                        "value": false,
                                        "disabled": false
                                    },
                                    {
                                        "label": intl.formatMessage({id: 'ENABLE_COURSE_DISCOVERY'}),
                                        "value": false,
                                        "disabled": false
                                    },
                                    {
                                        "label": intl.formatMessage({id: 'ENABLE_DASHBOARD_SEARCH'}),
                                        "value": false,
                                        "disabled": false
                                    },
                                    {
                                        "label": intl.formatMessage({id: 'ENABLE_EDXNOTES'}),
                                        "value": false,
                                        "disabled": false
                                    }

                                ]}/>
                        </div>

                        <div className={classes.SubSectionB}>
                            <MessageField message={"<p><span>Welcome</span> to Mr X's website</p>"}/>
                        </div>


                    </div>


                </form>
            </div>
        );
    }
}

export default injectIntl(UserProfile);