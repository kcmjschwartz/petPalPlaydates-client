import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import APIURL from '../../helpers/environment'
import MyRequestList from './RequestsIMade'
import UpdateRequest from './UpdateRequest'


type RequestsState={
    myRequests: IRequests[], 
    myRequestEditActive: boolean,
    myRequestToEdit:IRequests   
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    }

interface IRequests{
        id:number,
        status: string,
        wayToContact: string,
        comments: string,
        pet: IPets
        }    

    type AcceptedProps ={
    token: string,
    
}

class MyRequestsIndex extends Component<AcceptedProps, RequestsState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            myRequests:[],
            myRequestEditActive: false,
            myRequestToEdit: {
                id:0,
                status:'',
                wayToContact: '',
                comments: '',
                pet:{
                    id: 0,
                    petName:'',
                    petType: ''
                }
            },
          
        }
        this.fetchMyRequests = this.fetchMyRequests.bind(this)
        this.myRequestEditActiveOff = this.myRequestEditActiveOff.bind(this)
        this.myRequestEditActiveOn = this.myRequestEditActiveOn.bind(this)
        this.editMyRequest = this.editMyRequest.bind(this)
        
    }

    fetchMyRequests(){
        fetch(`${APIURL}/request/myRequests/`,{
            method:'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then (res => res.json())
        .then (result =>{
           
            this.setState({
                myRequests:result                
            }, () =>{console.log(this.state.myRequests)})
            }).catch(err => console.log (err))
    }

    componentDidMount(){
        this.fetchMyRequests()
    }

    myRequestEditActiveOn(){
        this.setState({
            myRequestEditActive: true
        })
    }
    
    
    myRequestEditActiveOff(){
        this.setState({
            myRequestEditActive: false
        })
    }

    editMyRequest(request: IRequests){
        this.setState({
            myRequestToEdit: request
        })
    }

    

render(){
    return (
        <div>
            
                <h1 className="standardHeadingFont">My Requests</h1>
                <div className="petDisplay">

                {this.state.myRequests.length===0 ? <h3 className = "standardFont">No Requests to Display.</h3>: 
                <Table>
                    <thead>
                        <tr>
                            <th><h4 className="petHeading">Pet</h4></th>
                            <th><h4 className="petHeading">Pet Name</h4></th>
                            <th><h4 className="petHeading">Status</h4></th>
                            <th><h4 className="petHeading">Way To Contact</h4></th>
                            <th><h4 className="petHeading">Comments</h4></th>
                            <th><h4 className="petHeading">Update</h4></th>
                            <th><h4 className="petHeading">Delete</h4></th>
                        </tr>
                    </thead>
                        <tbody>

                <MyRequestList myRequestList={this.state.myRequests} editMyRequest = {this.editMyRequest} myRequestEditActiveOn ={this.myRequestEditActiveOn} token = {this.props.token} fetchMyRequests={this.fetchMyRequests}/>

                {this.state.myRequestEditActive?<UpdateRequest myRequestEditActiveOff={this.myRequestEditActiveOff} token = {this.props.token} myRequestToEdit={this.state.myRequestToEdit} fetchMyRequests={this.fetchMyRequests}/>:<></>}
                </tbody>
                </Table>}
        </div>
            
        </div>

    );
    }
}

export default MyRequestsIndex;