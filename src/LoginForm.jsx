import Field from "./Field";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/bootstrap.css';
import './assets/css/style-responsive.css';
import './assets/css/login.css';
import './assets/font-awesome/css/font-awesome.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-block">
        <h1>Login</h1>
        <Field />
        {}
      </div>
    );
  }
}

export default LoginForm;
