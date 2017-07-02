import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { LOGIN } from '../models/Login'
import { renderField } from '../helpers'
import React, { Component, PropTypes } from 'react'


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
                  <h3>Log in to your account</h3>
                </div>
                <div className="card-text">
                <br />

                {_.map(LOGIN, renderField.bind(this))}
                <button className="btn btn-info">Login</button>
                </div>
                <br />
                </div>
                <div className="card-footer">
                  <span>New to AWPI? <a href="#">Sign-up</a></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

const DecoratedForm = reduxForm({
    form:'login',
    validate,
    initialValues: {
        _csrfToken: window.Laravel.csrfToken
    }
})(Login)

export default DecoratedForm