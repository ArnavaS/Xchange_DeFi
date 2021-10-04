import React, { Component } from 'react'
import mainlogo from '../mainlogo.png'
import './App.css'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-0 shadow z-depth-5">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mainlogo} width="40" height="40" className="d-inline-block align-top" alt="" />
          <h5 id ="ls">change Crypto</h5>
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
