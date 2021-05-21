import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "../services/history";

import Home from "../pages/Home/index";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}
