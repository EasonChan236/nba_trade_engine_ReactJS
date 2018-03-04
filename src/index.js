import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { BrowserRouter, Route } from 'react-router-dom';

import routes from "./routes";

const allRoutes = routes;

ReactDOM.render(
  allRoutes,
  document.getElementById("app")
)