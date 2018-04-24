import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {IntlProvider, injectIntl} from 'react-intl';
import './App.css';
import {Layout} from "./Containers/Layout/Layout";
import UserProfile from "./Containers/UserProfile/UserProfile";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import messages from "./messages";
import themeClasses from "./scss/themeStyles.scss";

class App extends Component {
    render() {
        return (
            <IntlProvider
                locale={this.props.lang}
                messages={messages[this.props.lang]}>
                <div className="App">
                    <Layout class={themeClasses.TranquilityTheme}>
                        <Switch>
                            <Route path="/user-profile" exact component={UserProfile}/>
                            <Route path="/contact-us" exact component={ContactUs}/>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                    </Layout>
                </div>
            </IntlProvider>
        );
    }
}

export default withRouter(App);
