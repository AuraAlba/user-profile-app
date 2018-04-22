import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.scss';

const NavItem = props => {
    const isDisabled = props.disabled ? "disabled" : null;

    return (
        <li className={classes.NavItem}>
            <NavLink
                className={"nav-link " + classes.CenterN}
                to={props.path}
            >
                {props.name}
            </NavLink>
        </li>
    );
};

export default NavItem;