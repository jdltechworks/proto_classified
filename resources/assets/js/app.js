import React, { Component } from 'react'
import { render } from 'react-dom'
import _ from 'lodash'
import 'bootstrap/scss/bootstrap.scss'


//** Import defined components
import Navigation from './components/navbar';


export default class App extends Component {
	state = {
		test: true
	}
	render() {
		return (

			<div className="app-container" onClick={(e) => {
				console.log(this.state.test)
				this.setState({ test: !this.state.test })

			}}>
				<Navigation />

				Hello from reactsss {_.toString(this.state.test)}

			</div>
		)
	}
}
render(<App />, document.getElementById('app'))
