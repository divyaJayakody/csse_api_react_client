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
var BackImage = require('./images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
var Logo= require('./images/bus.png');




function App() {
  return (
     < Router >
     < div className = "Main1"
     style = {
       {
         backgroundImage: 'url(' + BackImage + ')',
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',

       }
     } >
    < div className = "Main2">
    < div className = "level1"  >
      < div className = "l1left"
      style = {
        {
          backgroundImage: 'url(' + Logo + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

        }
      } > </div >
      <div className = "l1center" >
         < div className = "l1Top" > < h2 > Public Transportation System </h2></div >
         < div className = "l1Bottom" >
           <nav className="navbar navbar-expand-lg ">
                  <div className="collpase navbar-collapse"> 
                      <ul className="navbar-nav mr-auto">
                           <li><Link to="/" className="nav-link1">  Home</Link>
                                      </li>
                                    <li><Link to="/about" className="nav-link1">  About</Link>
                                      </li>
                                    <li><Link to="/contact" className="nav-link1">  Contact Us</Link>
                                      </li>
                                    <li><Link to="/reload" className="nav-link1">  Inquery</Link>
                                      </li>

                              < div class = "dropdown" >
                              <button class="dropbtn">Finance</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/routes/register" className="nav-link">Add Rotes</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/transit/register" className="nav-link">Add Transit</Link>
                                     </li>
                                </div>
                                </ div>

                             < div class = "dropdown" >
                              <button class="dropbtn">TimeTables</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/ttables/register" className="nav-link">Add TimeTables</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/view" className="nav-link">View TimeTables</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/reports" className="nav-link">View Reports</Link>
                                     </li>
                                </div>
                          </div> 

                            
                             < div class = "dropdown" >
                              <button class="dropbtn">Buses</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/buses/register" className="nav-link">Add TimeTables</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/track" className="nav-link">View TimeTables</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/view" className="nav-link">View Reports</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/drivers/register" className="nav-link">View Reports</Link>
                                     </li>   
                                </div>
                          </div>
                          </ul>
                   </div>
              </nav>
        </div >
      </div> 
      < div className ="l1right" >
          <div className="l1rightTop">topp
           <nav className="navbar navbar-expand-lg ">
                  <div className="collpase navbar-collapse"> 
                      <ul id="menu">
                        <li><a href="#"><Link to="/users/login" className="nav-link">  Sign-in</Link></a></li>
                        <li><a href="#"><Link to="/users/register" className="nav-link">  Sign-up</Link></a></li>
  
                    </ul>
                </div>
              </nav>                       
          </div>

          <div className="l1rightBottom">bottom
          </div>  

      </div>

    </div >
    

    < div className = "level2">
     
          < div className = "main-nav" >
                    <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">  
                                    <li className="navbar-item2"><Link to="/" className="nav-link">  Home</Link>
                                      </li>
                                    < li className = "navbar-item2" > < Link to = "/about"
                                    className = "nav-link" > About </Link>
                                      </li>
                                    < li className = "navbar-item2" > < Link to = "/contact"
                                    className = "nav-link" > Contact Us </Link>
                                      </li>
                                    <li className = "navbar-item2"><Link to="/inquery" 
                                    className="nav-link">  Inquery</Link>
                                      </li>

                              < div class = "dropdown" >
                              <button class="dropbtn">Finance</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/routes/register" className="nav-link">Add Rotes</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/transit/register" className="nav-link">Add Transit</Link>
                                     </li>
                                </div>
                                </ div>

                             < div class = "dropdown" >
                              <button class="dropbtn">TimeTables</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/ttables/register" className="nav-link">Add TimeTables</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/view" className="nav-link">View TimeTables</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/reports" className="nav-link">View Reports</Link>
                                     </li>
                                </div>
                          </div> 

                            
                             < div class = "dropdown" >
                              <button class="dropbtn">Buses</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/buses/register" className="nav-link">Add TimeTables</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/track" className="nav-link">View TimeTables</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/view" className="nav-link">View Reports</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/drivers/register" className="nav-link">View Reports</Link>
                                     </li>   
                                </div>
                          </div>
                      </ul>
                  </div>
          </div>
          < div className = "main-body">
        < div className = "container" >
              <Route path="/users/register" exact component={AddPassenger}/>    
        </div>
    
      </div> 
     
    </div>
      </div>
    < div className = "level3" > < h2 > This is footer</h2></div >
    </div>
    </Router>
  );
}

export default App;
