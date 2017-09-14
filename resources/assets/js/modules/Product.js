import { createConstants, createReducer } from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import { push } from 'react-router-redux'

export const initialState = {
    list: [],
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
    setProducts(currCollection) {
        return (dispatch, getState) => {
            let { Product: { list } } = getState()
            console.log(list)
            return dispatch({
                type: types.INITITAL_COLLECTION,
                list: list.concat(currCollection)
            })
        }
    },
    more(url, take) {
        const headers = new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
        const _url = new URL(`${url}/product`)

        const params = { skip: take += take }

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
            }).then(({ collection }) => {
                const { Product: { list } } = getState()
                dispatch({ type: types.SCROLLED, list: list.concat(collection) })
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
    [types.INITITAL_COLLECTION]: (state, { list }) => {
        return {...state, list}
    },
    [types.FETCHED]: (state, { list }) => {
        return { ...state, list }
    },
    [types.ERROR]: (state, { error }) => {
        return { ...state, ...error }
    },
    [types.SCROLLED]: (state, { list }) => {
        console.log(state.list)
        return { ...state, list }
    },
    [types.FETCHED_SINGLE]: (state, { json }) => {
        return { ...state, ...json }
    }
})
