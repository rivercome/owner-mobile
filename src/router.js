import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/Login/index";
import submission from "./components/submissionAdd";
import Vote from "./routes/Todo/Vote";
import Home from "./routes/home";
import qualityEvaluation from "./routes/Todo/qualityEvaluation";
import ListInform from "./components/List/list";
import Layout from "./components/Layout";
import abc from "./components/oldBuilding";
const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/list" component={ListInform} />
          <Route path="/a" component={submission} />
          <Route path="/b" component={Vote} />
          <Route path="/c" component={qualityEvaluation} />
          <Route path="/d" component={abc} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
