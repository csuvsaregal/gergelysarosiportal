import { NavBar, Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

// translate tutorial: https://www.freecodecamp.org/news/how-to-add-localization-to-your-react-app/
export const NavBar = () => {
    const { t } = useTranslation();
    <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">{t('home')}</Nav.Link>
            <Nav.Link href="#galery">{t('galery')}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
}