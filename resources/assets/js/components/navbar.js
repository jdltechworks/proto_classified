import React, { Component } from 'react';
import { Collapse, Button, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Navheader extends Component {

    state = {
      isOpen: false
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-primary first-layer">
                    <div className="container">
                        <ul className="list-inline mr-auto mb-none">
                            <li className="list-inline-item"><a href="#">Login</a></li>
                            <li className="list-inline-item"><a href="#" className="ml-sm-3">Register</a></li>
                        </ul>

                        <ul className="float-right list-inline mt-2 mt-md-0 mb-none social-media-icons">
                            <li className="list-inline-item">
                                <a href="#">
                                    <span className="fa fa-facebook-square"></span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <span className="fa fa-twitter-square"></span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <span className="fa fa-google-plus-square"></span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <span className="fa fa-linkedin-square"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <Navbar color="faded" light toggleable className="second-nav-layer">
                    <Container>
                        <NavbarToggler right onClick={this.toggle} />
                            <NavbarBrand href="/">Brand</NavbarBrand>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="#">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Theme Features</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Shop</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Forum</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Contact Us</NavLink>
                                    </NavItem>

                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <button className="btn btn-success my-2 my-sm-0" type="submit">Post your Ad!</button>
                                    </NavItem>

                                </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}
