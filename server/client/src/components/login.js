import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



export default class AddPassenger extends Component {

    constructor(props){
        super(props);

        this.onChangeSubmissionPassName = this.onChangeSubmissionPassName.bind(this);
        this.onChangeSubmissionPassEmail= this.onChangeSubmissionPassEmail.bind(this);
        this.onChangeSubmissionPassPassword = this.onChangeSubmissionPassPassword.bind(this);
        this.onChangeSubmissionPassNic= this.onChangeSubmissionPassNic.bind(this);
        this.onChangeSubmissionPassTelephone = this.onChangeSubmissionPassTelephone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            pass_name:'',
            pass_email:'',
            pass_password:'',
            pass_nic: '',
            pass_telephone: ''
        }

    }

    
    onChangeSubmissionPassName(e){
        this.setState({

            pass_name:e.target.value
        });
    }
    onChangeSubmissionPassEmail(e){
        this.setState({

            pass_email:e.target.value
        });
    }
    onChangeSubmissionPassPassword(e){
        this.setState({

            pass_password:e.target.value
        });
    }

    onChangeSubmissionPassNic(e) {
        this.setState({

            pass_nic: e.target.value
        });
    }

    onChangeSubmissionPassTelephone(e) {
        this.setState({

            pass_telephone: e.target.value
        });
    }



    onSubmit(e){

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
        console.log(`Passenger name:${this.state.pass_name}`);
        console.log(`Passenger  email:${this.state.pass_email}`);
        console.log(`Passenger  password:${this.state.pass_password}`);
        console.log(`Passenger  nic:${this.state.pass_nic}`);
        console.log(`Passenger  telephone:${this.state.pass_telephone}`);

        const newPassenger = {
            
            pid:'',
            name:this.state.pass_name,
            email:this.state.pass_email,
            password:this.state.pass_password,
            date:'',
            nic: this.state.pass_nic,
            telephone: this.state.pass_telephone,

        };

        axios.post('http://localhost:3001/api/users/register', newPassenger)
            .then(res=>console.log(res.data));


        this.setState({

            pass_name:'',
            pass_email:'',
            pass_password:'',
            pass_nic: '',
            pass_telephone:''
        })
    }

    render(){
        return(
            <div className ="formContainer" style={{marginTop:10}}>
                <div className = "formWrapper">
                <h3>Add Passenger</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_name}
                               onChange={this.onChangeSubmissionPassName}
                        />
                    </div>
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
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_password}
                               onChange={this.onChangeSubmissionPassPassword}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nic :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_nic}
                               onChange={this.onChangeSubmissionPassNic}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_telephone}
                               onChange={this.onChangeSubmissionPassTelephone}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value = "Add Passenger" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
