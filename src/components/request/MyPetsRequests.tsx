import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';







type AcceptedProps ={
    token: string,
    myPetsRequestEditActiveOn(): void,
    myPetList:IPets[],
    editMyPetsRequest(request:IRequests):void
    fetchMyPetsRequests():void
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
        comments: string
    }

class MyPetList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);{

        }
        this.myRequestPetMapper=this.myRequestPetMapper.bind(this)
        
    }

    
     



myRequestPetMapper(){ 
    return this.props.myPetList.map((pet: IPets, index)=>
            {
                return( /*How I want to display my pets*/
                    <div key={index}>                
                        <div >
                            <h4 className="petHeading" style={{fontSize:"3em"}}>{pet.petName}</h4>
                            <div className = "petDisplay">                                        
                                {pet.requests.length === 0? <h4 className="standardFont">No Requests to Display</h4>: pet.requests.map((request:IRequests, index)=>
                                {
                                    return(
                                        <div className="card" style={{width:'400px' }} key={index}>
                                        <h4 className="petHeading">Status:</h4><h5 className="standardFont">{request.status}</h5>
                                        
                                        <h4 className="petHeading">Way To Contact:</h4><h5 className="standardFont">{request.wayToContact}</h5>
                                        <h4 className="petHeading">Comments:</h4>
                                        <p className="standardFont">{request.comments}</p>
                                        <button className="btn standardButton" onClick={()=>{this.props.myPetsRequestEditActiveOn(); this.props.editMyPetsRequest(request)}}style ={{width:'150px'}}>Update Status</button>
                                        </div>
                                    )
                                }
                                )}

                                
                                </div>
                        
                        </div>
                        

                    </div>
                    
        )
        
    }
    
    )
}

render(){
    return(
        <>
        {this.myRequestPetMapper()}
        </>
    )
}
}
export default MyPetList;