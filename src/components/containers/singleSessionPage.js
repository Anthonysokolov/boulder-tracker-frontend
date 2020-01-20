import React, { Component } from "react";
import Navbar from "./../containers/navbar";

import { getSessionThunk } from "../../thunks";
import { connect } from "react-redux";

class SingleSessionPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    //    this.props.getSession(this.props.match.params.id);
  }

  render() {
    console.log("session", this.props.session);
    /*
    let sessions = this.props.sessions;
    if (sessions === undefined) {
      sessions = [];
    }

    console.log("sess", sessions);
    */
    return (
      <div>
        <Navbar />
        <div className="centered">yes</div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    session: state.session
  };
}

function mapDispatch(dispatch) {
  return {
    getSession: () => dispatch(getSessionThunk())
  };
}

export default connect(mapState, mapDispatch)(SingleSessionPage);
