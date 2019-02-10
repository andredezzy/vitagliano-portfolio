import React from 'react';

import './styles.css';

import NavItem from './NavItem';

const Nav = (props) => (
    <ul>
        {props.children}
    </ul>
);

export { Nav, NavItem };
