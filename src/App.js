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
    state = {
        "lang": "en",
        "theme": "TranquilityTheme"
    };

    onDataSaved(userData) {
        const theme = userData.themeName.value.split(" ")[0] + "Theme";

        this.setState({
           "lang": userData.languageCode.value,
            "theme": theme
        });
        console.log(userData);
    }

    render() {
        return (
            <IntlProvider
                locale={this.state.lang}
                messages={messages[this.state.lang]}>
                <div className="App">
                    <Layout class={this.state.theme}>
                        <Switch>
                            <Route path="/user-profile" exact render={() => <UserProfile dataSaved={(userData) => this.onDataSaved(userData)}/>}/>
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
