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



export default class AddTTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubmissionRouteNumber = this.onChangeSubmissionRouteNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            route_number: '' ,
            tt_day:[],
            tt_arrival:[],
            tt_depart:[]

        }

    }



    onChangeSubmissionRouteNumber(e) {
     this.setState({

         route_number: e.target.value
     });     
    }


    addTransit(){
        this.setState({ 
            tt_day: [...this.state.tt_day,""]
        })
    }

    addArrival() {
        this.setState({
            tt_arrival: [...this.state.tt_arrival, ""]
        })
    }

    addDepart() {
        this.setState({
            tt_depart: [...this.state.tt_depart, ""]
        })
    }

    handleChange(e,index){
        this.state.tt_day[index] =e.target.value
        this.setState({tt_day:this.state.tt_day})
    }

    handleChange1(f, index1) {
        this.state.tt_arrival[index1] = f.target.value
        this.setState({
            tt_arrival: this.state.tt_arrival
        })
    }

    handleChange2(g, index2) {
        this.state.tt_depart[index2] = g.target.value
        this.setState({
            tt_depart: this.state.tt_depart
        })
    }




    onSubmit(e) {

        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`route  number:${this.state.route_number}`);
        console.log(`route  day:${this.state.tt_day}`);
        console.log(`arrival times:${this.state.tt_arrival}`);
        console.log(`dept times:${this.state.tt_depart}`);
        
        const newtt = {

            rid: '',
            routeNumber: this.state.route_number,
            dayArray: this.state.tt_day,
            arrivalArray: this.state.tt_arrival, 
            departArray: this.state.tt_depart,
            date: ''

            
        };

        axios.all([
                axios.post('http://localhost:3001/api/ttables/register', newtt)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("time table added Succesfully!");
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
                <h3>Add Time Table</h3>
                <form onSubmit={this.onSubmit}>

                
                     <div className="form-group">
                        < label >Route Number: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.route_number}
                               onChange={this.onChangeSubmissionRouteNumber}
                        />
                    </div>
                    <div className="formContainerMain">
                    <div className="formContainer1">

                         {
                             this.state.tt_day.map((day,index)=>{
                                return (
                                    <div className="Transit" key={index}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(e)=>this.handleChange(e,index)}
                                            value={day}
                                            style={{width:200}}
                                            />  
                                        </div>
              
                                    </div>    
                                )

                         })
                         }

                         <button onClick={(e)=>this.addTransit(e)} className="btn btn-primary">Add Days</button>
                        <div style={{marginBottom:30}}></div>
                        
                    </div>
                    
                             <div className="formContainer3">

                         {
                             this.state.tt_depart.map((depart,index2)=>{
                                return (
                                    <div className="Transit" key={index2}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(g)=>this.handleChange2(g,index2)}
                                            value={depart}
                                            style={{width:200}}
                                            />  
                                        </div>
              
                                    </div>    
                                )

                         })
                         }

                         <button onClick={(g)=>this.addDepart(g)} className="btn btn-primary">Add Daily Dept.Times</button>
                    <div style={{marginBottom:30}}></div>
                    </div>
                        

                    
                    <div className="formContainer2">

                         {
                             this.state.tt_arrival.map((arrival,index1)=>{
                                return (
                                    <div className="Transit" key={index1}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(f)=>this.handleChange1(f,index1)}
                                            value={arrival}
                                            style={{width:200}}
                                            />  
                                        </div>
              
                                    </div>    
                                )

                         })
                         }
                        
                        <button onClick={(f)=>this.addArrival(f)} className="btn btn-primary">Add Daily Arriv.Times</button>
                    <div style={{marginBottom:30}}></div>

                    </div>
                

                    
           
                    </div>
                    
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
