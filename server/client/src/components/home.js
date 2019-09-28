import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import '../App.css';



// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import AddPassenger from "./sign-up";
import AddBusOwner from "./add_bus_owner";
import AddDriver from "./add_driver";
import AddBus from "./add_bus";
import AddRoute from "./add_routes";
import AddTTable from "./add_ttable";
import AddFare from "./add_fare"

import BusList from "./view_bus"
import OwnerList from "./view_bus_owners"
import DriverList from "./view_driver"
import FareList from "./view_fares"
import RouteList from "./view_routes"

import UpdateBus from "./update_bus"
import UpdateOwners from "./update_bus_owner"
import UpdateDrivers from "./update_driver"
import UpdateFares from "./update_fare"
import UpdateRoute from "./update_route"

import Contact from "./contact"
import Login from "./login";


var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
var Logo= require('../images/bus.png');




function Home() {
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
           <nav className="navbar1">
                
                                    < a > < Link to = "/menu"
                                    className = "nav-link" > Home </Link>
                                      </a>                  
                                    < a > < Link to = "/about"
                                    className = "nav-link" > About </Link>
                                      </a>
                                 
             
                                    < a > < Link to = "/contact"
                                    className = "nav-link" > Contact Us </Link>
                                      </a>
                                      
                 
                                    < a > < Link to = "/reload"
                                    className = "nav-link" > Inquery </Link>
                                      </a>  

                        < div class = "dropdown1" >
                              <button class="dropbtn1">Finance<i class="fa fa-caret-down"></i></button>
                              <div class="dropdown-content1">
                                  <a><Link to = "/fares/register" > Add Fares </Link> </a>
                                   <a><Link to = "/revenue/report" > View Reports </Link> </a>
                                  <a><Link to = "/fares/view" > View Fares </Link> </a>
                                
                                </div>
                        </ div>                             
                            
                      < div class = "dropdown1" >
                              <button class="dropbtn1">Routes<i class="fa fa-caret-down"></i></button>
                              <div class="dropdown-content1">
                                  <a><Link to = "/routes/register" > Add Routes </Link> </a>
                                  <a><Link to = "/routes/view" > View Routes </Link> </a>
                                </div>
                        </ div>
                
                             < div class = "dropdown1" >
                              <button class="dropbtn1">TimeTables</button>
                                <div class="dropdown-content1">
                                  <a>
                                  <Link to="/ttables/register" >Add TimeTables</Link>
                                    </a>
                                  <a >
                                  <Link to="/ttables/view" >View TimeTables</Link>
                                     </a>
                                  <a >
                                  <Link to="/ttables/reports" >View Reports</Link>
                                     </a>
                                </div>
                          </div> 
  
                             < div class = "dropdown1" >
                                <button class="dropbtn1">Buses</button>
                                  <div class="dropdown-content1">
                                    <a>
                                    <Link to="/buses/register" >Add Buses</Link>
                                      </a>
                                    <a >
                                    <Link to="/buses/track" >Track Buses</Link>
                                      </a>
                                    <a >
                                    <Link to="/buses/view" >View Buses</Link>
                                      </a>
                                    <a >
                                    <Link to="/busOwners/register" >Add BusOwners</Link>
                                      </a>
                                    <a >
                                    <Link to="/owners/view" >View BusOwners</Link>
                                      </a>  

                                    <a >
                                    <Link to="/drivers/register" >Add Drivers</Link>
                                      </a> 

                                      <a >
                                    <Link to="/drivers/view" >View Drivers</Link>
                                      </a>   
                                  </div>
                         </ div> 
              </nav>
        </div >
      </div> 
      < div className ="l1right" >
          <div className="l1rightTop">
           <nav className="navbar navbar-expand-lg ">
                  <div className="collpase navbar-collapse">          
                        <Link to="/admins/login" className="nav-link">  Sign-in</Link>
                        <Link to="/admins/register" className="nav-link">  Sign-up</Link>    
                </div>
              </nav>                       
          </div>

          <div className="l1rightBottom">
                  search box
          </div>  

      </div>

    </div >
    

    < div className = "level2">
     
          < div className = "main-nav" >
                    <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">  
                                    <li className="navbar-item2"><Link to="/menu" className="nav-link">  Home</Link>
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
                                  <Link to="/fares/register" className="nav-link">Add Fares</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/revenue/report" className="nav-link">View Repots</Link>
                                     </li>
                                </div>
                                </ div>
                              < div class = "dropdown" >
                              <button class="dropbtn">Routes</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/routes/register" className="nav-link">Add Routes</Link>
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
                                  <Link to="/buses/register" className="nav-link">Add Buses</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/track" className="nav-link">Track Buses</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/view" className="nav-link">View Buses</Link>
                                     </li>
                                   <li className="navbar-item2">
                                  <Link to="/busOwners/register" className="nav-link">Add Bus Owners</Link>
                                     </li>

                                  <li className="navbar-item2">
                                  <Link to="/drivers/register" className="nav-link">Add drivers</Link>
                                     </li>   
                                </div>
                          </div>
                      </ul>
                  </div>
          </div>
          < div className = "main-body">
        < div className = "container" >
              <Route path="/admins/register" exact component={AddPassenger}/>
              <Route path="/drivers/register" exact component={AddDriver}/>
              <Route path = "/busOwners/register" exact component={AddBusOwner} />
              <Route path = "/buses/register" exact component={AddBus}/>
              <Route path = "/routes/register" exact component={AddRoute}/>
              <Route path = "/ttables/register" exact component={AddTTable}/>
               <Route path = "/fares/register" exact component={AddFare}/>

              <Route path= "/admins/update/:id" exact component={AddPassenger}/>
              <Route path= "/drivers/update/:id" exact component={UpdateDrivers}/>
              <Route path = "/owners/update/:id/:oid" exact component={UpdateOwners} />
              <Route path = "/buses/update/:id/:bid" exact component={UpdateBus}/>
              <Route path = "/routes/update/:id" exact component={UpdateRoute}/>
              <Route path = "/ttables/update/:id" exact component={AddTTable}/>
              <Route path = "/fares/update/:id" exact component={UpdateFares}/>

              <Route path = "/buses/view" exact component={BusList}/>
              <Route path = "/owners/view" exact component={OwnerList}/>
              <Route path = "/drivers/view" exact component={DriverList}/>
              <Route path = "/fares/view" exact component={FareList}/>
              <Route path = "/routes/view" exact component={RouteList}/>
             
              <Route path = "/contact" exact component={Contact}/>
              <Route path="/" exact component={Login}/> 

        </div>
    
      </div> 
     
    </div>
      </div>
    < div className = "level3" > < h2 ></h2></div >
    </div>
    </Router>
  );
}

export default Home;
