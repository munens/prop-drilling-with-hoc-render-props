import React, { Component } from 'react'
import Navbar from './Navbar';

export class Header extends Component {
  render() {
    return (
      <Navbar {...this.props}/>
    );
  }
}

export default Header;
