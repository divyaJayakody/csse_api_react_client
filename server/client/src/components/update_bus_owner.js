import React, {
    Component
} from 'react';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class UpdateBus extends Component {

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
                
        }

    }

    componentDidMount() {

        console.log('getting http://localhost:3001/api/owners/' + this.props.match.params.id);
        axios.get('http://localhost:3001/api/owners/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    own_name: res.data.name,
                    own_address: res.data.address,
                    own_telephone: res.data.telephone,
                    own_noOfBuses: res.data.noOfBuses
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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


    updateBus(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
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
            console.log(updateBusOwner)
        axios.all([
                axios.post('http://localhost:3001/api/owners/update/' + this.props.match.params.id, updateBusOwner)
                
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Bus Owner updated Succesfully!");
                    this.props.history.push('/home');
                } else if (res.status === 400)
                    alert("failed");
                else if (res.status === 401)
                    alert("failed");
                else
                    alert("failed !");
                console.log(res);
                this.props.history.push('/home');


            }));




        this.setState({

            own_name: '',
            own_address: '',
            own_telephone: '',
            own_noOfBuses:''
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
                axios.delete('http://localhost:3001/api/owners/remove/'+id+'')
            ])
            alert("BusOwner deleted Succesfully!");
            this.props.history.push('/home');
        this.setState({

            own_name: '',
            own_address: '',
            own_telephone: '',
            own_noOfBuses:''
        })
    }


    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Manage Bus Owner</h3>
                <form >

                    <div className="form-group">
                        <label>Name :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.own_name}
                               onChange={this.onChangeSubmissionOwnName}
                        />
                    </div>
                    <div className="form-group">
                        < label >Address: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.own_address}
                               onChange={this.onChangeSubmissionOwnAddress}
                        />
                    </div>
                     <div className="form-group">
                        < label >telephone: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.own_telephone}
                               onChange={this.onChangeSubmissionOwnTelephone}
                        />
                    </div>

                    <div className="form-group">
                        < label >No of Buses owned: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.own_noOfBuses}
                               onChange={this.onChangeSubmissionOwnNoOfBuses}
                        />
                    </div>
                    <div className="form-group">
                         <button onClick={this.updateBus.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Update</button>
                         <button onClick={this.deleteBus.bind(this)}  className="btn btn-danger" style={{marginLeft:25,width:175}}>Delete</button>
                    
                    </div>
                    <br/>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
