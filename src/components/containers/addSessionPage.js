import React, { Component } from "react";
import Navbar from "./navbar";
import Session from "../views/sessionPage.js";

import { createSessionThunk } from "../../thunks";
import { connect } from "react-redux";

class AddSessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      comment: ""
    };
  }

  handleChangeLocation = ele => {
    console.log(ele.target.value);
    this.setState({
      location: ele.target.value
    });
  };

  handleChangeComment = ele => {
    this.setState({
      comment: ele.target.value
    });
  };

  handleSubmit = ele => {
    this.props.createSession({
      location: this.state.location,
      comment: this.state.comment
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        Location:{" "}
        <input type="text" onChange={() => this.handleChangeLocation} />
        <br />
        Comment: <input type="text" onChange={() => this.handleChangeComment} />
        <br />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    session: state.singleSession
  };
}

function mapDispatch(dispatch) {
  return {
    createSession: id => dispatch(createSessionThunk(id))
  };
}

export default connect(mapState, mapDispatch)(AddSessionPage);
