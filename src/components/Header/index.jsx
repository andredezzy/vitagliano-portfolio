import React from 'react';

import './styles.css';

import { Nav, NavItem } from './Nav';

import { Container } from 'react-bootstrap';

const Header = () => (
    <header>
        <Container>
            <a id="logo" href="#/">
                <span>itagliano</span>
            </a>

            <Nav>
                <NavItem title='Portfolio' to='/portfolio' icon='archive' />
                <NavItem title='Serviços' to='/services' icon='inbox' />
                <NavItem title='Contato' to='/contact' icon='chat' />
            </Nav>
        </Container>
    </header>
);

export default Header;
