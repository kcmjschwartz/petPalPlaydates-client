import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment'
import MyPetsRequestList from './MyPetsRequests'
import UpdateMyPetsRequest from './OwnerUpdateRequestStatus'


type MyPetsRequestsState={
    myPets: IPets[], 
    myPetsRequestEditActive: boolean,
    myPetsRequestToEdit: IRequests,
    
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
    requests: IRequests[]
    }

interface IRequests{
    id:number,
    petId:number,
    status: string,
    wayToContact: string,
    comments: string,
    user: IUsers
}

interface IUsers{
    id:number,
    firstName: string,
    lastName: string,
    role: string
    }

    type AcceptedProps ={
    token: string,
    
}

class MyPetsRequestsIndex extends Component<AcceptedProps, MyPetsRequestsState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            myPets:[],
            myPetsRequestEditActive: false,
            myPetsRequestToEdit: {
                id:0,
                petId:0,
                status: '',
                wayToContact: '',
                comments: '',
                user: {
                    id:0,
                    firstName:'',
                    lastName:'',
                    role:'',

                }
            },
            
        }
        this.fetchMyPetsRequests = this.fetchMyPetsRequests.bind(this)
        this.myPetsRequestEditActiveOff = this.myPetsRequestEditActiveOff.bind(this)
        this.myPetsRequestEditActiveOn = this.myPetsRequestEditActiveOn.bind(this)
        this.editMyPetsRequest = this.editMyPetsRequest.bind(this)
        
    }

    fetchMyPetsRequests(){
        fetch(`${APIURL}/pet/myPets/requestInfo/`,{
            method:'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then (res => res.json())
        .then (result =>{
           
            this.setState({
                myPets:result                
            }, () =>{console.log(this.state.myPets)})
            }).catch(err => console.log (err))
    }

    componentDidMount(){
        this.fetchMyPetsRequests()
    }

    myPetsRequestEditActiveOn(){
        this.setState({
            myPetsRequestEditActive: true
        })
    }
    
    
    myPetsRequestEditActiveOff(){
        this.setState({
            myPetsRequestEditActive: false
        })
    }

    editMyPetsRequest(request:IRequests){
        this.setState({
            myPetsRequestToEdit: request
        })
    }


render(){
    return (
        <div style={{marginTop:"75px"}}>
            
                <h1 className="standardHeadingFont">Requests for My Pets</h1>
                
                {this.state.myPets.length === 0? <h4 className="standardFont">No Requests to Display</h4>:
                <div>
                <MyPetsRequestList myPetList={this.state.myPets} editMyPetsRequest = {this.editMyPetsRequest} myPetsRequestEditActiveOn ={this.myPetsRequestEditActiveOn} token = {this.props.token} fetchMyPetsRequests={this.fetchMyPetsRequests}/>

                {this.state.myPetsRequestEditActive?<UpdateMyPetsRequest myPetsRequestEditActiveOff={this.myPetsRequestEditActiveOff} token = {this.props.token} myPetsRequestToEdit={this.state.myPetsRequestToEdit} fetchMyPetsRequests={this.fetchMyPetsRequests}/>:<></>}
                </div>}
        </div>

    );
    }
}

export default MyPetsRequestsIndex;