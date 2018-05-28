import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import loginTemplate from '../templates/Login.js'

import { setCurrentUser } from '../actions/index.js'
import { connect } from 'react-redux';

class Login extends Component {
  
  state = {
    email: "",
    password: "",
    email_error: "",
    password_error: ""
  }

  getCurrentUser = () => {
    const self = this

    myAxios.get('users/getuser.json')
    .then(response => {
      self.props.setCurrentUser(response.data)
    })
  }

  login = (auth_token) => {
    if (auth_token) {
      sessionStorage.setItem('jwtToken', auth_token);
      myAxios.defaults.headers.authorization = auth_token;
      this.getCurrentUser()
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick = () => {

    const self = this

    myAxios.post('users/login.json', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      var auth_token = response.data.auth_token;
      self.login(auth_token)

      console.log(response);
    })
    .catch(function (error) {
      if (error.response) {
        var errors = error.response.data
        self.setState({
          password: '',
          email_error: errors.email,
          password_error: errors.password,
        });
      }
      console.log(error);
    });
  }

  render() {
    return loginTemplate.call(this)
  }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps, {
  setCurrentUser,
})(Login);