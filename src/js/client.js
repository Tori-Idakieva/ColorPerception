import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

import Layout from './../components/pages/layout.jsx';

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);