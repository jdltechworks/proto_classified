import React, { Component } from 'react'

export default class User extends Component {
    componentDidMount() {
        let { actions: { Auth } } = this.props;
        Auth.requireAuth()
    }
    render() {
        return(
            <div className="user">
                This is the user page
            </div>
        )
    }
}