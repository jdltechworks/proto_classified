import React, { Component } from 'react'
import { Collapse, Button, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'
import isUndefined from 'lodash/isUndefined'
export default class Navigation extends Component {
    state = {
        isOpen: false
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    Logout(e) {
        e.preventDefault()
        let { actions: { Auth } } = this.props;
        Auth.logout()
    }
    render() {
        const { Auth } = this.props
        return (
            <Navbar color="faded" light toggleable className="second-nav-layer">
                <Container>
                    <NavbarToggler right onClick={this.toggle.bind(this)} />
                    <NavbarBrand href="/">Brand</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/user">User</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/login">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/register">Signup</Link>
                            </NavItem>
                            <NavItem>
                                <a onClick={this.Logout.bind(this)} href="#" className="nav-link">Logout</a>
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
