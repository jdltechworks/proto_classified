import React, { Component } from 'react'
import { Collapse, Button,  Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'
export default class PublicNavbar extends Component {
    render() {
        return(
            <Collapse isOpen={this.props.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} className="nav-link" to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/register">Signup</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline color="success">Post your Ad!</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        )
    }
}