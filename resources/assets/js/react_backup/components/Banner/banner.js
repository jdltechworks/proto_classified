import React, { Component } from 'react'
import { Collapse, Button, Container, Jumbotron} from 'reactstrap'
import { Link } from 'react-router'

import Search from './search'

export default class Banner extends Component {

    render() {
        return (
            <Jumbotron>
                <Container className="text-center">
                    <h1 className="display-3">Brand!</h1>
                    <p className="lead">Quae se pariatur, summis incididunt philosophari.</p>
                    <hr className="my-2" />
                    <Search />
                </Container>
            </Jumbotron>
        );
    }
}
