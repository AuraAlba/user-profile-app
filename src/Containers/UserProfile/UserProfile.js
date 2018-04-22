import React, {Component} from 'react';
import InputField from '../../Components/Fields/InputField/InputField';
import SelectField from '../../Components/Fields/SelectField/SelectField';
import ListFeatures from './ListFeatures/ListFeatures';
import DisplayField from '../../Components/Fields/DisplayField/DisplayField';
import DateField from '../../Components/Fields/DateField/DateField';
import ImageField from '../../Components/Fields/ImageField/ImageField';
import MessageField from '../../Components/Fields/MessageField/MessageField';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2>User Profile</h2>
                <form action="">
                    <ImageField src="https://i.imgur.com/LMhM8nn.jpg" alt="Image User"/>
                    <DisplayField label="Suscription">Basic</DisplayField>
                    <DisplayField label="Creation Date"><DateField date={"2013-03-10T02:00:00Z"}/></DisplayField>
                    <DisplayField label="Last payment"><DateField date={"2010-01-10T09:25:00Z"}/></DisplayField>
                    <InputField label="Email" id="email" type="email"/>
                    <DisplayField label="Welcome Message"><MessageField message={"<p><span>Welcome</span> to Mr X's website</p>"}/></DisplayField>
                    <SelectField label="Theme Name" option={['Simply Fabulous', 'Tropical Island', 'Safari', 'Tranquility', 'Mustache Bash', 'Candy Crush', 'Garden Party']}/>
                    <SelectField label="Language" option={['Chinese', 'Italian', 'English', 'Spanish', 'French', 'German']}/>
                    <ListFeatures features={['Certificate generation', 'Background tasks', 'Courseware Search', 'Dashboard Search', 'EDX notes']}/>


                </form>
            </div>
        );
    }
}

export default UserProfile;