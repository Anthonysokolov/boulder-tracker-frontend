import React, { Component } from "react";
import Navbar from "./../containers/navbar";

import "../../styles/common.css";

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
        <h1 className="title"> Boulder Tracker </h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eleifend nisl ac tincidunt. Proin congue et nisi ut placerat. Suspendisse ornare nulla risus, sed pharetra nulla rutrum sit amet.</p>
      </div>
    );
  }
}

export default Home;
