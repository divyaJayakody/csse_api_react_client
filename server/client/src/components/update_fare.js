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
         this.onChangeSubmissionRouteNo = this.onChangeSubmissionRouteNo.bind(this);
         this.onChangeSubmissionDistance = this.onChangeSubmissionDistance.bind(this);
         this.onChangeSubmissionFixedFare = this.onChangeSubmissionFixedFare.bind(this);
         this.state = {
             routeNo: '',
             distance: '',
             fixedFare: ''
         }

    }

    componentDidMount() {

        console.log('getting http://localhost:3001/api/fares/' + this.props.match.params.id);
        axios.get('http://localhost:3001/api/fares/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                   
                    routeNo: res.data.routeNo,
                    distance: res.data.distance,
                    fixedFare: res.data.fixedFare
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }



 onChangeSubmissionRouteNo(e) {
     this.setState({
         routeNo: e.target.value
     });
 }
 onChangeSubmissionDistance(e) {
     this.setState({
         distance: e.target.value
     });
 }

 onChangeSubmissionFixedFare(e) {
         this.setState({
             fixedFare: e.target.value
         });

     
 }


    updateFare(e) {

      e.preventDefault();
      console.log(`Form Submitted:`);
      console.log(`Route No:${this.state.routeNo}`);
      console.log(`Distance:${this.state.distance}`);
      console.log(`Fixed Fare:${this.state.fixedFare}`);

      const newFare = {
          routeNo: this.state.routeNo,
          distance: this.state.distance,
          fixedFare: this.state.fixedFare,
      };

        console.log(newFare)
        axios.all([
                axios.post('http://localhost:3001/api/fares/update/' + this.props.match.params.id, newFare)
                
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Fare updated Succesfully!");
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
                routeNo: '',
                distance: '',
                fixedFare: ''
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
                axios.delete('http://localhost:3001/api/fares/remove/'+id+'')
            ])
            alert("BusOwner deleted Succesfully!");
            this.props.history.push('/fares/view');
        this.setState({

            fid: '',
            routeNo: '',
            distance: '',
            fixedFare:''
        })
    }
render() {
        return ( 
            <div className="SignUpPage">
            <div className ="formContainer" >
                <div className = "formWrapper">
                <h3>Update Fare</h3>
                <form >
                    <div className="form-group">
                        <label>Route No :</label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.routeNo}
                               onChange={this.onChangeSubmissionRouteNo}
                        />
                    </div>
                    <div className="form-group">
                        < label > Distance: </label>
                        <input type ="text"
                               className="form-control"
                               value={this.state.distance}
                               onChange={this.onChangeSubmissionDistance}
                        />
                    </div>
                     <div className="form-group">
                        < label >Fixed Fare: </label>
                        < input type ="text"
                               className="form-control"
                               value={this.state.fixedFare}
                               onChange={this.onChangeSubmissionFixedFare}
                        />
                    </div>
         
                    <div className="form-group">
                         <button onClick={this.updateFare.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Update</button>
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
