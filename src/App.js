import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import {Layout} from "./Containers/Layout/Layout";
import UserProfile from "./Containers/UserProfile/UserProfile";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/user-profile" exact component={UserProfile}/>
                        <Route path="/contact-us" exact component={ContactUs}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>


            </div>
        );
    }
}

export default withRouter(App);
