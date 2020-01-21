import React from "react";
import { Link } from "react-router-dom";

import "../../styles/card.css";
import "../../styles/common.css";

export default function ClimbCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> name </h5>
          <h6 className="card-subtitle"> yes </h6>
          <p className="card-text"> no </p>
        </div>
      </div>
    </div>
  );
}
