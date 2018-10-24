import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
// import Layout from "../src/components/Layout/index";
import Login from "./routes/Login/index";
import Test from "./routes/test/index";
import ListInform from "./components/List/list";
import submission from "./components/submissionAdd";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/a" component={submission} />
        <Route path="/list" component={ListInform} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
