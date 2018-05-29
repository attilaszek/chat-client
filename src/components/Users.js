import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import usersTemplate from '../templates/Users.js'

import { populateUsersList, addOnlineUser, removeOnlineUser, setActiveUser } from '../actions/index.js'
import { connect } from 'react-redux';

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    const self = this
    myAxios.get('users/user_list.json')
    .then(response => {
      console.log(response)
      self.props.populateUsersList(response.data)
    })
  }

  handleReceivedUser = (response) => {
    if (response.delete) {
      this.props.removeOnlineUser(response.user)
    }
    else {
      if (response.user.email != this.props.user.email) {
        this.props.addOnlineUser(response.user)
      }
    }
  }

  handleClick = (user) => {
    this.props.setActiveUser(user)
  }

  render() {
    return usersTemplate.call(this)
  }
}

const mapStateToProps = state => ({
  users_list: state.users.users_list,
  active_user: state.users.active_user,
  user: state.user
});

export default connect(mapStateToProps, {
  populateUsersList,
  addOnlineUser,
  removeOnlineUser,
  setActiveUser
})(Users);