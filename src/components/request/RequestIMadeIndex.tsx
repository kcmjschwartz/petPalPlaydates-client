import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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

class MyPetsIndex extends Component<AcceptedProps, RequestsState>{
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

                {this.state.myRequests.length===0 ? <h3 className = "standardFont">No Requests to Display.</h3>: null}

                <MyRequestList myRequestList={this.state.myRequests} editMyRequest = {this.editMyRequest} myRequestEditActiveOn ={this.myRequestEditActiveOn} token = {this.props.token} fetchMyRequests={this.fetchMyRequests}/>

                {this.state.myRequestEditActive?<UpdateRequest myRequestEditActiveOff={this.myRequestEditActiveOff} token = {this.props.token} myRequestToEdit={this.state.myRequestToEdit} fetchMyRequests={this.fetchMyRequests}/>:<></>}
        </div>
            
        </div>

    );
    }
}

export default MyPetsIndex;