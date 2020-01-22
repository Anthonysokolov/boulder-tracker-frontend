import React from "react";
import "../../styles/status.css";

/* A presentational component that takes one prop: type. This should be a
 * string, one of "loading", "error", or "success." This will affect the
 * color of the status box that is rendered. The box will be centered and
 * the same width as cards. */
function Status(props) {
  let kind = props.type || "loading";
  let symbols = {
  	success: "\u2713 ",
  	error: "\u00d7 ",
  	loading: ""
  };
  return (
    <div className={"status status-"+kind+" status-long"}>{symbols[kind]} {props.children}</div>
  );
}

export default Status;