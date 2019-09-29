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
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.onChangeSubmissionFullName = this.onChangeSubmissionFullName.bind(this);
        this.onChangeSubmissionEmail = this.onChangeSubmissionEmail.bind(this);
        this.onChangeSubmissionMessage = this.onChangeSubmissionMessage.bind(this);
        this.state = {
            fullName: '',
            email: '',
            message: ''
        }
    }
    onChangeSubmissionFullName(e) {
        this.setState({
            fullName: e.target.value
        });
    }
    onChangeSubmissionEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeSubmissionMessage(e) {
     this.setState({
         message: e.target.value
     });
 }
    Message(e) {
        e.preventDefault();
        console.log(`Form Submitted:`);
        console.log(`Full Name:${this.state.fullName}`);
        console.log(`Email:${this.state.email}`);
        console.log(`Message:${this.state.message}`);
        
        const contact= {
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message,
        };
        axios.all([
                axios.post('http://localhost:3001/api/general/contact', contact)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Your Message has been sent Succesfully!");
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
            fullName: '',
            email: '',
            message: ''
        })
    }
    
    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Contact us </h3>
                <form >
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.fullName}
                               onChange={this.onChangeSubmissionFullName}
                        />
                    </div>
                    <div className="form-group">
                        < label > Email: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeSubmissionEmail}
                        />
                    </div>
                     <div className="form-group">
                        < label >Message: </label>
                        < textarea 
                               className="form-control"
                               value={this.state.message}
                               onChange={this.onChangeSubmissionMessage}
                        />
                    </div>
                    <div className="form-group">
                       <button onClick={this.Message.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Submit</button>
                    
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
