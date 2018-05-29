import React, { Component } from 'react';
import myAxios from '../MyAxios.js'
import chatboxTemplate from '../templates/Chatbox.js'

import { } from '../actions/index.js'
import { connect } from 'react-redux';

class Chatbox extends Component {
  state = {
    message: "",
    messages: [],
    page_nr: 1
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.active_user !== this.props.active_user) {
      this.setState({
        messages: []
      })
      this.getMessages(nextProps.active_user, 1)
    }
  }

  getMessages = (active_user, page_nr) => {
    if (!(this.props.current_user && active_user)) return

    const self = this
    myAxios.get('messages/show.json', { params: {
      sender_id: this.props.current_user.id,
      receiver_id: active_user.id,
      page_nr: page_nr,
      nr: 3
    }
    })
    .then(response => {
      if (!response.data) return

      console.log(response)
      this.setState({
        messages: this.state.messages.concat(response.data),
        page_nr: page_nr + 1
      })
    })
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

    if (!this.props.active_user) return

    const self = this

    myAxios.post('messages/create.json', {
      text: this.state.message,
      sender_id: this.props.current_user.id,
      receiver_id: this.props.active_user.id
    })
    .then(function (response) {
      self.setState({
        message: ""
      })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleMoreMessages = () => {
    this.getMessages(this.props.active_user, this.state.page_nr)
  }

  render() {
    return chatboxTemplate.call(this)
  }
}

const mapStateToProps = state => ({
  active_user: state.users.active_user,
  current_user: state.user
});

export default connect(mapStateToProps, {
})(Chatbox);