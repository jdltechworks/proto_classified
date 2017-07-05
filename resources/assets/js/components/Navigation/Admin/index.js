import React, { Component } from 'react'
import { Collapse, Button, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router'

export default class AdminNavbar extends Component {
    render() {
        return(
            <Collapse isOpen={this.props.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} className="nav-link" to="/user">User</NavLink>
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
        )
    }
}