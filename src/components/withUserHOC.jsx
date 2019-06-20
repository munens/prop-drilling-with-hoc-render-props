import React, { Component } from 'react';

function withUserHOC(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      const user = JSON.parse(localStorage.getItem('token'));

      this.state = {
        user
      };
    }

    render = () => {
      const {
        state: {
          user
        }
      } = this;

      return (
        <WrappedComponent user={user}  />
      );
    }
  }
}

export default withUserHOC;
