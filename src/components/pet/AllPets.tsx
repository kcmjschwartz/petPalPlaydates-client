import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'



type AllPetsState={
    pets: IPets[]

}

interface IPets{
   petName:string,
   petType: string,
   description: string
    }




type AcceptedProps ={
    token: string | null,
    
}



class AllPets extends Component<AcceptedProps, AllPetsState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            pets:[]
        }
        this.fetchAllPets = this.fetchAllPets.bind(this)
    }

    fetchAllPets(){
        fetch('http://localhost:4000/pet/allpets',{
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



render(){
    return (
        <div>
        <h1 className="standardHeadingFont">Meet The PetPals</h1>
            <div className="petDisplay">
           {this.state.pets.map((pet: IPets)=>
           {
               return(
                
                <div className="card" style={{width:'15em' }}>
                    <img src={pet.petType=='Dog'? `${dogIcon}`:pet.petType=='Cat'?`${catIcon}`:'...'} className="standardIcon" alt="..."/>
                    <div className="card-body" >
                        <h4 className="petHeading">{pet.petName}</h4>
                        <p className="standardFont">{pet.petType}</p>
                        <button className="standardButton">Meet {pet.petName}</button>
                    </div>
                 </div>

               
               )
               
           }
           
           )}
        </div>
            
        </div>

    );
    }
}

export default AllPets;