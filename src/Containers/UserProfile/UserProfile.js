import React, {Component} from 'react';
import InputField from '../../Components/Fields/InputField/InputField';
import SelectField from '../../Components/Fields/SelectField/SelectField';
import ListFeatures from './ListFeatures/ListFeatures';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2>User Profile</h2>
                <form action="">
                    <InputField label="Creation Date" id="cretionDate" type="text"/>
                    <InputField label="Email" id="email" type="email"/>
                    <SelectField label="Suscription" option={['Free', 'Basic', 'Premium']}/>
                    <SelectField label="Theme Name" option={['Simply Fabulous', 'Tropical Island', 'Safari', 'Tranquility', 'Mustache Bash', 'Candy Crush', 'Garden Party']}/>
                    <SelectField label="Language" option={['Chinese', 'Italian', 'English', 'Spanish', 'French', 'German']}/>
                    <ListFeatures features={['Certificate generation', 'Background tasks', 'Courseware Search', 'Dashboard Search', 'EDX notes']}/>

                </form>
            </div>
        );
    }
}

export default UserProfile;