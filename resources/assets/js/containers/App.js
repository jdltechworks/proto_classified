import React, { cloneElement, Component, Children } from 'react'
import Navigation from '../components/navbar'
import { methods as actions } from '../provider/Client'
import { connect } from 'react-redux'
import omit from 'lodash/omit'

class App extends Component {
    componentDidMount() {
        actions.Auth.check()
    }
    render() {
        const { props } = this
        const noform = _.omit(props, 'form')
        return(
            <div className="app-container">
                <Navigation actions={actions} {...this.props}/>
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noform, actions })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
