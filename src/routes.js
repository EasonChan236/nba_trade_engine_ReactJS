import React from 'react';
import { Route } from 'react-router';
import App from './App';
import LoginForm from './LoginForm';

export default (
    <Route path='/' component={LoginForm}>
      <Route path='/app' component={App} />
    </Route>
);