import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import initRedux from '../store'
import routes from '../routes'

const { store, actions, history } = initRedux(browserHistory, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export const methods = actions

export default class ClientProvider extends Component {
    withActions(Component, existingProps) {
      const { props } = this
      const allProps = {...props, ...existingProps}
      return <Component {...allProps} />
    }
    render() {
        const { withActions } = this
        return(
            <Provider store={store}>
                <Router history={history} createElement={withActions.bind(this)} routes={routes}></Router>
            </Provider>
        )
    }
}
