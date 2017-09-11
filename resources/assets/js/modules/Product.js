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
    error: {}
}

export const types = createConstants('product')(
    'FETCHING',
    'FETCHED',
    'ERROR',
    'FETCHING_SINGLE',
    'FETCHING_SINGLE'
)

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
    [types.FETCHED]: (state, { list }) => {
        return { ...state, list }
    },
    [types.ERROR]: (state, { error }) => {
        return { ...state, ...error }
    },
    [types.FETCHED_SINGLE]: (state, { json }) => {
        return { ...state, ...json }
    }
})
