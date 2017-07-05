import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from '../containers/App'
import Home from '../containers/Home'
import User from '../containers/User'
import Register from '../containers/Register'

import Login from '../containers/Login'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="user" component={User}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="register" component={Register}></Route>
    </Route>
)

export default routes