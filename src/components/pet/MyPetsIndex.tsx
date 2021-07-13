import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import APIURL from '../../helpers/environment'
import MyPetList from './MyPets'
import UpdatePet from './UpdatePet'
import CreatePet from './CreatePet'

type AllPetsState={
    myPets: IPets[], 
    myPetEditActive: boolean,
    myPetToEdit:IPets,
    myPetAddActive: boolean
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
    }

    type AcceptedProps ={
    token: string,
    
}

class MyPetsIndex extends Component<AcceptedProps, AllPetsState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            myPets:[],
            myPetEditActive: false,
            myPetToEdit: {
                id:0,
                petName:'',
                petType: '',
                description: '',
            },
            myPetAddActive: false
        }
        this.fetchMyPets = this.fetchMyPets.bind(this)
        this.myPetEditActiveOff = this.myPetEditActiveOff.bind(this)
        this.myPetEditActiveOn = this.myPetEditActiveOn.bind(this)
        this.editMyPet = this.editMyPet.bind(this)
        this.myPetAddActiveOff = this.myPetAddActiveOff.bind(this)
        this.myPetAddActiveOn = this.myPetAddActiveOn.bind(this)
    }

    fetchMyPets(){
        fetch(`${APIURL}/pet/myPets/`,{
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
        this.fetchMyPets()
    }

    myPetEditActiveOn(){
        this.setState({
            myPetEditActive: true
        })
    }
    
    
    myPetEditActiveOff(){
        this.setState({
            myPetEditActive: false
        })
    }

    editMyPet(pet:IPets){
        this.setState({
            myPetToEdit: pet
        })
    }

    myPetAddActiveOn(){
        this.setState({
            myPetAddActive: true
        })
    }
    
    
    myPetAddActiveOff(){
        this.setState({
            myPetAddActive: false
        })
    }

render(){
    return (
        <div style={{marginTop:"75px"}}>
            
                <h1 className="standardHeadingFont">My Pets</h1>
                <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'-30px'}}><button className= "btn btn-lg addPetButton" onClick={() =>this.myPetAddActiveOn()}>{this.state.myPetAddActive ?<CreatePet myPetAddActiveOff={this.myPetAddActiveOff} token= {this.props.token}fetchMyPets={this.fetchMyPets}/>:<></>}Add My Pet</button></div>
                <br/>
                

            
            <div className="petDisplay">

                {this.state.myPets.length===0 ? <h3 className = "standardFont">No Pets to Display</h3>: 
                <Table>
                    <thead>
                        <tr>
                            <th><h4 className="petHeading">Pet</h4></th>
                            <th><h4 className="petHeading">Pet Name</h4></th>
                            <th><h4 className="petHeading">Pet Type</h4></th>
                            <th><h4 className="petHeading">About</h4></th>
                            <th><h4 className="petHeading">Update</h4></th>
                            <th><h4 className="petHeading">Delete</h4></th>
                        </tr>
                    </thead>
                        <tbody>
                <MyPetList myPetList={this.state.myPets} editMyPet = {this.editMyPet} myPetEditActiveOn ={this.myPetEditActiveOn} token = {this.props.token} fetchMyPets={this.fetchMyPets}/>

                {this.state.myPetEditActive?<UpdatePet myPetEditActiveOff={this.myPetEditActiveOff} token = {this.props.token} myPetToEdit={this.state.myPetToEdit} fetchMyPets={this.fetchMyPets}/>:<></>}
                </tbody>
                </Table>}
        </div>
            
        </div>

    );
    }
}

export default MyPetsIndex;