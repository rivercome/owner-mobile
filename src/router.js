import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from '../src/components/Layout/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
