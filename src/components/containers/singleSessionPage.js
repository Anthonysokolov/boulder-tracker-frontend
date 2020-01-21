import React, { Component } from "react";
import Navbar from "./navbar";
import Session from "../views/sessionPage.js";
import ClimbCard from "../views/climbCard.js";
import AddClimbCard from "../views/addClimbCard.js";

import { getSessionThunk, addClimbThunk } from "../../thunks";
import { connect } from "react-redux";

class SingleSessionPage extends Component {
  constructor(props) {
    super(props);
    this.props.getSession(this.props.match.params.id);
    this.state = {
      name: "",
      grade: "",
      comment: ""
    };
  }

  handleChangeName = ele => {
    this.setState({
      name: ele.target.value
    });
  };

  handleChangeGrade = ele => {
    this.setState({
      grade: ele.target.value
    });
  };

  handleChangeComment = ele => {
    this.setState({
      comment: ele.target.value
    });
  };

  handleSubmit = ele => {
    let newClimb = {
      index: this.props.session.problems.length,
      name: this.state.name,
      grade: this.state.grade,
      attempts: 5,
      sends: 2,
      comments: this.state.comment,
      sessionId: this.props.session.id
    };
    this.props.addClimb(newClimb);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Session {...this.props.session} />
        <ClimbCard />
        <AddClimbCard
          nameHandler={this.handleChangeName}
          gradeHandler={this.handleChangeGrade}
          commentHandler={this.handleChangeComment}
          submitHandler={this.handleSubmit}
        />
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
    getSession: id => dispatch(getSessionThunk(id)),
    addClimb: id => dispatch(addClimbThunk(id))
  };
}

export default connect(mapState, mapDispatch)(SingleSessionPage);
