import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sign from "./components/Sign";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Sign} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
