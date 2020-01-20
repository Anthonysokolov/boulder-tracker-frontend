import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";
import Home from "./components/views/home";
import SingleSessionPage from "./components/containers/singleSessionPage";
import UserHomePage from "./components/containers/userHomePage";
import AddSessionPage from "./components/containers/addSessionPage";

function App() {
  const HomeComponent = () => <Home />;
  const UserHomeComponent = () => <UserHomePage />;
  const AddSessionComponent = () => <AddSessionPage />;

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/session/:id" component={SingleSessionPage} />
          <Route exact path="/home" render={UserHomeComponent} />
          <Route exact path="/addSession" render={AddSessionComponent} />
          <Route exact path="/" render={HomeComponent} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
