import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';
class Sidebar extends Component {
   render() {
      return (
         <div>
			<aside>
			  <div id="sidebar"  className="nav-collapse ">
			      { /*sidebar menu start*/}
			      <ul className="sidebar-menu" id="nav-accordion">
			      
			          <li><p className="centered"><img src={ require('./assets/img/76GM.jpg') } id="pic_manager" className="img-circle" width="60" alt="76ers general manager" /></p></li>
			          <li><h5 className="centered" id="my_manager">Ed Stefanski</h5></li>
			            
			          <li className="mt">
			              <a href="index.html">
			                  <i className="fa fa-dashboard"></i>
			                  <span>Dashboard</span>
			              </a>
			          </li>

			           <li className="mt">
			              <a href="initiate_trade.html" >
			                  <i className="fa fa-exchange"></i>
			                  <span>Initiate Trade</span>
			              </a>
			          </li>
			          <li className="mt">
			              <a href="trade_history.html" >
			                  <i className="fa fa-book"></i>
			                  <span>Trade History</span>
			              </a>
			          </li>
			      <li className="mt">
			              <a href="roster.html" >
			                  <i className="fa fa-list-ul"></i>
			                  <span>Roster</span>
			              </a>
			          </li>
			          <li className="mt">
			              <a href="pick.html" >
			                  <i className="fa fa-male"></i>
			                  <span>Picks</span>
			              </a>
			          </li>

			      </ul>
			      {/* sidebar menu end*/}
			  </div>
			</aside>
         </div>
      );
   }
}
export default Sidebar;