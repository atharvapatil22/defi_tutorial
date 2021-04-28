import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
      <nav id="nav-bar" className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
        <h1 id="title">
          Kuber Liquidity Mine
        </h1>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">Account: &nbsp;&nbsp;  {this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
