import React from "react";

import "./styles.css";

import MaterialIcon from "material-icons-react";

const NavItem = props => {
    const { title, to, icon } = props;

    return (
        <a href={`#${to}`}>
            <li>
                <MaterialIcon id="icon" icon={icon} />
                <span>{title}</span>
            </li>
        </a>
    );
};

export default NavItem;
