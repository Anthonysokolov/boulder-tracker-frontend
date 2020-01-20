import React from "react";

function SessionPage(props) {
  return (
    <div>
      <div className="session">
        <h1>{props.date}</h1>
        <p>{props.location}</p>
        <div>
          <h6>Comments:</h6>
          <p>{props.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default SessionPage;
