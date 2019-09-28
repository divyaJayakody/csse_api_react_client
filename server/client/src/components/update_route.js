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
export default class UpdateRoute extends Component {
    constructor(props) {
        super(props);
        this.onChangeSubmissionRouteStartPoint = this.onChangeSubmissionRouteStartPoint.bind(this);
        this.onChangeSubmissionRouteEndPoint = this.onChangeSubmissionRouteEndPoint.bind(this);
        this.onChangeSubmissionRouteNumber = this.onChangeSubmissionRouteNumber.bind(this);
     
        this.state = {
            startpoint: '',
            endpoint: '',
            routeNumber: '' ,
            transits:[]
        }
    }
    componentDidMount() {
        console.log('getting http://localhost:3001/api/routes/' + this.props.match.params.id);
        axios.get('http://localhost:3001/api/routes/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    startpoint: res.data.startpoint,
                    endpoint: res.data.endpoint,
                    routeNumber: res.data.routeNumber,
                    transitArray: res.data.transitArray
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeSubmissionRouteStartPoint(e) {
        this.setState({
            startpoint: e.target.value
        });
    }
    onChangeSubmissionRouteEndPoint(e) {
        this.setState({
            endpoint: e.target.value
        });
    }
    onChangeSubmissionRouteNumber(e) {
     this.setState({
         routeNumber: e.target.value
     });     
    }
    updateTransit(e){
        e.preventDefault();
        this.setState({ 
            transits: [...this.state.transits,""]
        })
    }
    handleChange(e,index){
        e.preventDefault();
        this.state.transits[index] =e.target.value
        this.setState({transits:this.state.transits})
    }
    handleRemove(e,index) {
        e.preventDefault();
        this.state.transits.splice(index,1)
        console.log(this.state.transits,".....")
        this.setState({
            transits: this.state.transits
        })
    }
  
     updateRoute(e) {
         e.preventDefault();
         console.log(`Form Submitted:`);
         console.log(`route startpoint:${this.state.startpoint}`);
         console.log(`route  endpoint:${this.state.endpoint}`);
         console.log(`route  routeNumber:${this.state.routeNumber}`);
         console.log(`route  transit:${this.state.transits}`);
         const newroute = {
    
             startpoint: this.state.startpoint,
             endpoint: this.state.endpoint,
             routeNumber: this.state.routeNumber,
             transitArray: this.state.transits,
             
         };
         axios.all([
                 axios.post('http://localhost:3001/api/routes/update/' + this.props.match.params.id, newroute)
             ])
             .then(axios.spread((res) => {
                 if (res.status === 200) {
                     alert("route updated Succesfully!");
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
                startpoint: '',
                 endpoint: '',
                 routeNumber: '',
                 transits: []
         })
        }
    deleteBus(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const bid_ = this.props.match.params.bid;
        console.log(bid_);
        const bid = this.props.match.params.bid;
        console.log("recieved objcet id " + id)
        axios.all([
            axios.delete('http://localhost:3001/api/routes/remove/' + id + '')
        ])
        alert("Route deleted Succesfully!");
        this.props.history.push('/home');
          this.setState({
              startpoint: '',
              endpoint: '',
              routeNumber: '',
              transits: []
          })
    }
    render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Manage Route</h3>
                <form >
                    <div className="form-group">
                        <label>Start Point :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.startpoint}
                               onChange={this.onChangeSubmissionRouteStartPoint}
                        />
                    </div>
                    <div className="form-group">
                        < label >End Point: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.endpoint}
                               onChange={this.onChangeSubmissionRouteEndPoint}
                        />
                    </div>
                     <div className="form-group">
                        < label >Route routeNumber: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.routeNumber}
                               onChange={this.onChangeSubmissionRouteNumber}
                        />
                    </div>
                    <div className="formContainer1">
                        < label >Transits: </label>
                         {
                             this.state.transits.map((transit,index)=>{
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
                                       <button type="button" onClick={(e)=>this.handleRemove(e,index)} className="btn btn-danger" return false >Remove</button>
                                        </div>
              
                                    </div>    
                                )
                         })
                         }
                        
                    </div>
                    <button onClick={(e)=>this.updateTransit(e)} className="btn btn-primary">Add Transits</button>
                    <div style={{marginBottom:30}}></div>
                    <div className="form-group">
                       <button onClick={this.updateRoute.bind(this)}  className="btn btn-success" style={{marginRight:25,width:175 }} >Add</button>
                        <button onClick={this.deleteBus.bind(this)}  className="btn btn-danger" style={{marginLeft:25,width:175}}>Delete</button>
                     </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
