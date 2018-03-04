import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import LoginForm from './LoginForm';
import TradeHistory from './TradeHistory';
import Initiate from './Initiate';
import Todo from './Todo';

const routes =  (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={ LoginForm } />
        <Route path="/app" component={ App } />
    </div>
  </BrowserRouter>
);

export default routes;