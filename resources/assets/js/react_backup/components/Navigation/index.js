import React, { Component } from 'react'
import { Container, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router'
import isUndefined from 'lodash/isUndefined'
import AdminNav from './Admin'
import AuthNavbar from './Auth'
import PublicNavBar from './Public'
export default class Navigation extends Component {
    state = {
        isOpen: false
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { props, state, toggle } = this
        const { Auth: { loggedIn } } = props
        const { isOpen } = state
        return (
            <Navbar color="inverse" inverse toggleable>
                <Container>
                    <NavbarToggler right onClick={toggle.bind(this)} />
                    <NavbarBrand tag={Link} to="/">Brand</NavbarBrand>
                    { loggedIn ? 
                        <AuthNavbar isOpen={isOpen} {...props} /> 
                            : 
                        <PublicNavBar isOpen={isOpen} {...props} />
                    }
                </Container>
            </Navbar>
        );
    }
}
