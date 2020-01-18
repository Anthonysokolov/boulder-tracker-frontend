import React, { Component } from "react";
import Navbar from "./navbar";
import SessionPage from "./sessionPage";

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
