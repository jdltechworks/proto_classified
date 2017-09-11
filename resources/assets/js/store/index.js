import modules from '../modules'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { createApiMiddleware } from 'redux-module-builder/api'
import { bindActionCreatorsToStore } from 'redux-module-builder'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'


const { reducers, actions, initialState } = modules()

let middlewares = [
    thunkMiddleware
]

const creator = (composer) => {
  if(composer) return composer
  return compose
}

const setHistoryType = (historyType, request) => {
  if(!request) return historyType

  return historyType(request.url)
}
export default (historyType, composer, request) => {
    middlewares.push(
        routerMiddleware(historyType)
    )

    const create = creator(composer)
    const history = setHistoryType(historyType, request)
    let composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)
    const store = composeStore(reducers, initialState)
    return {
        history: syncHistoryWithStore(history, store),
        store,
        actions: bindActionCreatorsToStore(actions, store)
    }
}
