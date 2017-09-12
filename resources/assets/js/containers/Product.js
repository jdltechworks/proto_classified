import React, { Component } from 'react'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import { Link } from 'react-router'
import chunk from 'lodash/chunk'
import Search from '../components/Search'
import ImagePreloader from '../components/Loaders/Image'
import Scroller from '../components/Scroller'

class Product extends Component {
    componentDidMount() {
        const { props } = this
        const { actions, collection } = props
        actions.Product.setProducts(collection)
    }
    render() {
        const { props } = this
        const {
            Product: { collection },
            actions: { Product },
            url } = props

        const groupedCollection = chunk(collection, 4)
        return(
            <Scroller more={Product.more} url={url} take={collection.length}>
                <Search {...props} />
                {map(groupedCollection, (collection, key) => {
                  return(
                    <div className="columns mt-10 pt-10 mb-10 pb-10" key={key}>
                      {map(collection, (product, index) => (
                        <div className="column col-3 col-sm-12"  key={index}>
                          <div className="card">
                            <div className="card-image">
                              {map(product.images, (image, i) => (
                                (i == 0) ? <ImagePreloader src={image.filename} key={i} /> : null
                              ))}
                            </div>
                            <div className="card-header text-right">
                                <h6 className="card-title">
                                    {product.title}
                                </h6>
                                <div className="card-subtitle"><span>Php {product.price}</span></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
            </Scroller>
        )
    }
}

export default Product
