import { createConstants, createReducer } from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import { push } from 'react-router-redux'

export const initialState = {
    list: {
        title: null,
        products: []
    },
    isFetching: false,
    error: {},
    collection: []
}

export const types = createConstants('product')(
    'FETCHING',
    'FETCHED',
    'ERROR',
    'FETCHING_SINGLE',
    'FETCHING_SINGLE',
    'SCROLLED',
    'INITITAL_COLLECTION'
)

let increment = 0

export const actions = {
    getProducts(skip) {
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
        return (dispatch, getState) => {
            dispatch({ type: types.FETCHING })
            return fetch('/product', {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            }).then(res => res.json())
            .then(list => {
                dispatch({ type: types.FETCHED, list })
            })
            .catch(error => dispatch({ type: types.ERROR, error }))
        }
    },
    setProducts(currCollection) {
        return (dispatch, getState) => {
            let { Product: { collection } } = getState()
            return dispatch({
                type: types.INITITAL_COLLECTION,
                collection: [].concat(currCollection)
            })
        }
    },
    more(url, take) {
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
        const _url = new URL(`${url}/product`)
        const params = { take: 25, skip: take += take }

        map(params, (value, key) => {
            _url.searchParams.append(key, value)
        })

        return (dispatch, getState) => {
            return fetch(_url, {
                method: 'GET',
                headers,
                credentials: 'same-origin'
            }).then(res => {
                if(res.ok) return res.json()
                throw new Error('Error')
            }).then(json => {
                let { Product: { collection } } = getState()
                dispatch({ type: types.SCROLLED, collection: [].concat(collection, json) })
            })
        }

    },
    getProduct(id) {
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
        return (dispatch, getState) => {
            dispatch({ type: types.FETCHING_SINGLE })
            return fetch(`/product/${id}`, {
                method: 'GET',
                headers,
                credentials: 'same-origin',
            }).then(res => res.json())
            .then(list => {
                dispatch({ type: types.FETCHED_SINGLE, json })
            })
            .catch(error => dispatch({ type: types.ERROR, error }))
        }
    }
}

export const reducer = createReducer({
    [types.INITITAL_COLLECTION]: (state, { collection }) => {
        console.log(collection)
        return {...state, collection}
    },
    [types.FETCHED]: (state, { list }) => {
        return { ...state, list }
    },
    [types.ERROR]: (state, { error }) => {
        return { ...state, ...error }
    },
    [types.SCROLLED]: (state, { collection }) => {
        console.log(collection)
        return { ...state, collection }
    },
    [types.FETCHED_SINGLE]: (state, { json }) => {
        return { ...state, ...json }
    }
})
