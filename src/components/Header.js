import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color="primary" sticky="top" expand="md">
            <Container>
                <NavbarBrand href="/" className="ms-5">
                    <img src={NucampLogo} alt="Nucamp logo" className="float-start" />
                    <h1 className="mt-1">NuCamp</h1>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse navbar isOpen={menuOpen}>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/directory">
                                <i className="fa fa-list fa-lg" /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <i className="fa fa-info fa-lg" /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-address-card fa-lg" /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
