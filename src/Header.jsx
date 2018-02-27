import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';
class Header extends Component {
   render() {
      return (
         <div>
            <header className="header black-bg">
              <div className="sidebar-toggle-box">
                  <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
              </div>
            <Link to="/app">
            <a id = "my_team" className="logo"><b>76ers</b></a>
            </Link>
            
            <div className="top-menu">
              <ul className="nav pull-right top-menu">
                    <li>
                      <Link to="/">
                        <a className="logout">Logout</a>
                      </Link>
                    </li>
              </ul>
            </div>
        	</header>
         </div>
      );
   }
}
export default Header;