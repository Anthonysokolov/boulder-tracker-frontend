import React, { Component, Fragment } from "react";
import Navbar from "./navbar";
import Session from "../views/sessionDetails.js";
import ClimbCard from "../views/climbCard.js";
import AddClimbCard from "../views/addClimbCard.js";
import Status from "../views/Status.jsx";

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
      index: this.props.problems.length,
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
    //before the data is fetched, use an empty list
    let problems = this.props.problems || [];
    console.log(this.props.statusClass + " " + this.props.statusMessage);
    return (
      <div>
        <Navbar />
        <Status type={this.props.statusClass} hideStatus="success" text={this.props.statusMessage}>
          <Session {...this.props.session} />
          <AddClimbCard
            nameHandler={this.handleChangeName}
            gradeHandler={this.handleChangeGrade}
            commentHandler={this.handleChangeComment}
            submitHandler={this.handleSubmit}
          />
          <h2 className="centered">Problems</h2>
          {
            (problems.length === 0) &&
            (<p>Looks like you have not recorded any problem attempts yet. Add one by filling out the fields above.</p>) 
          }
          {problems.map((climb) => (
            <ClimbCard {...climb} key={climb.id} />
          ))}
        </Status>
      </div>
    );
  }
}

function mapState(state) {
  return {
    statusClass: state.singleSession.status,
    statusMessage: state.singleSession.message,
    session: state.singleSession,
    problems: state.singleSession.problems
  };
}

function mapDispatch(dispatch) {
  return {
    getSession: id => dispatch(getSessionThunk(id)),
    addClimb: id => dispatch(addClimbThunk(id))
  };
}

export default connect(mapState, mapDispatch)(SingleSessionPage);
