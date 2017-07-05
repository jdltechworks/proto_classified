import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { LOGIN } from '../models/Login'
import { renderField } from '../helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


const validate = (values) => {
  const errors = {};
  _.each(LOGIN, (type, field) => {
    if(!values[field]) {
      errors[field] = `${field} is blank`
    }
  });

  return errors;
}


class Login extends Component {
  componentDidMount() {
    this.props.actions.Auth.check()
  }
  submitLogin(values) {
    const { actions } = this.props
    let { email, password } = values
    actions.Auth.login(email, password)
  }
  render() {
    let { handleSubmit } = this.props
    return (
      <section className="login clearfix" style={{ paddingTop: '10%' }}>
        <div className="row">
          <div className="m-auto">
            <form onSubmit={handleSubmit((props) => {this.submitLogin(props)})}>
              <div className="card">
                <div className="card-block">
                <div className="card-title">
                  Log in to your account
                </div>
                <div className="card-text">
                <br />

                {_.map(LOGIN, renderField.bind(this))}
                <small>New to AWPI? <Link to="/register">Sign-up</Link></small>
                <button className="btn btn-block btn-info">Login</button>
                </div>
                <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}


export default reduxForm({
    form:'login',
    validate
})(Login)