import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';
class Footer extends Component {
   render() {
      return (
         <div>
            <footer className="site-footer">
              <div className="text-center">
              2018 - Pengyu Chen, Ruitian Lin - CSE 134B, UCSD
              </div>
            </footer>
         </div>
      );
   }
}
export default Footer;