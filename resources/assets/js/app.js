import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'

import 'bootstrap/scss/bootstrap.scss'
import '../sass/app.scss'

render(<ClientProvider />, document.getElementById('app'))
