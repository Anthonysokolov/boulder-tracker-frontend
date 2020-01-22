import React from "react";
import "../../styles/common.css";

function SessionPage(props) {
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = new Date(props.date);
  return (
    <div>
      <h1 className="centered">Workout Details</h1>
      <p> On {daysOfWeek[d.getDay()]}, {d.toLocaleDateString()}, I went bouldering at {props.location}. I attempted {props.numClimbs} {props.numClimbs > 1 ? " problems" : " problem"}.</p>
      <p>{props.comments}</p>
    </div>
  );
}

export default SessionPage;
