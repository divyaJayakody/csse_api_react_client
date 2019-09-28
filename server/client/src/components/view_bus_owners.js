import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from'axios';



const  BusOwner =props=>(



    <tr>
        <td>{props.owner.oid}</td>
        <td>{props.owner.name}</td>
        <td>{props.owner.address}</td>
        <td>{props.owner.telephone}</td>
        <td>{props.owner.noofbuses}</td>
        < td > 
            < Link to = {
                "/owners/update/" + props.owner._id + '/' + props.owner.oid + ''} >
                <button   className="btn btn-primary" style={{marginLeft:25,width:75}}>Manage
                </button>
            </Link>
        </td>

    </tr>

);

export default class BusOwnerList extends Component{

    constructor(props) {
        super(props);
        this.state = {owners:[]};
    }
    componentDidMount(){


        axios.get('http://localhost:3001/api/owners')
            .then(res=>{
                this.setState({owners:res.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    ownerList(){
        return this.state.owners.map(function(currentBusOwner,i){
            return <BusOwner 
                owner={currentBusOwner}
                key={i}/>
        })
    }


    render(){
        return(
            <div className="tableList1" style={{marginTop :50,paddingTop:25}}>
            <div className="tableList">
                <h3>BusOwner List</h3>
                <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>oid</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Telephone</th>
                        <th>No of Buses</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.ownerList()}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}