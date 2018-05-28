import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import usersTemplate from '../templates/Users.js'

class Users extends Component {
  render() {
    return usersTemplate.call(this)
  }
}

export default Users