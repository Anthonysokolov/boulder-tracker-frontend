import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import SessionCard from "./../views/sessionCard";

import { fetchSessionsThunk } from "../../thunks";
import { connect } from "react-redux";

import "./../views/userHomePage.css";

class UserHomePage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchAllSessions();
    console.log("Constructor");
  }

  render() {
    console.log("yes", this.props.sessions);
    let sessions = this.props.sessions;
    if (sessions === undefined) {
      sessions = [];
    }

    console.log("sess", sessions);
    return (
      <div>
        <Navbar />
        <div className="centered">
          {sessions.map(session => {
            return <SessionCard {...session} />;
          })}
        </div>
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
