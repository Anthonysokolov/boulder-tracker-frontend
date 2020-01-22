import React, { Fragment } from "react";
import "../../styles/status.css";

/**
 * A presentational component that displays a colored box with a message.
 * Props:
 * text        the message to display if this status box is shown
 * type        one of loading, success, error
 * hideStatus  a string of space-separated types. If the supplied type matches
 *             one of these, then this component will not render.
 * Children:   any content to display below the status box if the status is
 *             success, and to hide otherwise. 
 *             Usage: <Status>child elements</Status> 
 *             If there are several, wrap them in a React.Fragment tag.
 */
function Status(props) {
  let kind = props.type || "loading";
  let symbols = {
    success: "\u2713 ",
    error: "\u00d7 ",
    loading: "\u24d8 "
  };
  let statusBox = (
    <div className={"status status-"+kind+" status-long"}>
      {symbols[kind]} {props.children}
    </div>
  );
  let showStatusBox = !props.hasOwnProperty("hideStatus") || props.hideStatus.indexOf(props.type) === -1;
  return (
    <Fragment>
      {showStatusBox && statusBox}
      {props.type === "success" && props.children}
    </Fragment>
  );
}

export default Status;