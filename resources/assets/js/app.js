import React, { Component } from 'react'
import { render } from 'react-dom'
import _ from 'lodash'

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
				Hello from react {_.toString(this.state.test)}
			</div>
		)
	}
}

render(<App />, document.getElementById('app'))