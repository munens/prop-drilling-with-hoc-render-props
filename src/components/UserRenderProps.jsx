import React, { Component } from 'react'

export class UserRenderProps extends Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('token'));

    this.state = {
      user
    };
  }

  render() {
    const {
      state: {
        user
      }
    } = this;

    return this.props.children(user);
  }
}

export default UserRenderProps;
