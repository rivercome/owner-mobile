import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/Login/index";
import Header from "./components/header";
import submission from "./components/submissionAdd";

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Header>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={Login} />
          <Route path="/a" component={submission} />
        </Switch>
      </Header>
    </Router>
  );
};

export default RouterConfig;
