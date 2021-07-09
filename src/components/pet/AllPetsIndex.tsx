import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewPet from './ViewPet'
import APIURL from '../../helpers/environment'
import PetList from './AllPetCards'

type AllPetsState={
    pets: IPets[], 
    petViewActive: boolean
    petToView:IPets
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
    }

    type AcceptedProps ={
    token: string | null,
    
}

class AllPetsIndex extends Component<AcceptedProps, AllPetsState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            pets:[],
            petViewActive: false,
            petToView: {
                id:0,
                petName:'',
                petType: '',
                description: '',
            }
        }
        this.fetchAllPets = this.fetchAllPets.bind(this)
        this.petViewActiveOff = this.petViewActiveOff.bind(this)
        this.petViewActiveOn = this.petViewActiveOn.bind(this)
        this.viewThisPet = this.viewThisPet.bind(this)
    }

    fetchAllPets(){
        fetch(`${APIURL}/pet/allpets`,{
            method:'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json'
            })
        }).then (res => res.json())
        .then (result =>{
           
            this.setState({
                pets:result                
            }, () =>{console.log(this.state.pets)})
            }).catch(err => console.log (err))
    }

    componentDidMount(){
        this.fetchAllPets()
    }

    petViewActiveOn(){
        this.setState({
            petViewActive: true
        })
    }
    
    
    petViewActiveOff(){
        this.setState({
            petViewActive: false
        })
    }

    viewThisPet(pet:IPets){
        this.setState({
            petToView: pet
        })
    }

render(){
    return (
        <div>
        <h1 className="standardHeadingFont">Meet The PetPals</h1>
             <div className="petDisplay">
                 <PetList petList={this.state.pets} viewThisPet = {this.viewThisPet} petViewActiveOn ={this.petViewActiveOn} token = {this.props.token}/>

                 {this.state.petViewActive?<ViewPet petViewActiveOff={this.petViewActiveOff} token = {this.props.token} petToView={this.state.petToView}/>:<></>}
        </div>
            
        </div>

    );
    }
}

export default AllPetsIndex;

