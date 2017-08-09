import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'

export default class Product extends Component {
    componentDidMount() {
        const { props } = this
        const { actions } = props
        if(!isUndefined(actions)) {
            const { params } = props
            if(params) {
                const { slug } = params
                if(slug) {
                    actions.Product.getProduct(slug)
                }
                actions.Product.getProducts()
            } 
        }
    }
    render() {
        const { props } = this
        const { Product } = props
        const { list: { title, products } } = Product
        const { params } = props
        if(params) {
            return(
                <div className="product container">
                    <h4>{title ? title : null }</h4>
                    <ul>
                        {map(products, (product, key) => {
                            const { images } = product
                            return (
                                <li key={key}>
                                        {map(images, (image, key) => {
                                            const { filename } = image
                                            return <img src={filename} />
                                        })}
                                        <p><Link to={`/product/${product.slug}`}>{ product.title }</Link></p>
                                        <p>{product.description}</p>
                                        <p>{ JSON.stringify(product.categories) }</p>
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}