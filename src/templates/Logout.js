import React from 'react'

export default function() {
  return(
    <div className="nav navbar-right">
      <ul className="nav navbar-nav">
        <p className="navbar-text">{this.props.first_name + " " + this.props.last_name}</p>
      </ul>
      <div className="nav navbar-form navbar-right">
        <button className="btn btn-default" onClick={this.handleClick}>Log out</button>
      </div>
    </div>
  )
}