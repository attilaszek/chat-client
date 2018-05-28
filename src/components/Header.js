import React, { Component } from 'react';
import Login from './Login.js';
import Logout from './Logout.js';

import { connect } from 'react-redux';

class Header extends Component {

  render() {
    const userSection = sessionStorage.getItem('jwtToken') && this.props.user ? (
      <Logout />
    ) : (
      <Login />
    );

    return(
      <div>
        <nav className="navbar navbar-fixed-top navbar-default justify-content-between">
          <div className="container">
            <div className="navbar-header">
              <a href="/" className="navbar-brand">Chat Application</a>
            </div>
            {userSection}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);