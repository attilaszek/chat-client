import React from 'react'

export default function() {
  return(
    <div className="form navbar-form navbar-right">
      <div className={"form-group " + (this.state.email_error && "has-error")}>
        <input 
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
      </div>
      <div className={"form-group " + (this.state.password_error && "has-error")}>
        <input 
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
      </div>
      <button className="btn btn-default" onClick={this.handleClick}>Log in</button>
    </div>
  )
}