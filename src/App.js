import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Home from "./components/views/home";
import SingleSessionPage from "./components/containers/singleSessionPage";
import UserHomePage from "./components/containers/userHomePage";
import AddSessionPage from "./components/containers/addSessionPage";
import {Login, Signup} from './components/containers/authFormContainer'

function App() {
  const HomeComponent = () => <Home />;
  const UserHomeComponent = () => <UserHomePage />;

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/session/add" component={AddSessionPage} />
          <Route path="/session/:id" component={SingleSessionPage} />
          <Route exact path="/home" render={UserHomeComponent} />
          <Route exact path="/" render={HomeComponent} />
          <Route exact path='/login' render={Login}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
