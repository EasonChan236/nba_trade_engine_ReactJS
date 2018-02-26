import React from "react";
import { Link }  from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/bootstrap.css';
import './assets/css/style-responsive.css';
import './assets/css/login.css';
import './assets/font-awesome/css/font-awesome.css';

class Field extends React.Component {
  render() {
    return (
        <form>
          <input
            className="awesomplete"
            data-list="#mylist"
            placeholder="Team"
            id="username"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
          />
          <Link to="/app">
            <input
              type="button"
              defaultValue="Log In"
              id="login_btn"
            />
          </Link>
        </form>
    );
  }
}

export default Field;
