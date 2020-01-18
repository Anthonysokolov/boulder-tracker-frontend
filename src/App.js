import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Home from "./components/views/home";
import SessionPage from "./components/views/sessionPage";
import UserHomePage from "./components/containers/userHomePage";

function App() {
  const HomeComponent = () => <Home />;
  const SessionComponent = () => <SessionPage />;
  const UserHomeComponent = () => <UserHomePage />;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/session" render={SessionComponent} />
          <Route exact path="/userHome" render={UserHomeComponent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
