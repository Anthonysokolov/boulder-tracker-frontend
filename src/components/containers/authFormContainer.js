import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginThunk } from "../../thunks";
import AuthFormView from "../views/authFormView";
import Status from "../views/Status.jsx";

import "../../styles/common.css";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    console.log(event.target.name, ":", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(
      this.state.username,
      this.state.password,
      this.props.name,
      this.props.history
    );
    this.props.location.state = {};
  };

  render() {
    let message = this.props.location.state || {};
    return (
      <div>
        <h1 className="centered">Bouldering Tracker App</h1>
        <Status
          type={message.loginStatus || this.props.statusCode}
          text={message.loginMessage || this.props.errorMessage}
        ></Status>
        <AuthFormView
          name={this.props.name}
          displayName={this.props.displayName}
          error={this.props.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLoggedIn={this.props.isLoggedIn}
          userEmail={this.props.username}
        />
      </div>
    );
  }
}

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    statusCode: state.user.status,
    errorMessage: state.user.message,
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    statusCode: state.user.status,
    errorMessage: state.user.message,
    isLoggedIn: state.user.isLoggedIn,
    username: state.user.username
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (email, password, method, history) =>
      dispatch(loginThunk(email, password, method, history))
  };
};

export const Login = withRouter(
  connect(mapLogin, mapDispatch)(AuthFormContainer)
);
export const Signup = withRouter(
  connect(mapSignup, mapDispatch)(AuthFormContainer)
);
