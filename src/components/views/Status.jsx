import React from "react";
import "../../styles/status.css";

function Status(props) {
  let kind = props.type || "loading";
  return (
    <div className={"status status-"+kind+" status-long"}>{props.children}</div>
  );
}

export default Status;