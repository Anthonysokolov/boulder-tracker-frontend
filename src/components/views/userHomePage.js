import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import ProblemCard from "./../containers/problemCard";
import SessionCard from "./../containers/sessionCard";

import "./userHomePage.css";

class UserHomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let session1 = {
      location: "hunter college",
      date: "yesterday",
      time: "early",
      comment: "was ok"
    };
    let session2 = {
      location: "queens college",
      date: "today",
      time: "late",
      comment: "was ok"
    };

    let sessions = [session1, session2];
    let parsed = sessions.map(session => {
      return (
        <div>
          <br />
          <div className="boxed">
            <div className="column">
              <p> Date: {session.date} </p>
              <p> Time: {session.time} </p>
            </div>
            <div>
              <p> Location: {session.location} </p>
              <p> Comments: {session.comment} </p>
            </div>
          </div>
          <br />
        </div>
      );
    });

    return (
      <div>
        <Navbar />
        <div className="centered">{parsed}</div>
      </div>
    );
  }
}

export default UserHomePage;
