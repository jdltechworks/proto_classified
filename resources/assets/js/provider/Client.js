import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import initRedux from '../redux/store'
import routes from '../routes'

const { store, actions, history } = initRedux(browserHistory, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export const methods = actions

export default class ClientProvider extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={history} routes={routes}></Router>
            </Provider>
        )
    }
}