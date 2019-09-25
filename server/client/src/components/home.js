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
           <nav className="navbar navbar-expand-lg ">
                  <div className="collpase navbar-collapse"> 
                         < ul className = "navbar-nav mr-auto" >
                                    < div class = "dropdown" >
                                             < li className = "navbar-item2" > < Link to = "/"
                                    className = "nav-link" > Home </Link>
                                      </li>

                                    </div>
                                    < div class = "dropdown" >
                                    < li className = "navbar-item2" > < Link to = "/about"
                                    className = "nav-link" > About </Link>
                                      </li>
                                      </div>
                                      < div class = "dropdown" >
                                    < li className = "navbar-item2" > < Link to = "/contact"
                                    className = "nav-link" > Contact Us </Link>
                                      </li>
                                      </div>
                                      < div class = "dropdown" >
                                    < li className = "navbar-item2" > < Link to = "/reload"
                                    className = "nav-link" > Inquery </Link>
                                      </li>
                                      </div>

                                    
                             < ul className = "navbar-nav mr-auto" >
                              < div class = "dropdown" >
                              <button class="dropbtn">Finance</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/routes/register" className="nav-link1">Add Routes</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/transit/register" className="nav-link1">Add Transit</Link>
                                     </li>
                                </div>
                                </ div>

                             < div class = "dropdown" >
                              <button class="dropbtn">TimeTables</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/ttables/register" className="nav-link1">Add TimeTables</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/view" className="nav-link1">View TimeTables</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/ttables/reports" className="nav-link1">View Reports</Link>
                                     </li>
                                </div>
                          </div> 

                            
                             < div class = "dropdown" >
                              <button class="dropbtn">Buses</button>
                                <div class="dropdown-content">
                                  <li className="navbar-item2">
                                  <Link to="/buses/register" className="nav-link1">Add Buses</Link>
                                    </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/track" className="nav-link1">Track Buses</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/buses/view" className="nav-link1">View Buses</Link>
                                     </li>
                                  <li className="navbar-item2">
                                  <Link to="/busOwners/register" className="nav-link1">Add Bus Owners</Link>
                                     </li>

                                  <li className="navbar-item2">
                                  <Link to="/drivers/register" className="nav-link1">Add Drivers</Link>
                                     </li>   
                                </div>
                          </div>
                          </ul>
                          </ul>  
                   </div>
              </nav>
        </div >
      </div> 
      < div className ="l1right" >
          <div className="l1rightTop">
           <nav className="navbar navbar-expand-lg ">
                  <div className="collpase navbar-collapse">          
                        <Link to="/users/login" className="nav-link">  Sign-in</Link>
                        <Link to="/users/register" className="nav-link">  Sign-up</Link>    
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
              <Route path="/users/register" exact component={AddPassenger}/>
              <Route path="/drivers/register" exact component={AddDriver}/>
              <Route path = "/busOwners/register" exact component={AddBusOwner} />
              <Route path = "/buses/register" exact component={AddBus}/>
              <Route path = "/routes/register" exact component={AddRoute}/>
               <Route path = "/ttables/register" exact component={AddTTable}/>
              <Route path="/" exact component={Login}/> 

        </div>
    
      </div> 
     
    </div>
      </div>
    < div className = "level3" > < h2 > This is footer</h2></div >
    </div>
    </Router>
  );
}

export default Home;
