import React, { Component } from 'react'
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <Navbar color="faded" light toggleable className="first-layer">
                <Container>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Register</NavLink>
                        </NavItem>
                    </Nav>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">
                                <span className="fa fa-facebook-square"></span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <span className="fa fa-twitter-square"></span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <span className="fa fa-google-plus-square"></span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <span className="fa fa-linkedin-square"></span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
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
