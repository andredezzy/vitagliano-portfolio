import React from 'react';

import './styles.css';

import MaterialIcon from 'material-icons-react';

const NavItem = (props) => {
    const { title, to, icon } = props;

    return (
        <li>
            <a href={`#${to}`}>
                <MaterialIcon id="icon" icon={icon} color='white' />
                <span>{title}</span>
            </a>
        </li>
    )
};

export default NavItem;
