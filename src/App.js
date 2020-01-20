import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Home from "./components/views/home";
import SingleSessionPage from "./components/containers/singleSessionPage";
import UserHomePage from "./components/containers/userHomePage";

function App() {
  const HomeComponent = () => <Home />;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/session/:id" component={SingleSessionPage} />
          <Route exact path="/home" component={UserHomePage} />
          <Route exact path="/" render={HomeComponent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
