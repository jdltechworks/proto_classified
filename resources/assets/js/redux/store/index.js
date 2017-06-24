import modules from './modules'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { createApiMiddleware } from 'redux-module-builder/api'
import { bindActionCreatorsToStore } from 'redux-module-builder'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'


const { reducers, actions, initialState } = modules()

const isDev = process.env.NODE_ENV === 'development'

let middlewares = [
    createApiMiddleware({
        baseUrl: process.env.API,
        requestTransforms: [
        (getState, options) => req => {
            //no transformation yet
            return req
        }]
    }),
    thunkMiddleware
]

export default (historyType) =>
    
    middlewares.push(
        routerMiddleware(historyType)
    )

    let composeStore = compose(
        applyMiddleware(...middlewares),
        ...tools
    )(createStore)   
    
    return {
        history: syncHistoryWithStore(historyType)
        store: composeStore(reducers, initialState),
        actions: bindActionCreatorsToStore(actions, store)
    }
}