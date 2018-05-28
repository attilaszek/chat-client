import React, { Component } from 'react';
import logoutTemplate from '../templates/Logout.js'
import myAxios from '../MyAxios.js'

import { setCurrentUser } from '../actions/index.js'
import { connect } from 'react-redux';

class Logout extends Component {

  getCurrentUser = () => {
    const self = this

    myAxios.get('users/getuser.json')
    .then(response => {
      self.props.setCurrentUser(response.data)
    })
  }

  handleClick = () => {
    sessionStorage.setItem('jwtToken', '');
    this.props.setCurrentUser({})
  }

  componentWillMount() {
    this.getCurrentUser()
  }

  render() {
    return logoutTemplate.call(this)
  }
}

const mapStateToProps = state => {
  return { 
    first_name: state.user.first_name,
    last_name: state.user.last_name 
  };
};

export default connect(mapStateToProps,{
  setCurrentUser,
})(Logout);