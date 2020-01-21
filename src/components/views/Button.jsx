import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/button.css";

/*
  Usage: <Button shape="" to="location">text</Button>
  Where shape is one of: long (default), circle
 */
function Button(props) {
  var extraClasses = "button-" + (props.shape || "long");
  return (
    <NavLink className={"button " + extraClasses} to={props.to}>{props.children}</NavLink>
  );
}

export default Button;