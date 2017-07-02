import {createConstants, createReducer} from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'

const { RequestHeaders } = window.Laravel

export const types = createConstants('auth')(
    'LOGIN',
    'LOGOUT',
    'REGISTER',
    'ERROR'
)

export const initialState = {
    isLoggingIn: false,
    isLoggedIn:false,
    loggedOut: true
}

export const actions = {
    login(email, password) {
        const body = new FormData()
        body.append('email', email)
        body.append('password', password)

        /**
         * return an actions type and return objects of that type
         * you can use the fetch api here in there return section
         * 
         * @param  {[type]} dispatch [description]
         * @return {[type]}          [description]
         */
        return (dispatch, getState) => {
            //send a fetch api here
            return fetch('/login', {
                method: 'POST',
                credentials: "same-origin",
                headers: RequestHeaders,
                body
            }).then((res) => {
                return res.json()
            }).then((session) => {
                dispatch({ type: types.LOGIN, session })
            }).catch(err => dispatch({ type: types.ERROR, payload: err }))
        }
    },
    logout() {
        return (dispatch, getState) => {
            //send a fetch api here
            const body = new FormData()
            body.append('_token', window.Laravel.csrfToken)
            
            return fetch('/logout', {
                method: 'POST',
                credentials: "same-origin",
                headers: RequestHeaders,
                body
            }).then((res) => {
                return res.json()
            }).then((session) => {
                dispatch({ type: types.LOGOUT, session })
            }).catch(err => dispatch({ type: types.ERROR, payload: err }))
        }
    },
    register(user) {
        return (dispatch, getState) => {

        }
    }
}

export const reducer = createReducer({
    [types.LOGIN]: (state, { session }) => {
        return {
            ...state,
            loggedOut: false,
            session
        }
    },
    [types.LOGOUT]: (state, { session }) => {
        return {
            ...state,
            loggedOut: true,
            session
        }
    },
    [types.REGISTER]: (state, { session }) => {
        return {
            ...state,
            session
        }
    }
})