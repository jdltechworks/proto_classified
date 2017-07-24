import React, { Component } from 'react'
import { Form, Button, Label, Input,  FormGroup} from 'reactstrap'
import { Link } from 'react-router'

export default class Search extends Component {

    render() {
        return (
            <Form inline className="justify-content-md-center">
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Keyword..." />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input type="select">
                        <option>Location</option>
                        <option>Runolfsdottirmouth</option>
                        <option>East Loufort</option>
                        <option>North Tony</option>
                        <option>New Lincoln</option>
                    </Input>
                </FormGroup>
                {' '}
                <Button color="primary">Search</Button>
            </Form>

        );
    }
}
