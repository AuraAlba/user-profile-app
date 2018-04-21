import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = props => {
    const isDisabled = props.disabled ? "disabled" : null;

    return (
        <li className="nav-item">
            <NavLink
                className={"nav-link " + isDisabled}
                to={props.path}
            >
                {props.name}
            </NavLink>
        </li>
    );
};

export default NavItem;