import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Home from "./components/home";
import SessionPage from "./components/sessionPage";

function App() {
  const HomeComponent = () => <Home />;
  const SessionComponent = () => <SessionPage />;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/session" render={SessionComponent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
