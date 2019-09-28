import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';



const  Bus =props=>(



    <tr>
        <td>{props.bus.bid}</td>
        <td>{props.bus.busRegNo}</td>
        <td>{props.bus.busNo}</td>
        <td>{props.bus.noOfSeats}</td>
        <td>{props.bus.oid}</td>
        < td > 
            < Link to = {
                "/buses/update/" + props.bus._id + '/' + props.bus.bid + ''} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>

    </tr>

);

export default class BusList extends Component{

    constructor(props) {
        super(props);
        this.state = {buses:[]};
    }
    componentDidMount(){


        axios.get('http://localhost:3001/api/buses')
            .then(res=>{
                this.setState({buses:res.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    busList(){
        return this.state.buses.map(function(currentBus,i){
            return <Bus 
                bus={currentBus}
                key={i}/>
        })
    }


    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>Bus List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>bid</th>
                        <th>Reg No </th>
                        <th>Bus No</th>
                        <th>No of Seats</th>
                        <th>Owner id</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.busList()}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}