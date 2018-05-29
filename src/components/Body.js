import React, { Component } from 'react'
import '../styles/Body.css'
import Signup from './Signup.js'
import Users from './Users.js'
import Chatbox from './Chatbox.js'
import { connect } from 'react-redux';

class Body extends Component {
  render() {
    const content = sessionStorage.getItem('jwtToken') && this.props.user ? (
      <div className="my-container">
        <Users />
        <Chatbox />
      </div>
    ) : (
      <div className="signupDiv">
        <Signup />
      </div>
    );

    return content
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Body);