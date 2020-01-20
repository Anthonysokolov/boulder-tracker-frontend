import React from "react";
import { Link } from "react-router-dom";

import "./userHomePage.css";

export default function SessionCard(props) {
  return (
    <div>
      <Link to={"/session/" + props.id}>
        <div className="boxed">
          <div className="column">
            <p> Date: {props.date} </p>
          </div>
          <div>
            <p> Location: {props.location} </p>
            <p> Comments: {props.comments} </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
