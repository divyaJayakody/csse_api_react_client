import React, {
    Component
} from 'react';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FormErrors
} from './FormErrors';
var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class AddBus extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubmissionBusRegNo = this.onChangeSubmissionBusRegNo.bind(this);
        this.onChangeSubmissionBusNo = this.onChangeSubmissionBusNo.bind(this);
        this.onChangeSubmissionBusNoOfSeats = this.onChangeSubmissionBusNoOfSeats.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bus_regNo: '',
            bus_No: '',
            bus_noOfSeats: ''
        }

    }


    onChangeSubmissionBusRegNo(e) {
        this.setState({

            bus_regNo: e.target.value
        });
    }
    onChangeSubmissionBusNo(e) {
        this.setState({

            bus_No: e.target.value
        });
    }
    onChangeSubmissionPassAge(e) {
        this.setState({

            pass_age: e.target.value
        });
    }
    onChangeSubmissionBusNoOfSeats(e) {
     this.setState({

         bus_noOfSeats: e.target.value
     });
 }

    onSubmit(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Bus Reg No:${this.state.bus_regNo}`);
        console.log(`Bus Number:${this.state.bus_No}`);
        console.log(`Bus No of Seats:${this.state.bus_noOfSeats}`);
        
        const newBus= {

            bid: '',
            busRegNo: this.state.bus_regNo,
            busNo: this.state.bus_No,
            noOfSeats: this.state.pass_age,
            date: ''
        };

        axios.all([
                axios.post('http://localhost:3001/api/buses/register', newBus)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Bus added Succesfully!");
                    this.props.history.push('/home');
                } else if (res.status === 400)
                    alert("failed");
                else if (res.status === 401)
                    alert("failed");
                else
                    alert("failed !");
                console.log(res);


            }));




        this.setState({

            bus_regNo: '',
            bus_No: '',
            bus_noOfSeats: ''
        })
    }

    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Bus</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Reg No :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.bus_regNo}
                               onChange={this.onChangeSubmissionBusRegNo}
                        />
                    </div>
                    <div className="form-group">
                        < label > Bus No: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.bus_No}
                               onChange={this.onChangeSubmissionBusNo}
                        />
                    </div>
                     <div className="form-group">
                        < label >No Of Seats: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.bus_noOfSeats}
                               onChange={this.onChangeSubmissionBusNoOfSeats}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Add Bus" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
