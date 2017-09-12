import React, { Component } from 'react'

export default class ImageLoader extends Component {
    preloader(image) {
        let { props } = this
        let { src } = props
        let loader = image ? image.previousSibling : null
        if( image !== null ) {
            if( src ) {
                image.style.display = 'none'
                image.setAttribute('src', src)
                loader.style.display = 'block'

                image.onload = (e) => {
                    let { parentNode } = image
                    if(loader) {
                        setTimeout(() => {
                            image.style.display = 'block'
                            loader.style.display = 'none'
                        }, 200)
                    }
                }

                image.onerror = (e) => {
                    image.setAttribute('src', 'https://dummyimage.com/428x312/f8f8f8/ccc.png&text=Image+not+found')
                }
            }
        }
    }
    render() {
        return(
            <div className="image-loader">
                <div className="loader-container">
                    <div className="loading"></div>
                </div>
                <img className="img-responsive" ref={this.preloader.bind(this)} />
            </div>
        )
    }
}
