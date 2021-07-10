import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'
import APIURL from '../../helpers/environment'





type AcceptedProps ={
    token: string,
    myPetEditActiveOn(): void,
    myPetList:IPets[],
    editMyPet(pet:IPets):void
    fetchMyPets():void
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
     }

class MyPetList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);{

        }
        this.myPetMapper=this.myPetMapper.bind(this)
        this.deleteMyPet= this.deleteMyPet.bind(this)
    }

    
        deleteMyPet(pet:IPets){
            fetch(`${APIURL}/pet/delete/myPet/${pet.id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization': this.props.token
                })
            })
            .then(() => this.props.fetchMyPets())
        }



myPetMapper(){ 
    return this.props.myPetList.map((pet: IPets, index)=>
            {
                return( /*How I want to display my pets*/
                    <div className="card" style={{width:'25em' }} key={index}>
                        
                        <img src={pet.petType==='Dog'? `${dogIcon}`:pet.petType==='Cat'?`${catIcon}`:'...'} className="standardIcon" alt="Pet"/>
                        
                        <div className="card-body">
                            <h4 className="petHeading">{pet.petName}</h4>
                            <p className="standardFont">{pet.petType}</p>
                            <h4 className="petHeading">About:</h4>
                            <p className="standardFont">{pet.description}</p>
                            <button className="standardButton" onClick={()=>{this.props.myPetEditActiveOn(); this.props.editMyPet(pet)}}>Edit {pet.petName}'s Profile</button>
                            <br/><br/>
                            <button className="standardButton" onClick={()=> {this.deleteMyPet(pet)}}> Delete {pet.petName}</button>
                        </div>
                    </div>
        )
        
    }
    
    )
}

render(){
    return(
        <>
        {this.myPetMapper()}
        </>
    )
}
}
export default MyPetList;