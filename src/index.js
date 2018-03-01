import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import App from './App';
import Roster from './Roster';
import Pick from './Pick';

// render(<App />,document.getElementById('app'));

render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path='/app' component={App} />
            <Route path='/roster' component={Roster} />
            <Route path='/pick' component={Pick} />
        </Switch>
    </BrowserRouter> 
    ), document.getElementById('app')
);