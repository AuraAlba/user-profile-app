import React, {Component} from "react";
import NavItem from './NavItem/NavItem';

class Header extends Component {
    state = {
        "isOpen": false
    };

    toggleMenu() {
        this.setState({
            "isOpen": !this.state.isOpen
        })
    }

    render() {
        const collapseClass = this.state.isOpen ? 'navbar-collapse' : "collapse navbar-collapse";

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={() => this.toggleMenu()}></span>
                </button>

                <div className={collapseClass} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Home"/>
                        <NavItem path="/user-profile" name="User Profile"/>
                        <NavItem path="/contact-us" name="Contact Us" disabled="true"/>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Header;