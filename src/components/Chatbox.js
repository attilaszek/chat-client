import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import chatboxTemplate from '../templates/Chatbox.js'

import { } from '../actions/index.js'
import { connect } from 'react-redux';

class Chatbox extends Component {
  state = {
    message: "",
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
    alert(this.state.message)
  }

  render() {
    return chatboxTemplate.call(this)
  }
}

const mapStateToProps = state => ({
  active_user: state.users.active_user,
});

export default connect(mapStateToProps, {

})(Chatbox);