import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import SessionCard from "./../views/sessionCard";
import Button from "../views/Button.jsx";

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
        <h1 className="centered">My Bouldering Sessions</h1>
        {(sessions.length > 0) ? 
          (<p className="card-subtitle centered">You have recorded {sessions.length} climbing adventures. You're making great progress.</p>) 
          : 
          (<p className="card-subtitle centered">Welcome! Every time you go bouldering, you can record it by clicking on the add button!</p>)
        }
        <div className="centered"><Button to="/session/add">Add</Button></div>
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
