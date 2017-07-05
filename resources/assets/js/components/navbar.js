import React, { Component } from 'react'
import { Collapse, Button, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
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
                                    <Button outline color="success">Post your Ad!</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
        );
    }
}
