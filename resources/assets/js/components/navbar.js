import React, { Component } from 'react'
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
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
            <div>
                <Navbar color="faded" light toggleable className="first-layer">
                    <Container>
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
                        <NavbarToggler right onClick={this.toggle.bind(this)} />
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
