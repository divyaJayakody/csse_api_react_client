import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';



const  Fare =props=>(


    <tr>
        <td>{props.fares.fid}</td>
        <td>{props.fares.routeNo}</td>
        <td>{props.fares.distance}</td>
        <td>{props.fares.fixedFare}</td>
    
        < td > 
            < Link to = {
                "/fares/update/" + props.fares._id} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>
    </tr>

);

export default class DriverList extends Component{

    constructor(props) {
        super(props);
        this.state = {fares:[]};
    }
    componentDidMount(){

        axios.get('http://localhost:3001/api/fares')
            .then(res=>{
                this.setState({fares:res.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    fareList(){
        return this.state.fares.map(function(currentfares,i){
            return <Fare fares={currentfares} key={i}/>
        })
    }

    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>Fare List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>fid</th>
                        <th>Route No</th>
                        <th>Distance(Km)</th>
                        <th>Fixed Fare(Rs.)</th>
      
                    </tr>
                    </thead>
                    <tbody>
                    {this.fareList()}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}