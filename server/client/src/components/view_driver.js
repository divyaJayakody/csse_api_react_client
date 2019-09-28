import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';



const  Driver =props=>(


    <tr>
        <td>{props.driver.did}</td>
        <td>{props.driver.name}</td>
        <td>{props.driver.address}</td>
        <td>{props.driver.age}</td>
        <td>{props.driver.telephone}</td>
        <td>{props.driver.nic}</td>
        <td>{props.driver.license}</td>
        < td > 
            < Link to = {
                "/drivers/update/" + props.driver._id} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>
    </tr>

);

export default class DriverList extends Component{

    constructor(props) {
        super(props);
        this.state = {drivers:[]};
    }
    componentDidMount(){

        axios.get('http://localhost:3001/api/drivers')
            .then(res=>{
                this.setState({drivers:res.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    driverList(){
        return this.state.drivers.map(function(currentDriver,i){
            return <Driver driver={currentDriver} key={i}/>
        })
    }

    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>Driver List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>did</th>
                        <th>Name </th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Telephone</th>
                        <th>Nic</th>
                        <th>License</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.driverList()}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}