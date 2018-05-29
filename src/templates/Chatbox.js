import React from 'react'
import '../styles/Chatbox.css'

export default function() {
  return(
    <div className="panel panel-default" id="chatbox-container">
      <div className="panel-heading">
        {"MessageBox: " + (this.props.active_user ? this.props.active_user : "")}
      </div>

      <div className={"form-group"}>
        <input 
          type="text"
          className="form-control"
          name="message"
          placeholder="Type your message"
          id="my-text-field"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <input
          type="button"
          className="btn btn-default"
          name="submitButton"
          id="my-submit-button"
          value="Send"
          onClick={this.handleClick}
        />
      </div>
    </div>
  )
}

// value={this.state.first_name}
//           onChange={this.handleInputChange}