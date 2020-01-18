import React, { Component } from "react";

class SessionCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let climb1 = {
      grade: "V3",
      name: "",
      color: "",
      attempts: 3,
      sends: 2,
      notes: "Lots of crimpy holds",
      imageUrl: ""
    };
    let climb2 = {
      grade: "V4",
      name: "",
      color: "",
      attempts: 3,
      sends: 2,
      notes: "Lots of crimpy holds",
      imageUrl: ""
    };
    let climbs = [climb1, climb2];
    let parsed = climbs.map(climb => {
      return (
        <div>
          <p> Problem Grade: {climb.grade} </p>
          <p> Attempts: {climb.attempts} </p>
          <p> Sends: {climb.sends} </p>
          <p> Notes: {climb.notes} </p> <br />
        </div>
      );
    });
    return parsed;
  }
}

export default SessionCard;
