import React, {
    Component
} from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var BackImage = require('../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg');
export default class AddFare extends Component {
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
    addFare(e) {
        e.preventDefault();
        console.log(`Form Submitted:`);
        console.log(`Route No:${this.state.routeNo}`);
        console.log(`Distance:${this.state.distance}`);
        console.log(`Fixed Fare:${this.state.fixedFare}`);
        
        const newFare= {
            routeNo: this.state.routeNo,
            distance: this.state.distance,
            fixedFare: this.state.fixedFare,
        };
        axios.all([
                axios.post('http://localhost:3001/api/fares/register', newFare)
            ])
            .then(axios.spread((res) => {
                if (res.status === 200) {
                    alert("Fare added Succesfully!");
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
            routeNo: '',
            distance: '',
            fixedFare: ''
        })
    }
    updateFare(e) {
        e.preventDefault();
        console.log(`Form Submitted:`);
        console.log(`Route No:${this.state.routeNo}`);
        console.log(`Distance:${this.state.distance}`);
        console.log(`Fixed Fare:${this.state.fixedFare}`);
        const updateFare = {
            
            routeNo: this.state.routeNo,
            distance: this.state.distance,
            fixedFare: this.state.fixedFare,
            
        };
        axios.all([
                axios.post('http://localhost:3001/api/fares/update', updateFare)
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
            }));
        this.setState({
            routeNo: '',
            distance: '',
            fixedFare: ''
        })
    }
    render() {
        return ( 
            <div className="SignUpPage">
                <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
                    <div className="tableList">   
                        <button onClick={this.updateBus.bind(this)}  className="btn btn-success" style={{marginLeft:25,width:175}}>Update</button>
                    
                </div>
            </div>
            </div>
        )
    }
}
