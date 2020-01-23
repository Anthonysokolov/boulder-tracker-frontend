import React, { Component } from "react";
import Navbar from "./navbar";
import Button from "../views/Button.jsx";

import { createSessionThunk } from "../../thunks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

class AddSessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      comment: "",
      redirect: false
    };
  }

  handleChangeLocation = ele => {
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
    this.setState({redirect:true})
    let newSession = {
      location: this.state.location,
      comments: this.state.comment
    };
    console.log(newSession);
    this.props.createSession(newSession);
  };

  render() {
    if(this.state.redirect){
      return (<Redirect to='/home'/>)
    }
    return (
      <div>
        <Navbar />
        <h1 class="centered">New Session</h1>
        Location: <input type="text" onChange={this.handleChangeLocation} />
        <br />
        Comment: <input type="text" onChange={this.handleChangeComment} />
        <br />
        <Button onClick={this.handleSubmit}>Save</Button>
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
