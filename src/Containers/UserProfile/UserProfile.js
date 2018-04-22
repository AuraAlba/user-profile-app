import React, {Component} from 'react';
import InputField from '../../Components/Fields/InputField/InputField';
import SelectField from '../../Components/Fields/SelectField/SelectField';
import ListFeatures from './ListFeatures/ListFeatures';
import DisplayField from '../../Components/Fields/DisplayField/DisplayField';
import DateField from '../../Components/Fields/DateField/DateField';
import ImageField from '../../Components/Fields/ImageField/ImageField';
import classes from './UserProfile.scss';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <h3 className={classes.Center}>User Profile</h3>
                <form action="">
                    <div className={classes.SectionB}>
                    <ImageField src="https://i.imgur.com/LMhM8nn.jpg" alt="Image User"/>
                        <div className={classes.SubSectionB}>
                            <h4>Information account</h4>
                            <DisplayField label="Type Subscription">Basic</DisplayField>
                            <DisplayField label="Creation Date"><DateField date={"2013-03-10T02:00:00Z"}/></DisplayField>
                            <DisplayField label="Last payment"><DateField date={"2010-01-10T09:25:00Z"}/></DisplayField>
                        </div>
                        <div className={classes.SubSectionB}>
                            <InputField label="Email" id="email" type="email"/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <SelectField label="Language" option={['Chinese', 'Italian', 'English', 'Spanish', 'French', 'German']}/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <SelectField label="Theme Name" option={['Simply Fabulous', 'Tropical Island', 'Safari', 'Tranquility', 'Mustache Bash', 'Candy Crush', 'Garden Party']}/>
                        </div>
                        <div className={classes.SubSectionB}>
                            <ListFeatures features={['Certificate generation', 'Background tasks', 'Courseware Search', 'Dashboard Search', 'EDX notes']}/>
                        </div>

                    </div>
                    {/*<DisplayField label="Welcome Message"><MessageField message={"<p><span>Welcome</span> to Mr X's website</p>"}/></DisplayField>*/}



                </form>
            </div>
        );
    }
}

export default UserProfile;