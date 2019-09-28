import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');

export default class AddPassenger extends Component {
    constructor(props){
        super(props);
        //this.onSubmit = this.onSubmit.bind(this);
        this.state={
            pass_name:'',
            pass_email:'',
            pass_password:'',
            pass_password2: '',
            pass_nic: '',
            pass_telephone: '',
            fields:{},
            errors:{}
        }
        this.handleChange = this.handleChange.bind(this);
        //this.submitForm=this.submitForm.bind(this);
    }
    handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
    
    addPassenger(e){
        e.preventDefault();
        if(this.validateForm()){
                    console.log(`Form Submitted for registering:`);
                    console.log(`Passenger name:${this.state.fields.pass_name}`);
                    console.log(`Passenger  email:${this.state.fields.pass_email}`);
                    console.log(`Passenger  pass_password:${this.state.fields.pass_password}`);
                    console.log(`Passenger  pass_password:${this.state.fields.pass_password2}`);
                    console.log(`Passenger  nic:${this.state.fields.pass_nic}`);
                    console.log(`Passenger  telephone:${this.state.fields.pass_telephone}`);
                    const newPassenger = {
                        pid: '',
                        name: this.state.fields.pass_name,
                        email: this.state.fields.pass_email,
                        password: this.state.fields.pass_password,
                        password2: this.state.fields.pass_password2,
                        date: '',
                        nic: this.state.fields.pass_nic,
                        telephone: this.state.fields.pass_telephone
                    };
                 
                    axios.all([
                            axios.post('http://localhost:3001/api/admins/register', newPassenger)
                        ])
                        .then(axios.spread((res) => {
                            if (res.status === 200) {
                                alert("Officer added Succesfully!");
                                this.props.history.push('/');
                            } else if (res.status === 400)
                                alert("Email already exists");
                            else if (res.status === 401)
                                alert("failed");
                            else
                                alert("failed !");
                            console.log(res);
                        }));
                                    let fields = {};
                                    fields["pass_name"] = "";
                                    fields["pass_email"] = "";
                                    fields["pass_password"] = "";
                                    fields["pass_password2"] = "";
                                    fields["pass_nic"] = "";
                                    fields["pass_telephone"] = "";
                                    this.setState({
                                        fields: fields
                                    });
                                   
        }
    }
    updatePassenger(e){
         e.preventDefault();
         if (this.validateForm()) {
             console.log(`Form Submitted for updated:`);
             console.log(`Passenger  name:${this.state.fields.pass_name}`);
             console.log(`Passenger  email:${this.state.fields.pass_email}`);
             console.log(`Passenger  pass_password:${this.state.fields.pass_password}`);
             console.log(`Passenger  pass_password:${this.state.fields.pass_password2}`);
             console.log(`Passenger  nic:${this.state.fields.pass_nic}`);
             console.log(`Passenger  telephone:${this.state.fields.pass_telephone}`);
             const updatePassenger = {
                 pid: '',
                 name: this.state.fields.pass_name,
                 email: this.state.fields.pass_email,
                 password: this.state.fields.pass_password,
                 password2: this.state.fields.pass_password2,
                 date: '',
                 nic: this.state.fields.pass_nic,
                 telephone: this.state.fields.pass_telephone,
             };

             axios.all([
                     axios.post('http://localhost:3001/api/admins/update',updatePassenger)
                 ])
                 .then(axios.spread((res) => {
                     if (res.status === 200) {
                         alert("Officer updated Succesfully!");
                         this.props.history.push('/');
                     } else if (res.status === 400)
                         alert("Email already exists");
                     else if (res.status === 401)
                         alert("failed");
                     else
                         alert("failed !");
                     console.log(res);
                 }));
             let fields = {};
             fields["pass_name"] = "";
             fields["pass_email"] = "";
             fields["pass_password"] = "";
             fields["pass_password2"] = "";
             fields["pass_nic"] = "";
             fields["pass_telephone"] = "";
             this.setState({
                 fields: fields
             });
         }

    }
    validateForm(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["pass_name"]) {
            formIsValid = false;
            errors["pass_name"] = "*Please enter your name.";
        }
        if (typeof fields["pass_name"] !== "undefined") {
            if (!fields["pass_name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["pass_name"] = "*Please enter alphabet characters only.";
            }
        }
        if (!fields["pass_email"] == "undefined") {
            formIsValid = false;
            errors["pass_email"] = "*Please enter your email.";
        }
        if (typeof fields["pass_email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["pass_email"])) {
                formIsValid = false;
                errors["pass_email"] = "*Please enter valid email.";
            }
        }
        if (!fields["pass_telephone"]) {
            formIsValid = false;
            errors["pass_telephone"] = "*Please enter your telephone no.";
        }
        if (typeof fields["pass_telephone"] !== "undefined") {
            if (!fields["pass_telephone"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["pass_telephone"] = "*Please enter valid telephone  no.";
            }
        }
        if (!fields["pass_password"] == "undefined") {
            formIsValid = false;
            errors["pass_password"] = "*Please enter a password.";
        }
        if (typeof fields["pass_password2"] == "undefined") {
             formIsValid = false;
             errors["pass_password2"] = "*Please re-enter your password.";
        }   
                if (!fields["pass_nic"]) {
                    formIsValid = false;
                    errors["pass_nic"] = "*Please enter your NIC number.";
                }
           if (typeof fields["pass_nic"] !== "undefined") {
                    if (!fields["pass_nic"].match(/^([0-9]{9})(X|V|x|v)$/)) {
                        formIsValid = false;
                        errors["pass_nic"] = "*Please enter a valid nic number.";
                    }
                }
                this.setState({errors:errors});
                return formIsValid;
            
    }

    render(){
        return(
            <div className="SignUpPage"
             style = {
                 {
                     height: 800,
                     backgroundImage: 'url(' + BackImage + ')',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     flex: 1,
                     paddingTop:70
                 }
             } >
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Passenger</h3>
                <form name="submitForm" >

                    <div className="form-group">
                         <label>Name :</label>
                        <input type ="text"
                               name="pass_name"
                               className="form-control"
                               value={this.state.fields.pass_name}
                               onChange={this.handleChange}
                
                        />
                         <div className="errorMsg">{this.state.errors.pass_name}</div>
                    </div>
                    <div className="form-group">
                       < label > Email: </label>
                        <input type ="email"
                               name = "pass_email"
                               className="form-control"
                               value={this.state.fields.pass_email}
                               onChange={this.handleChange}
                                 required
                        />
                        <div className="errorMsg">{this.state.errors.pass_email}</div>
                    </div>
                        <div className="form-group">
                
                        < label > Password: <small>Password should be six characters in length</small> </label>
                        <input type ="password"
                                name = "pass_password"
                               className="form-control"
                               value={this.state.fields.pass_password}
                               onChange={this.handleChange}
                                 required
                        />
                        <div className="errorMsg">{this.state.errors.pass_password}</div>
                    </div>
                     <div className="form-group">
                         
                        < label >Retype Password: </label>
                        <input type ="password"
                               name = "pass_password2"
                               className="form-control"
                               value={this.state.fields.pass_password2}
                               onChange={this.handleChange}                            
                               required
                        />
                        <div className="errorMsg">{this.state.errors.pass_password2}</div>
                    </div>
                    <div className="form-group">
                       
                        <label>Nic :</label>
                        <input type ="text"
                                name = "pass_nic"
                               className="form-control"
                               value={this.state.fields.pass_nic}
                               onChange={this.handleChange}
                               required
                        />
                        <div className="errorMsg">{this.state.errors.pass_nic}</div>
                    </div>
                    <div className="form-group">
                       
                        <label>Telephone :</label>
                        <input type ="text"
                                name = "pass_telephone"
                                className="form-control"
                                value={this.state.fields.pass_telephone}
                                onChange={this.handleChange}
                                required
                        />
                        <div className="errorMsg">{this.state.errors.pass_telephone}</div>
                    </div>
                     {this.state.errormessage}
                    <div className="form-group">
                        <button onClick={this.addPassenger.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                        <button onClick={this.updatePassenger.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Update</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
