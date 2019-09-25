import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FormErrors
} from './FormErrors';
var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');



export default class AddRoute extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubmissionRouteStartPoint = this.onChangeSubmissionRouteStartPoint.bind(this);
        this.onChangeSubmissionRouteEndPoint = this.onChangeSubmissionRouteEndPoint.bind(this);
        this.onChangeSubmissionRouteNumber = this.onChangeSubmissionRouteNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            route_startpoint: '',
            route_endpoint: '',
            route_number: '' ,
            route_transits:[]

        }

    }


    onChangeSubmissionRouteStartPoint(e) {
        this.setState({

            route_startpoint: e.target.value
        });
    }
    onChangeSubmissionRouteEndPoint(e) {
        this.setState({

            route_endpoint: e.target.value
        });
    }
    onChangeSubmissionRouteNumber(e) {
     this.setState({

         route_number: e.target.value
     });     
    }


    addTransit(){
        this.setState({ 
            route_transits: [...this.state.route_transits,""]
        })
    }

    handleChange(e,index){
        this.state.route_transits[index] =e.target.value
        this.setState({route_transits:this.state.route_transits})
    }

    handleRemove( index) {
        this.state.route_transits.splice(index,1)
        console.log(this.state.route_transits,".....")
        this.setState({
            route_transits: this.state.route_transits
        })
    }



    onSubmit(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`route startpoint:${this.state.route_startpoint}`);
        console.log(`route  endpoint:${this.state.route_endpoint}`);
        console.log(`route  number:${this.state.route_number}`);
        console.log(`route  transit:${this.state.route_transits}`);
        
        const newroute = {

            rid: '',
            startpoint: this.state.route_startpoint,
            endpoint: this.state.route_endpoint,
            routeNumber: this.state.route_number,
            transitArray: this.state.route_transits,
            date: ''

            
        };

        axios.all([
                axios.post('http://localhost:3001/api/routes/register', newroute)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("route added Succesfully!");
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
            
        })
    }

    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Router</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Start Point :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.route_startpoint}
                               onChange={this.onChangeSubmissionRouteStartPoint}
                        />
                    </div>
                    <div className="form-group">
                        < label >End Point: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.route_endpoint}
                               onChange={this.onChangeSubmissionRouteEndPoint}
                        />
                    </div>
                     <div className="form-group">
                        < label >Route Number: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.route_number}
                               onChange={this.onChangeSubmissionRouteNumber}
                        />
                    </div>
                    <div className="formContainer1">
                        < label >Transits: </label>

                         {
                             this.state.route_transits.map((transit,index)=>{
                                return (
                                    <div className="Transit" key={index}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(e)=>this.handleChange(e,index)}
                                            value={transit}
                                            style={{width:300}}
                                            />  
                                        </div>
                                        < div className = "inputTransitButton" >
                                       <button onClick={(e)=>this.handleRemove(index)} className="btn btn-danger">Remove</button>
                                        </div>
              
                                    </div>    
                                )

                         })
                         }
                        
                    </div>
                    <button onClick={(e)=>this.addTransit(e)} className="btn btn-primary">Add Transits</button>
                    <div style={{marginBottom:30}}></div>

                    <div className="form-group">
                        <input type="submit" value = "Add Route" className="btn btn-success" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
