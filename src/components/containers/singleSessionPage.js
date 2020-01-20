import React, { Component } from "react";
import Navbar from "./navbar";
import Session from "../views/sessionPage.js";

import { getSessionThunk } from "../../thunks";
import { connect } from "react-redux";

class SingleSessionPage extends Component {
  constructor(props) {
    super(props);
    this.props.getSession(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Session {...this.props.session} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    session: state.singleSession
  };
}

function mapDispatch(dispatch) {
  return {
    getSession: (id) => dispatch(getSessionThunk(id))
  };
}

export default connect(mapState, mapDispatch)(SingleSessionPage);
