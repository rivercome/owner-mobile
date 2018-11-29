import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/Login/index";
import submission from "./routes/submission/index";
import Vote from "./routes/Todo/Vote";
import Home from "./routes/home";
import qualityEvaluation from "./routes/Todo/qualityEvaluation";
import ListInform from "./components/List/list";
import Layout from "./components/Layout";
import abc from "./components/oldBuilding";
import abcd from "./routes/oldBuilding/zgsq";
import abcde from "./routes/dbsy";
import Call from "./components/usualphone";
import loginFirst from "./routes/LoginFirst";
import Second from "./routes/Second";
import addSubmission from "./routes/submission/add";
import bxDetail from "./routes/submission/detail";
const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/list" component={ListInform} />
          <Route path="/submissionList" component={submission} />
          <Route path="/b" component={Vote} />
          <Route path="/c" component={qualityEvaluation} />
          <Route path="/d" component={abc} />
          <Route path="/e" component={abcd} />
          <Route path="/f" component={abcde} />
          <Route path="/call" component={Call} />
          <Route path="/loginFirst" component={loginFirst} />
          <Route path="/second" component={Second} />
          <Route path="/addSubmission" component={addSubmission} />
          <Route path="/bxDetail/:id" component={bxDetail} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
