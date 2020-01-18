import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import SessionPage from "./sessionPage";
<<<<<<< HEAD:src/components/home.js
=======
import { testingThunk } from "./../../thunks/index";
>>>>>>> userHomePage:src/components/views/home.js

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    this.props.test();
  };

  render() {
    return (
      <div className="homepage">
        <Navbar />
        <h1> Boulder Tracker </h1>
        <button> New Session </button>
        <button> My Sessions </button>
        <button> My Friends </button>
        <button onClick={this.handleClick}> Testing Button </button>
        <p>yes: {this.props.testMessage}</p>
      </div>
    );
  }
}

export default Home;
