import React from 'react'
import '../styles/Signup.css'

export default function() {
  return(
    <div className="form panel panel-default" id="loginForm">
      <h3 className="centered">
        Sign up
      </h3>
      <br />
      <div className={"form-group " + (this.state.first_name_msg && this.state.first_name_msg.length > 0 && "has-error")}>
        <input 
          type="text"
          className="form-control"
          name="first_name"
          placeholder="First name"
          value={this.state.first_name}
          onChange={this.handleInputChange}
        />
        <p className="errorLabel">{this.state.first_name_msg && this.state.first_name_msg.map(msg => msg + "; ")}</p>
      </div>
      <div className={"form-group " + (this.state.last_name_msg && this.state.last_name_msg.length > 0 && "has-error")}>
        <input 
          type="text"
          className="form-control"
          name="last_name"
          placeholder="Last name"
          value={this.state.last_name}
          onChange={this.handleInputChange}
        />
        <p className="errorLabel">{this.state.last_name_msg && this.state.last_name_msg.map(msg => msg + "; ")}</p>
      </div>
      <div className={"form-group " + (this.state.email_msg && this.state.email_msg.length > 0 && "has-error")}>
        <input 
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <p className="errorLabel">{this.state.email_msg && this.state.email_msg.map(msg => msg + "; ")}</p>
      </div>
      <div className={"form-group " + (this.state.password_msg && this.state.password_msg.length > 0 && "has-error")}>
        <input 
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <p className="errorLabel">{this.state.password_msg && this.state.password_msg.map(msg => msg + "; ")}</p>
      </div>
      <div className={"form-group " + (this.state.password_confirmation_msg && this.state.password_confirmation_msg.length > 0 && "has-error")}>
        <input 
          type="password"
          className="form-control"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleInputChange}
        />
        <p className="errorLabel">{this.state.password_confirmation_msg && this.state.password_confirmation_msg.map(msg => msg + "; ")}</p>
      </div>
      <div className="centered">
        <button className="btn btn-default" onClick={this.handleClick}>Submit</button>
      </div>
    </div>
  )
}