import React, { Component } from 'react'
import '../styles/Body.css'
import Signup from './Signup.js'
import Users from './Users.js'
import { connect } from 'react-redux';

class Body extends Component {
  render() {
    const content = sessionStorage.getItem('jwtToken') && this.props.user ? (
      <div style={{paddingTop: 60}}>
        <Users />
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