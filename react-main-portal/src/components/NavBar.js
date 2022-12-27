import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useTranslation } from 'react-i18next';
import i18n from '../i18n/locales/config';

function NavBar() {
    const { t } = useTranslation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
    return (   
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="#home">{t('title')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">{t('home')}</Nav.Link>
            <Nav.Link href="#galery">{t('galery')}</Nav.Link>
            <NavDropdown title={t('projects')} id="basic-nav-dropdown">
            <NavDropdown.Item href="#softwaretesting">{t('qatraining')}</NavDropdown.Item>
            <NavDropdown.Item href="#softwares">{t('softwares')}</NavDropdown.Item>
            <NavDropdown.Item href="#music">{t('music')}</NavDropdown.Item>
            <NavDropdown.Item href="#sport">{t('sport')}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#contact">{t('contact')}</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link onClick={() => changeLanguage('hu')}>{t("hungarian")}</Nav.Link>
            <Nav.Link onClick={() => changeLanguage('en')}>{t("english")}</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

export default NavBar;