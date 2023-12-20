import React, { useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, NavbarBrand, Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/green-logo.png';
import logo2 from '../../assets/images/logos/white-logo.png';

const HeaderBanner3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header1 po-relative bg-dark">
            <Container>
                <Navbar className="navbar-expand-lg h2-nav">
                    <NavbarBrand href="#"><img src={logo2} alt="wrapkit" /></NavbarBrand>
                    <NavbarToggler onClick={toggle}><span className="ti-menu text-white"></span></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar id="header1">
                        <Nav navbar className="ms-auto mt-2 mt-lg-0">
                            <NavItem className="active">
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem><NavLink href="#">About Me</NavLink></NavItem>
                            <NavItem><NavLink href="#">Work</NavLink></NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>
                                    Services <i className="fa fa-angle-down m-l-5"></i>
                                </DropdownToggle>
                                <DropdownMenu className="b-none animated fadeInUp">
                                    <DropdownItem>Action</DropdownItem>
                                    <DropdownItem>Another action</DropdownItem>
                                    <DropdownItem>Something else here</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Something else here</DropdownItem>
                                    <DropdownItem>Separated link</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>One more separated link</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem><NavLink href="#">Freebies</NavLink></NavItem>
                            <NavItem><a className="btn btn-outline-info" href="#">Hire Me</a></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default HeaderBanner3;
