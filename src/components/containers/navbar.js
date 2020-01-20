import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><NavLink to="/home"  >Home</NavLink></li>
          <li><NavLink to="/invite">Invite</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
