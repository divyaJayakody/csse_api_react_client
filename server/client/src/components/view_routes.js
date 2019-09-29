import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


const  Route1 =props=>(
    <tr>
        <td>{props.route.rid}</td>
        <td>{props.route.startpoint}</td>
        <td>{props.route.endpoint}</td>
        <td>{props.route.routeNumber}</td>
        <td>{props.route.transitArray.join(" ,  ")}</td>
        < td > 
            < Link to = {
                "/routes/update/" + props.route._id} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>
    </tr>
);
const  Transit =props=>(
    <tr>
        <td>{props.transit.transitArray}</td>
    </tr>
);
export default class RouteList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            routes:[]
        };
    
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/routes')
            .then(res=>{
                this.setState({
                            routes: res.data
                });
                
            })
            .catch(function(error){
                console.log(error);
            })
    }
    routeList(){
        return this.state.routes.map(function(currentRoute,i){
            return <Route1 route={currentRoute} key={i}/>
        })
    }

    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>Route List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>rid</th>
                        <th>Start Point </th>
                        <th>End Point</th>
                        <th>Route Number</th>
                        <th>Transits</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.routeList()}
                    </tbody>
                    
                </table>
                
            </div>
            </div>
        )
    }
}