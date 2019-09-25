import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import {
    Component
} from 'react'
import axios from 'axios';
import '../App.css';


var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeSubmissionPassEmail = this.onChangeSubmissionPassEmail.bind(this);
        this.onChangeSubmissionPassPassword = this.onChangeSubmissionPassPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           
            pass_email: '',
            pass_password: ''
    
        }

    }



    onChangeSubmissionPassEmail(e) {
        this.setState({

            pass_email: e.target.value
        });
    }
    onChangeSubmissionPassPassword(e) {
        this.setState({

            pass_password: e.target.value
        });
    }



    onSubmit(e) {

        e.preventDefault();

        /*
         const dateTime = function timeStamp() {
            var now = new Date();
          var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
         var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
            var suffix = ( time[0] < 12 ) ? "AM" : "PM";
            time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
          time[0] = time[0] || 12;
            for ( var i = 1; i < 3; i++ ) {
                if ( time[i] < 10 ) {
                    time[i] = "0" + time[i];
                }
            }
            return date.join("/") + " " + time.join(":") + " " + suffix;
        };
      

        const now = dateTime();
        */
        console.log(`Form Submitted:`);
        console.log(`Passenger  email:${this.state.pass_email}`);
        console.log(`Passenger  password:${this.state.pass_password}`);

        const newPassenger = {

            email: this.state.pass_email,
            password: this.state.pass_password
        };

        axios.all([
                axios.post('http://localhost:3001/api/users/login', newPassenger)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200){
                    this.props.history.push('/home');
                    console.log(res.data.tocken);
                }
                else if (res.status === 400)
                    alert("failed");
                else if (res.status === 401)
                    alert("failed");
                else
                    alert("failed !");
                console.log(res);


            }));




        this.setState({

            pass_email: '',
            pass_password: ''

        })
    }

    render(){
        return(
            < div className = "LoginPage"
            style = {
                {   height:800,
                    backgroundImage: 'url(' + BackImage + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    flex: 1, 
                    paddingTop: 70
            }}
            >
            <div className ="formContainer" style={{marginTop:10}}>
                <div className = "formWrapper">
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        < label > Email: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_email}
                               onChange={this.onChangeSubmissionPassEmail}
                        />
                    </div>
                        <div className="form-group">
                        < label > Password: </label>
                        <input type ="password"
                               className="form-control"
                               value={this.state.pass_password}
                               onChange={this.onChangeSubmissionPassPassword}
                        />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value = "Login" className="btn btn-primary" />
                    </div>
                </form>
                                < ul className = "navbar-nav mr-auto" >
                                    < li className = "navbar-item2" > < Link to = "/users/register"
                                    className = "nav-link" > Dont have an account? Sign Up Here</Link> 
                                    </ li>
                                </ ul>       
                              
                </div>
                
            </div>
            </div>
  

        
        
        )
    }
}
