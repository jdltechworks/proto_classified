import {createConstants, createReducer} from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import { push } from 'react-router-redux'

const { RequestHeaders } = window.Laravel

export const types = createConstants('auth')(
    'LOGIN',
    'CHECK',
    'LOGOUT',
    'REGISTER',
    'ERROR',
    'IS_NOT_AUTHENITCATED',
    'IS_AUTHENITCATED'
)

export const initialState = {
    isLoggingIn: false,
    isLoggedIn:false,
    loggedOut: true
}

export const actions = {
    check () {
        return (dispatch, getState) => {

            dispatch({ type: types.CHECK, })
            if(_.includes(['login, register'], location.pathname) && !isEmpty(curr_user)) {
                dispatch({
                    type: types.IS_AUTHENITCATED, 
                    session: JSON.parse(atob(curr_user))
                })
                dispatch(push('/'))
            }


        }
    },
    requireAuth () {
        return (dispatch, getState) => {

            dispatch({ type: types.CHECK })
            if(isEmpty(curr_user)) {
                dispatch(push('/login'))
            } else {
                dispatch({
                    type: types.IS_AUTHENITCATED, 
                    session: JSON.parse(atob(curr_user))
                })
            }


        }
    },
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
                dispatch(push('/'))
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
    },
    [types.IS_AUTHENITCATED]: (state, { session }) => {
        return {
            state,
            session
        }
    }
})