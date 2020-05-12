import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Services from "./ServicesPage";
import Example from "./Navigation";
import Nav from "./Nav";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}
