import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

export default class Product extends Component {
    componentDidMount() {
        const { props } = this
        const { actions } = props
        if(!isUndefined(actions)) {
            actions.Product.getProducts()
        }
    }
    render() {
        const { props } = this
        const { Product } = props
        const { list: { title, products } } = Product
        return(
            <div className="product container">
                <h4>{title ? title : null }</h4>
                <ul>
                    {map(products, (product, key) => {
                        return (<li key={key}>
                                    <p>{ product.title }</p>
                                    <p>{product.description}</p>
                                </li>)
                    })}
                </ul>
            </div>
        )
    }
}