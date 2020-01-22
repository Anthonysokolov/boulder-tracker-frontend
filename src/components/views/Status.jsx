import React from "react";
import "../../styles/status.css";

/**
 * A presentational component that displays a colored box with a message.
 * Props:
 * type        one of loading, success, error
 * hideStatus  a string of space-separated types. If the supplied type matches
 *             one of these, then this component will not render.
 * Children:   any inner content will be displayed within the colored box.
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
  if(!props.hasOwnProperty("hideStatus") || props.hideStatus.indexOf(props.type) == -1) {
    return statusBox;
  } else {
    return null;
  }
}

export default Status;