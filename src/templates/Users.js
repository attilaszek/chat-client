import React from 'react'
import '../styles/Users.css'
import { ActionCable } from 'react-actioncable-provider';

export default function() {
  return(
    <div>
      {this.props.user.email && <ActionCable
        channel={{ channel: 'UserListChannel', user_email: this.props.user.email }}
        onReceived={this.handleReceivedUser}
      />}
      <div className="panel panel-default users-list list-group" onLoad={console.log(this.props.users_list)}>
        <div className="panel-heading" id="my-panel-heading">Online users</div>
        {this.props.users_list.map(user => 
          <ul 
            className={"list-group-item " + (user.email === this.props.active_user && "list-group-item-info")}
            id={(user.email === this.props.active_user) ? "my-active-ul" : ""}
            key={user.id}
            onClick={() => this.handleClick(user.email)}
            >
            {user.first_name + " " + user.last_name}
          </ul>
        )}
      </div>
    </div>
  )
}