import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'

class App extends Component {
   render() {
      return (
         <div>
         <section id="container" >
            <Header />
            <Sidebar />
            <Footer />
         </section>
         </div>
      );
   }
}
export default App;

{/*
<Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
*/}