import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks";
import AuthFormView from "../views/authFormView";
import Status from "../views/Status.jsx";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  }

  render() {
    return (
      <div>
        <Status type={this.props.statusCode} text={this.props.errorMessage} ></Status>
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
};

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
    loginOrSignup: (email, password, formName) => dispatch(loginThunk(email, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);
