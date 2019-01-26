import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Main from './screens/main';
import Architects from './screens/architects';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/architects" component={Architects} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);


serviceWorker.unregister();
