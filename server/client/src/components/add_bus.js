import React, {
    Component
} from 'react';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class AddBus extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubmissionBusRegNo = this.onChangeSubmissionBusRegNo.bind(this);
        this.onChangeSubmissionBusNo = this.onChangeSubmissionBusNo.bind(this);
        this.onChangeSubmissionBusNoOfSeats = this.onChangeSubmissionBusNoOfSeats.bind(this);
        this.onChangeSubmissionBusOwner = this.onChangeSubmissionBusOwner.bind(this);
        const id = this.props.match.params._id;
        this.state = {
            bus_regNo: '',
            bus_No: '',
            bus_noOfSeats: '',
            bus_owner:''
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
    onChangeSubmissionBusOwner(e) {
        this.setState({

            bus_owner: e.target.value
        });
    }
    onChangeSubmissionBusNoOfSeats(e) {
     this.setState({

         bus_noOfSeats: e.target.value
     });

     
 }

    addBus(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Bus Reg No:${this.state.bus_regNo}`);
        console.log(`Bus Number:${this.state.bus_No}`);
        console.log(`Bus No of Seats:${this.state.bus_noOfSeats}`);
        
        const newBus= {

            bid: '',
            busRegNo: this.state.bus_regNo,
            busNo: this.state.bus_No,
            noOfSeats: this.state.noOfSeats,
            oid: this.state.bus_owner
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
            bus_noOfSeats: '',
            bus_owner:''
        })
    }

    updateBus(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Bus Reg No:${this.state.bus_regNo}`);
        console.log(`Bus Number:${this.state.bus_No}`);
        console.log(`Bus No of Seats:${this.state.bus_noOfSeats}`);

        const newBus = {

            
            busRegNo: this.state.bus_regNo,
            busNo: this.state.bus_No,
            noOfSeats: this.state.bus_noOfSeats,
            oid:this.state.bus_owner
            
        };

        axios.all([
                axios.post('http://localhost:3001/api/buses/update', newBus)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Bus updated Succesfully!");
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
            bus_noOfSeats: '',
            bus_owner:''
        })
    }

    
    deleteBus(e) {

        e.preventDefault();
    
        const id = this.props.match.params.id;
        const bid_ = this.props.match.params.bid;

        console.log(bid_);

         const bid = this.props.match.params.bid;

        console.log("recieved objcet id "+id)
        axios.all([
                axios.delete('http://localhost:3001/api/buses/remove/'+id+'')
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Bus deleted Succesfully!");
                    this.props.history.push('/buses/view');
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
            bus_noOfSeats: '',
            bus_owner:''
        })
    }


    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Bus</h3>
                <form >

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
                        < label >Bus Owner: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.bus_owner}
                               onChange={this.onChangeSubmissionBusOwner}
                        />
                    </div>
                    <div className="form-group">
                       <button onClick={this.addBus.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                        <button onClick={this.updateBus.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Delete</button>
                    
                    </div>
                    <br/>
                    <button onClick={this.deleteBus.bind(this)}  className="btn btn-danger" style={{marginLeft:25,width:175}}>Delete</button>
                    
                </form>
                </div>
            </div>
            </div>
        )
    }
}
