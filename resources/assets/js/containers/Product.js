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
            Product: { list, isAppending },
            actions: { Product },
            url
        } = props
        const groupedCollection = chunk(list, 4)
        return(
            <Scroller more={Product.more} url={url} take={list.length}>
                <Search {...props} />
                <div className="columns">
                    <div className="column col-3">
                        <ul className="menu">
                          <li className="divider" data-content="MODIFY SEARCH">
                          </li>
                          <li className="menu-item">
                            <a href="#">
                              <i className="icon icon-link"></i> Slack
                            </a>
                          </li>
                          <li className="divider"></li>
                          <li className="menu-item">
                            <div className="menu-badge">
                              <label className="label label-primary">2</label>
                            </div>
                            <a href="#">
                              <i className="icon icon-link"></i> Settings
                            </a>
                          </li>
                          <li className="divider"></li>
                          <li className="menu-item">
                              <input className="slider tooltip" onChange={(e) => {

                              }} type="range" min="0" max="100" defaultValue="50" />
                          </li>
                        </ul>
                    </div>
                    <div className="column col-9">
                        {groupedCollection.map((collection, key) => {
                          return(
                            <div className="columns mt-10 pt-10 mb-10 pb-10" key={key}>
                              {collection.map((product, index) => (
                                <div className="column col-3 col-sm-12"  key={index}>
                                  <div className="card">
                                    <div className="card-image">
                                      {product.images.map((image, i) => (
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
                        {isAppending ?
                            <div className="text-center">
                                <div className="loading"></div>
                            </div> : null}
                    </div>
                </div>
            </Scroller>
        )
    }
}

export default Product
