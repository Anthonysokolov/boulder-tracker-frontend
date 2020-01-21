import React from "react";
import { Link } from "react-router-dom";

import "../../styles/card.css";
import "../../styles/common.css";

export default function AddClimbCard(props) {
  return (
    <div>
      <div className="card">
        Name: <input type="text" onChange={props.nameHandler} /> <br />
        Grade: <input type="text" onChange={props.gradeHandler} /> <br />
        Comments: <input type="text" onChange={props.commentHandler} /> <br />
        <input type="submit" onClick={props.submitHandler} />
      </div>
    </div>
  );
}
