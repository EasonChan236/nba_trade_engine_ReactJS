import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import LoginForm from './LoginForm';

const routes =  (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={ LoginForm } />
        <Route path="/app" component={ App } />
    </div>
  </BrowserRouter>
);

export default routes;