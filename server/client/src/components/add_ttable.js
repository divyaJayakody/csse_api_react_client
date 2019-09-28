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

export default class AddTTable extends Component {
    constructor(props) {
        super(props);
        this.onChangeSubmissionRouteNumber = this.onChangeSubmissionRouteNumber.bind(this);
        this.onChangeSubmissionStartPoint = this.onChangeSubmissionStartPoint.bind(this);
        this.onChangeSubmissionEndPoint = this.onChangeSubmissionEndPoint.bind(this);
        this.state = {
            route_number: '' ,
            startpoint:'',
            tt_arrival:[],
            tt_depart:[],
            endpoint:'',
            tt_arrival_:[],
            tt_depart_:[]
        }
    }

    onChangeSubmissionRouteNumber(e) {
     this.setState({
         route_number: e.target.value
     });     
    }

    onChangeSubmissionStartPoint(e) {
        this.setState({
            startpoint: e.target.value
        });
    }

     onChangeSubmissionEndPoint(e) {
         this.setState({
             endpoint: e.target.value
         });
     }

    addArrival(e) {
        e.preventDefault();
        this.setState({
            tt_arrival: [...this.state.tt_arrival, ""]
        })
    }
    addDepart(e) {
        e.preventDefault();
        this.setState({
            tt_depart: [...this.state.tt_depart, ""]
        })
    }

    addArrival_(e) {
        e.preventDefault();
        this.setState({
            tt_arrival_: [...this.state.tt_arrival_, ""]
        })
    }
    addDepart_(e) {
        e.preventDefault();
        this.setState({
            tt_depart_: [...this.state.tt_depart_, ""]
        })
    }


    handleChange4(h,index){
        h.preventDefault();
        this.state.tt_arrival_[index] =h.target.value
        this.setState({tt_arrival_:this.state.tt_arrival_})
    }

    handleChange3(i, index) {
          i.preventDefault();
          this.state.tt_depart_[index] = i.target.value
          this.setState({
              tt_depart_: this.state.tt_depart_
          })
      }
    handleChange1(f, index1) {
        f.preventDefault();
        this.state.tt_arrival[index1] = f.target.value
        this.setState({
            tt_arrival: this.state.tt_arrival
        })
    }
    handleChange2(g, index2) {
        g.preventDefault();
        this.state.tt_depart[index2] = g.target.value
        this.setState({
            tt_depart: this.state.tt_depart
        })
    }


    
    addTable(e) {
        e.preventDefault();
        console.log(`Form Submitted:`);
        console.log(`route  number:${this.state.route_number}`);
        console.log(`startpoint:${this.state.startpoint}`);
        console.log(`endpoint:${this.state.endpoint}`);
        console.log(`arrival times:${this.state.tt_arrival}`);
        console.log(`dept times:${this.state.tt_depart}`);
        console.log(`arrival times:${this.state.tt_arrival_}`);
        console.log(`dept times:${this.state.tt_depart_}`);
        
        const newtt = {
            tid: '',
            routeNumber: this.state.route_number,
            startpoint: this.state.startpoint,
            endpoint: this.state.endpoint,
            arrivalArray: this.state.tt_arrival, 
            departArray: this.state.tt_depart,
            arrivalArray_: this.state.tt_arrival_,
            departArray_: this.state.tt_depart_,
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
            route_number: '' ,
            startpoint:'',
            tt_arrival:[],
            tt_depart:[],
            endpoint:'',
            tt_arrival_:[],
            tt_depart_:[]
            
        })
    }

   
    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Add Time Table</h3>
                <form >
                
                     <div className="form-group">
                        < label >Route Number: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.route_number}
                               onChange={this.onChangeSubmissionRouteNumber}
                        />
                    </div>
                        <div className="form-group">
                        < label >Start: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.startpoint}
                               onChange={this.onChangeSubmissionStartPoint}
                        />
                    </div>
      
                    <div className="formContainerMain">
                 
                    
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
                        < label >End : </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.endpoint}
                               onChange={this.onChangeSubmissionEndPoint}
                        />
                    </div>        
                < div className = "formContainerMain1" >     
                      <div className="formContainer3">
                         {
                             this.state.tt_depart_.map((depart_,index2)=>{
                                return (
                                    <div className="Transit" key={index2}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(i)=>this.handleChange3(i,index2)}
                                            value={depart_}
                                            style={{width:200}}
                                            />  
                                        </div>
              
                                    </div>    
                                )
                         })
                         }
                         <button onClick={(i)=>this.addDepart_(i)} className="btn btn-primary">Add Daily Dept.Times</button>
                    <div style={{marginBottom:30}}></div>


                    </div>
                        
                    
                    <div className="formContainer2">
                         {
                             this.state.tt_arrival_.map((arrival_,index1)=>{
                                return (
                                    <div className="Transit" key={index1}>
                                        <div className="inputTransit">                      
                                        <input 
                                            type = "text"
                                            className = "form-control"
                                            onChange={(h)=>this.handleChange4(h,index1)}
                                            value={arrival_}
                                            style={{width:200}}
                                            />  
                                        </div>
              
                                    </div>    
                                )
                         })
                         }
                        
                        <button onClick={(h)=>this.addArrival_(h)} className="btn btn-primary">Add Daily Arriv.Times</button>
                    <div style={{marginBottom:30}}></div>
                    </div>
                           
                    </div>
                    
                    <div className="form-group">
                        <button onClick={this.addTable.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                          </div>
                          
                </form>
                </div>
            </div>
            </div>
        )
    }
}
