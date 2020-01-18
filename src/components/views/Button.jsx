import React from "react";
import "../../styles/button.css";

/*
  Usage: <Button shape="" onClick={function}>text</Button>
  Where shape is one of: long, circle
  All props are optional
 */
function Button(props) {
  var extraClasses = "";
  if(props.shape != undefined) {
    extraClasses += " button-long";
  }
  return (
    <a className={"button" + extraClasses} onClick={props.onClick}>{props.children}</a>
  );
}

export default Button;