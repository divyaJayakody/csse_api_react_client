import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import  {
  Component
} from 'react'

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';

import SearchField from 'react-search-field';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import AddPassenger from "./components/sign-up";
import AddDriver from "./components/add_driver";
import Login from "./components/login";
import Home from "./components/home";


var BackImage = require('./images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
var Logo= require('./images/bus.png');




function App() {
  return (
     < Router >
              <div>{Login}</div>

              <Route path="/users/register" exact component={AddPassenger}/>
              <Route path="/drivers/register" exact component={AddDriver}/>             
              <Route path="/" exact component={Login}/>  
              <Route path="/home" exact component={Home}/>  
    </Router>
  );
}

export default App;
