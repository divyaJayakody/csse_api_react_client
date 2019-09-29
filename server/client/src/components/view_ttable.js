import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';


const  TTable =props=>(
    <tr>
        <td>{props.ttable.tid}</td>
        <td>{props.ttable.routeNumber}</td>
        <td>
            <tr >
                <td style={{width:100}}>Leaving from {props.ttable.startpoint} </td>
                <td style={{width:100}}>Arriving at {props.ttable.endpoint}</td>
            </tr>

            <tr >
                <td style={{width:100}}>{props.ttable.startDepartArray.join(" ,  ")}</td>
                <td style={{width:100}}>{props.ttable.startArrivalArray.join(" ,  ")}</td>
            </tr>
        </td>
         <td>
             <tr >
                <td style={{width:100}}>Leaving from {props.ttable.endpoint} </td>
                <td style={{width:100}}>Arriving at {props.ttable.startpoint}</td>
            </tr><tr>
                <td style={{width:100}}>{props.ttable.endDepartArray.join(" ,  ")}</td>
                <td style={{width:100}}>{props.ttable.endArrivalArray.join(" ,  ")}</td>
            </tr>
        </td>
        < td > 
            < Link to = {
                "/ttables/update/" + props.ttable._id} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>
    </tr>
);


export default class TTableList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ttables:[]
        };
    
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/ttables')
            .then(res=>{
                this.setState({
                            ttables: res.data
                });
                
            })
            .catch(function(error){
                console.log(error);
            })
    }
    ttableList(){
        return this.state.ttables.map(function(currentRoute,i){
            return <TTable ttable={currentRoute} key={i}/>
        })
    }

    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>Time Tables List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>tid</th>
                        <th>Route Number</th>
                        <th>Start Point</th>
                        <th>End Point </th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.ttableList()}
                    </tbody>
                    
                </table>
                
            </div>
            </div>
        )
    }
}