import {createConstants, createReducer} from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'

export const types = createConstants('auth')(
    'LOGIN',
    'REGISTER',
    'ERROR_LOGIN_FAILED'
)

export const initialState = {
    isLoggingIn: false,
    isLoggedIn:false,
    loggedOut: true,
    session: {}
}

export const actions = {
    login(email, password) {
        /**
         * return an actions type and return objects of that type
         * you can use the fetch api here in there return section
         * 
         * @param  {[type]} dispatch [description]
         * @return {[type]}          [description]
         */
        return (dispatch, getState) => {
            //send a fetch api here
            return 
        }
    },
    logout() {
        return (dispatch, getState) => {

        }
    },
    register(user) {
        return (dispatch, getState) => {

        }
    }
}

export const reducer = createReducer({
    [types.LOGIN]: (state, { payload }) => {
        return {
            ...state,
            payload
        }
    },
    [types.LOGOUT]: (state, {payload}) => {
        return {
            ...state,
            payload
        }
    },
    [types.REGISTER]: (state, { payload }) => {
        return {
            ...state,
            payload
        }
    }
})