import React, { Component } from "react";
import Navbar from "./../containers/navbar";
import ProblemCard from "./../containers/problemCard";
import SessionCard from "./../containers/sessionCard";

class SessionPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let climbs = [
      { grade: "V3", name: "", color: "", attempts: "", send: "", notes: "" }
    ];
    let data = {
      date: "06/19/20",
      duration: 90,
      location: "Brooklyn Boulders"
    };
    // IDEAL FUNCTIONALITY
    // Option to view stats
    return (
      <div>
        <Navbar />
        <div className="session">
          <p> Session Date: {data.date} </p>
          <p> Location: {data.location} </p>
          <p> Duration: {data.duration} minutes</p>
          <p> Ascents: </p>
          <p> Top Grade: </p> <br />
          <h3> List of Climbs: </h3>
          <div className="climbs">
            <SessionCard />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionPage;
