import './bootstrap'
import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'


render(<ClientProvider />, document.getElementById('app'))