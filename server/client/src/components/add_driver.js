import React, {
    Component
} from 'react';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class AddDriver extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubmissionPassName = this.onChangeSubmissionPassName.bind(this);
        this.onChangeSubmissionPassAddress = this.onChangeSubmissionPassAddress.bind(this);
        this.onChangeSubmissionPassTelephone = this.onChangeSubmissionPassTelephone.bind(this);
        this.onChangeSubmissionPassAge = this.onChangeSubmissionPassAge.bind(this);
        this.onChangeSubmissionPassNic = this.onChangeSubmissionPassNic.bind(this);
        this.onChangeSubmissionPassLicense = this.onChangeSubmissionPassLicense.bind(this);
        
        this.state = {
            pass_name: '',
            pass_address: '',
            pass_telephone: '',
            pass_age: '',
            pass_nic: '',
            pass_license: ''
        }

    }


    onChangeSubmissionPassName(e) {
        this.setState({

            pass_name: e.target.value
        });
    }
    onChangeSubmissionPassAddress(e) {
        this.setState({

            pass_address: e.target.value
        });
    }
    onChangeSubmissionPassAge(e) {
        this.setState({

            pass_age: e.target.value
        });
    }
    onChangeSubmissionPassTelephone(e) {
     this.setState({

         pass_telephone: e.target.value
     });
 }


    onChangeSubmissionPassNic(e) {
        this.setState({

            pass_nic: e.target.value
        });
    }
    onChangeSubmissionPassLicense(e) {
        this.setState({

            pass_license: e.target.value
        });
    }

    addDriver(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Driver name:${this.state.pass_name}`);
        console.log(`Driver  address:${this.state.pass_address}`);
        console.log(`Driver  age:${this.state.pass_age}`);
        console.log(`Driver  telephone:${this.state.pass_telephone}`);
        console.log(`Driver license:${this.state.pass_license}`);
        console.log(`Driver nic:${this.state.pass_nic}`);
        
        const newDriver = {

            did: '',
            name: this.state.pass_name,
            address: this.state.pass_address,
            age: this.state.pass_age,
            telephone: this.state.pass_telephone,
            date: '',
            nic: this.state.pass_nic,
            license: this.state.pass_license,
            
        };

        axios.all([
                axios.post('http://localhost:3001/api/drivers/register', newDriver)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Driver added Succesfully!");
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

            pass_name: '',
            pass_address: '',
            pass_age: '',
            pass_license: '',
            pass_nic: '',
            pass_telephone: ''
        })
    }


     updateDriver(e) {

         e.preventDefault();

         console.log(`Form Submitted:`);
         console.log(`Driver name:${this.state.pass_name}`);
         console.log(`Driver  address:${this.state.pass_address}`);
         console.log(`Driver  age:${this.state.pass_age}`);
         console.log(`Driver  telephone:${this.state.pass_telephone}`);
         console.log(`Driver license:${this.state.pass_license}`);
         console.log(`Driver nic:${this.state.pass_nic}`);

         const newDriver = {

             did: '',
             name: this.state.pass_name,
             address: this.state.pass_address,
             age: this.state.pass_age,
             telephone: this.state.pass_telephone,
             date: '',
             nic: this.state.pass_nic,
             license: this.state.pass_license,

         };

         axios.all([
                 axios.post('http://localhost:3001/api/drivers/register', newDriver)
             ])
             .then(axios.spread((res) => {
                 if (res.status === 200) {
                     alert("Driver added Succesfully!");
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

             pass_name: '',
             pass_address: '',
             pass_age: '',
             pass_license: '',
             pass_nic: '',
             pass_telephone: ''
         })
     }
    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Driver</h3>
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
                        < label > Address: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_address}
                               onChange={this.onChangeSubmissionPassAddress}
                        />
                    </div>
                        <div className="form-group">
                        < label > Age: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.pass_age}
                               onChange={this.onChangeSubmissionPassAge}
                        />
                    </div>
                     <div className="form-group">
                        < label >Telephone: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.pass_telephone}
                               onChange={this.onChangeSubmissionPassTelephone}
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
                        <label>License:</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.pass_license}
                               onChange={this.onChangeSubmissionPassLicense}
                        />
                    </div>

                    <div className="form-group">
                       <button onClick={this.addDriver.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                        <button onClick={this.updateDriver.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Update</button>
                   
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
