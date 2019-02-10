import React from 'react';

import './styles.css';

import { Nav, NavItem } from './Nav';

import { Container } from 'react-bootstrap';

const Header = () => (
    <header>
        <Container>
            <a id="logo" href="/vitagliano-portfolio/">
                <span>itagliano</span>
            </a>

            <Nav>
                <NavItem title='Portfolio' to='/vitagliano-portfolio/portfolio' icon='archive' />
                <NavItem title='Serviços' to='/vitagliano-portfolio/services' icon='inbox' />
                <NavItem title='Contato' to='/vitagliano-portfolio/contact' icon='chat' />
            </Nav>
        </Container>
    </header>
);

export default Header;
