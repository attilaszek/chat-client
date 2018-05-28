import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import signupTemplate from '../templates/Signup.js'

import { setCurrentUser } from '../actions/index.js'
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    first_name_msg: [],
    last_name_msg: [],
    email_msg: [],
    password_msg: [],
    password_confirmation_msg: []
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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

  handleClick = () => {

    const self = this

    myAxios.post('users/signup.json', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    })
    .then(function (response) {
      var auth_token = response.data.auth_token;
      self.login(auth_token);
      console.log(response);
    })
    .catch(function (error) {
      if (error.response) {
        var errors = error.response.data
        self.setState({
          password: '',
          password_confirmation: '',
          first_name_msg: errors.first_name,
          last_name_msg: errors.last_name,
          email_msg: errors.email,
          password_msg: errors.password,
          password_confirmation_msg: errors.password_confirmation
        });
      }
      console.log(error);
    });
  }

  render() {
    return signupTemplate.call(this)
  }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps, {
  setCurrentUser,
})(Signup);