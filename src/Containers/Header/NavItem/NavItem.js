import React from 'react';

const NavItem = props => {
    const isDisabled = props.disabled ? "disabled" : null;

    return (
        <li className="nav-item">
            <a href={props.path} className={"nav-link " + props.disabled}>{props.name}</a>
        </li>
    );
};

export default NavItem;