import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import TableDetailPage from './containers/TableDetail';


export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.COUNTER} component={CounterPage} />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.TABLE_DETAIL} component={TableDetailPage} />
      </Switch>
    </App>
  );
}
