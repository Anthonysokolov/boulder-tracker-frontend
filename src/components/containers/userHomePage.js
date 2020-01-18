import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import SessionCard from "./../views/sessionCard";

import { fetchSessionsThunk } from "../../thunks";
import { connect } from "react-redux";

class UserHomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchAllSessions();
  }

  render() {
    let sessions = this.props.sessions;
    return (
      <div>
        <Navbar />
        <SessionCard className="centered" />
      </div>
    );
  }
}

function mapState(state) {
  return {
    sessions: state.sessions
  };
}

function mapDispatch(dispatch) {
  return {
    fetchAllSessions: () => dispatch(fetchSessionsThunk())
  };
}

export default connect(mapState, mapDispatch)(UserHomePage);
