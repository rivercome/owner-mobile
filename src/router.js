import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Layout from "../src/components/Layout/index";
import Login from "./routes/Login/index";
import Test from "./routes/test/index";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={Login} />
          <Route path="/test" component={Test} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
