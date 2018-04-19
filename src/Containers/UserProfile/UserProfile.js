import React, {Component} from 'react';
import InputField from '../../Components/Fields/InputField/InputField';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2>User Profile</h2>
                <form action="">
                    <InputField label="Creation Date" id="cretionDate" type="text"/>
                    <InputField label="Email" id="email" type="email"/>
                </form>
            </div>
        );
    }
}

export default UserProfile;