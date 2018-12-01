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
import zgsq from "./routes/oldBuilding/zgsq";
import dbsy from "./routes/dbsy";
import Call from "./components/usualphone";
import loginFirst from "./routes/LoginFirst";
import Second from "./routes/Second";
import addSubmission from "./routes/submission/add";
import bxDetail from "./routes/submission/detail";
import tousu from "./routes/tousu/index";
import addTs from "./routes/tousu/add";
import tsDetail from "./routes/tousu/detail";
import jyList from "./routes/yzjy";
import addJy from "./routes/yzjy/add";
import jyDetail from "./routes/yzjy/detail";
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
          <Route path="/vote/:id" component={Vote} />
          <Route path="/qualityEvaluation/:id" component={qualityEvaluation} />
          <Route path="/d" component={abc} />
          <Route path="/oldBudildingZgsq" component={zgsq} />
          <Route path="/dbsy" component={dbsy} />
          <Route path="/call" component={Call} />
          <Route path="/loginFirst" component={loginFirst} />
          <Route path="/second" component={Second} />
          <Route path="/addSubmission" component={addSubmission} />
          <Route path="/bxDetail/:id" component={bxDetail} />
          <Route path="/tousuList" component={tousu} />
          <Route path="/addTs" component={addTs} />
          <Route path="/tsDetail/:id" component={tsDetail} />
          <Route path="/jianYiList" component={jyList} />
          <Route path="/addJy" component={addJy} />
          <Route path="/jyDetail/:id" component={jyDetail} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
