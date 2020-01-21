import React from "react";
import "../../styles/status.css";

function Status(props) {
  let kind = props.type || "info";
  return (
    <div className={"status status-"+kind+" status-long"}>{props.children}</div>
  );
}

export default Status;