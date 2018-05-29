import React from 'react'
import '../styles/Chatbox.css'

export default function() {
  return(
    <div className="panel panel-default" id="chatbox-container">
      <div className="panel-heading">
        {"MessageBox: " + (this.props.active_user ? this.props.active_user.first_name + " " + this.props.active_user.last_name : "")}
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

      <div className="pre-scrollable">
        <ul className="list-group">
          {this.state.messages.map(message =>
            <li key={message.id} className={"list-group-item message-list-box-item " + 
              (message.sender_id == this.props.current_user.id ? "list-group-item-success" : "list-group-item-info")}
            > 
              <table><tbody><tr>
                <td className="message-td">
                  {message.sender_id == this.props.current_user.id ? 
                    (
                      this.props.current_user.first_name + " " + this.props.current_user.last_name + ": "
                    ) : 
                    (
                      this.props.active_user.first_name + " " + this.props.active_user.last_name + ": "
                    )
                  }
                </td>
                <td>
                  {message.text}
                </td>
              </tr></tbody></table>
            </li>
          )}
        </ul>
        <div className={"form-group centered"}>
          <input 
            type="button"
            className="btn btn-default"
            name="loadMoreButton"
            value="More messages"
            onClick={this.handleMoreMessages}
          />
        </div>
      </div>
    </div>
  )
}