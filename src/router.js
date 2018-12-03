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
import gzfa from "./routes/oldBuilding/gzfa";
import zxys from "./routes/oldBuilding/zxys";
import glms from "./routes/oldBuilding/glms";
import zxpj from "./routes/oldBuilding/zxpj";
import Message from "./routes/yeweihui/Message";
import Record from "./routes/yeweihui/Record";
import Details from "./routes/yeweihui/Details";
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
          <Route path="/zgsq/:id" component={zgsq} />
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
          <Route path="/gzfa/:id" component={gzfa} />
          <Route path="/zxys/:id" component={zxys} />
          <Route path="/glms/:id" component={glms} />
          <Route path="/zxpj/:id" component={zxpj} />
          <Route path="/aha" component={Message} />
          <Route path="/ahb" component={Record} />
          <Route path="/ahc" component={Details} />
          <Route />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RouterConfig;
