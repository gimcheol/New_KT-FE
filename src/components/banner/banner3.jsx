import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
} from "reactstrap";

import logo from "../../assets/images/logos/green-logo.png";
import logo2 from "../../assets/images/logos/New_KT_header.png";

const HeaderBanner3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header1 po-relative bg-dark">
            <Container>
                <Navbar className="navbar-expand-lg h2-nav">
                    {/* Add Link to the Logo */}
                    <NavbarBrand tag={Link} to="/">
                        <img
                            src={logo2}
                            alt="wrapkit"
                            style={{ maxWidth: "150px", height: "auto" }}
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}>
                        <span className="ti-menu text-white"></span>
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar id="header1">
                        <Nav navbar className="ms-auto mt-2 mt-lg-0">
                            {/* Existing NavItems */}
                            <NavItem className="active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem className="active">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </NavItem>
                            <NavItem>
                                <a className="btn btn-outline-info" href="/login">
                                    Login
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default HeaderBanner3;
