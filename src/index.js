import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import LoginForm from './LoginForm';
import App from './App';
// import routes from './routes';

render(<App />,document.getElementById('app'));
/*
render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path='/app' component={App} />
        </Switch>
    </BrowserRouter>
    ), document.getElementById('app')
);*/