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
  }

  render() {
    let sessions = this.props.sessions;
    if (sessions === undefined) {
      sessions = [];
    }

    return (
      <div>
        <Navbar />
        {sessions.map((session, index) => {
          return <SessionCard {...session} key={session.id} index={index + 1} />;
        })}
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
