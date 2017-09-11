import React, { Component, Children } from 'react'

class Scroller extends Component {
    componentDidMount() {
        window.addEventListener(
            'scroll',
            this.scrollObserver.bind(this)
        )
    }
    componentWillUnMount() {
        window.removeEventListener(
            'scroll',
            this.scrollObserver.bind(this)
        )
    }
    scrollObserver () {
        const base = this.refs.container
        const baseOffset = base.offsetHeight
        let windowOffset = window.pageYOffset
        windowOffset += window.innerHeight
        if(windowOffset >= baseOffset) {
            console.log('aaaahhh')
        }
    }
    render() {
        return(
            <div ref="container" className="container grid-lg scoller">
                {this.props.children}
            </div>
        )
    }
}


export default Scroller
