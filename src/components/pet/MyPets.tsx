import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'
import smallPetIcon from '../../assets/3406425-256.png'
import birdIcon from '../../assets/3406428-256.png'
import reptileIcon from '../../assets/5360428-256.png'
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
                return( 
                    <tr key={index}>
                        <td><img src={pet.petType==='Dog'? `${dogIcon}`:pet.petType==='Cat'?`${catIcon}`:pet.petType==='Bird'? `${birdIcon}`:pet.petType==='Reptile'? `${reptileIcon}`: pet.petType==='Small Pet'?`${smallPetIcon}`: '...'} style={{height:'50px',width:'50px'}} alt="Pet"/></td>
                        <td><h4 className="petHeading">{pet.petName}</h4></td>
                        <td><h6 className="standardFont">{pet.petType}</h6></td>
                        <td><p className="standardFont">{pet.description}</p></td>
                        <td><button className="standardButton" onClick={()=>{this.props.myPetEditActiveOn(); this.props.editMyPet(pet)}}>Edit {pet.petName}'s Profile</button></td>
                        <td><button className="standardButton" onClick={()=> {this.deleteMyPet(pet)}}> Delete {pet.petName}</button></td>
                    </tr>
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