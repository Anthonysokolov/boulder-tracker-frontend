import React from "react";
import { withRouter , Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/views/home";
import SingleSessionPage from "./components/containers/singleSessionPage";
import UserHomePage from "./components/containers/userHomePage";
import AddSessionPage from "./components/containers/addSessionPage";
import {Login, Signup} from './components/containers/authFormContainer';
import Navbar from "./components/containers/navbar.js";

function App(props) {
  const HomeComponent = () => <Home />;
  const UserHomeComponent = () => <UserHomePage />;

  return (
    <div className="app">
      <Switch>
        {props.isLoggedIn && (
          <Switch>
            <Navbar />
            {/* Routes placed here will only be available if user is logged in */}
            <Route exact path="/session/add" component={AddSessionPage} />
            <Route path="/session/:id" component={SingleSessionPage} />
            <Route exact path="/home" render={UserHomeComponent} />
          </Switch>
        )}
        <Route exact path="/" render={HomeComponent} />
        <Route exact path='/login'>
          {props.isLoggedIn? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </div>
  );
}

function mapUserToProps(appState) {
  return {
    isLoggedIn: appState.user.isLoggedIn
  };
}

export default withRouter(connect(mapUserToProps)(App));
