import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');

export default class AddBusOwner extends Component {
    constructor(props) {
        super(props);
        this.onChangeSubmissionOwnName = this.onChangeSubmissionOwnName.bind(this);
        this.onChangeSubmissionOwnAddress = this.onChangeSubmissionOwnAddress.bind(this);
        this.onChangeSubmissionOwnTelephone = this.onChangeSubmissionOwnTelephone.bind(this);
        this.onChangeSubmissionOwnNoOfBuses = this.onChangeSubmissionOwnNoOfBuses.bind(this);
        this.state = {
            own_name: '',
            own_address: '',
            own_telephone: '',
            own_noOfBuses: '',
            fields:{},
            errors:{}
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

       handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    onChangeSubmissionOwnName(e) {
        this.setState({
            own_name: e.target.value
        });
    }
    onChangeSubmissionOwnAddress(e) {
        this.setState({
            own_address: e.target.value
        });
    }
    onChangeSubmissionOwnNoOfBuses(e) {
        this.setState({
            own_noOfBuses: e.target.value
        });
    }
    onChangeSubmissionOwnTelephone(e) {
     this.setState({
         own_telephone: e.target.value
     });
 }

    addOwner(e) {
        e.preventDefault();
        console.log(`Form Submitted:`);
        console.log(`BusOwner name:${this.state.own_name}`);
        console.log(`BusOwner  address:${this.state.own_address}`);
        console.log(`BusOwner  telephone:${this.state.own_telephone}`);
        console.log(`BusOwner noOfBuses:${this.state.own_noOfBuses}`);
        
        const newBusOwner = {
            oid: '',
            name: this.state.own_name,
            address: this.state.own_address,
            telephone: this.state.own_telephone,
            noOfBuses: this.state.own_noOfBuses
            
        };
        axios.all([
                axios.post('http://localhost:3001/api/owners/register', newBusOwner)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("BusOwner added Succesfully!");
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
            own_name: '',
            own_address: '',          
            own_noOfBuses: '',
            own_telephone: ''
        })
    }
        updateOwner(e) {
            e.preventDefault();
            console.log(`Form Submitted:`);
            console.log(`BusOwner name:${this.state.own_name}`);
            console.log(`BusOwner  address:${this.state.own_address}`);
            console.log(`BusOwner  telephone:${this.state.own_telephone}`);
            console.log(`BusOwner nic:${this.state.own_noOfBuses}`);

            const updateBusOwner = {
                name: this.state.own_name,
                address: this.state.own_address,
                telephone: this.state.own_telephone,
                noOfBuses: this.state.own_noOfBuses
            };
            axios.all([
                    axios.put('http://localhost:3001/api/owners/update/:id', updateBusOwner)
                ])
                .then(axios.spread((res) => {
                    if (res.status === 200) {
                        alert("BusOwner updated Succesfully!");
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
                own_name: '',
                own_address: '',
                own_noOfBuses: '',
                own_telephone: ''
            })
        }
    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Bus Owner</h3>
                <form >
                    <div className="form-group">
                        <label>Name :</label>
                        <input type = "text"  required
                               className="form-control"
                               value={this.state.own_name}
                               onChange={this.onChangeSubmissionOwnName}
                        />
                    </div>
                    <div className="form-group">
                        < label > Address: </label>
                        <input type = "text"  required
                               className="form-control"
                               value={this.state.own_address}
                               onChange={this.onChangeSubmissionOwnAddress}
                        />
                    </div>
                     <div className="form-group">
                        < label >Telephone: </label>
                        < input type = "text"  required
                               className="form-control"
                               value={this.state.own_telephone}
                               onChange={this.onChangeSubmissionOwnTelephone}
                        />
                    </div>
                    <div className="form-group">
                        <label>No Of Buses :</label>
                        <input type = "text"  required
                               className="form-control"
                               value={this.state.own_noOfBuses}
                               onChange={this.onChangeSubmissionOwnNoOfBuses}
                        />
                    </div>
                    <div className="form-group">
                        <button onClick={this.addOwner.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
