import React, { Component } from 'react'

export default class Product extends Component {
    componentDidMount() {
        let { actions: { Auth } } = this.props;
        Auth.requireAuth()
    }
    render() {
        return(
            <div className="products">
                This is the products page
            </div>
        )
    }
}