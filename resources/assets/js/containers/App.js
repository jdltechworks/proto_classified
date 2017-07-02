import React, { cloneElement, Component, Children } from 'react'
import Navigation from '../components/navbar'
import { methods as actions } from '../provider/Client'

export default class App extends Component {
    render() {
        return(
            <div className="app-container">
                <Navigation {...actions}/>
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { actions })
                })}
            </div>
        )
    }
}
