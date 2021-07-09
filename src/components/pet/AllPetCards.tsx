import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'






type AcceptedProps ={
    token: string | null,
    petViewActiveOn(): void,
    petList:IPets[],
    viewThisPet(pet:IPets):void
}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
     }

class PetList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);{

        }
        this.petMapper=this.petMapper.bind(this)
    }

petMapper(){ 

    return this.props.petList.map((pet: IPets, index)=>
            {
                return( 
                    <div className="card" style={{width:'15em' }} key={index}>
                        
                        <img src={pet.petType==='Dog'? `${dogIcon}`:pet.petType==='Cat'?`${catIcon}`:'...'} className="standardIcon" alt="Pet"/>
                        
                        <div className="card-body">
                            <h4 className="petHeading">{pet.petName}</h4>
                            <p className="standardFont">{pet.petType}</p>
                            <button className="standardButton" onClick={()=>{this.props.petViewActiveOn(); this.props.viewThisPet(pet)}}>Meet {pet.petName}</button>
                        </div>
                    </div>
        )
        
    }
    
    )
}

render(){
    return(
        <>
        {this.petMapper()}
        </>
    )
}
}
export default PetList;