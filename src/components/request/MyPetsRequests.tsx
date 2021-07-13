import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';






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
        user: IUsers
    }

    interface IUsers{
        id:number,
        firstName: string,
        lastName: string,
        role: string
        }

class MyPetsRequestList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);
        
        this.myRequestPetMapper=this.myRequestPetMapper.bind(this)
        
    }

    
     



myRequestPetMapper(){ 
    return this.props.myPetList.map((pet: IPets, index)=>
            {
                return( 
                   
                    <div key={index}>                
                        <div >
                            <h4 className="petHeading" style={{fontSize:"3em", color: '#3E239E'}}>{pet.petName}</h4>
                            <div className = "petDisplay">                                        
                                {pet.requests.length === 0? <h4 className="standardFont">No Requests to Display</h4>: <Table>
                                        <thead>
                                            <tr>
                                                <th><h4 className="petHeading">From</h4></th>
                                                <th><h4 className="petHeading">Status</h4></th>
                                                <th><h4 className="petHeading">Way To Contact</h4></th>
                                                <th><h4 className="petHeading">Comments</h4></th>
                                                <th><h4 className="petHeading">Update</h4></th>
                                            </tr>
                                        </thead>
                                            <tbody> 
                                    {pet.requests.map((request:IRequests, index)=>
                                {
                                    return(
                                        <tr key={index}>
                                        <td><h6 className="standardFont">{request.user.firstName} {request.user.lastName}</h6></td>
                                        <td><h6 className="standardFont">{request.status}</h6></td>
                                        
                                        <td><h6 className="standardFont">{request.wayToContact}</h6></td>
                                        
                                        <td><p className="standardFont">{request.comments}</p></td>
                                        <td><button className="btn standardButton" onClick={()=>{this.props.myPetsRequestEditActiveOn(); this.props.editMyPetsRequest(request)}}style ={{width:'150px'}}>Update Status</button></td>
                                        </tr>
                                    )
                                }
                                )}
                                            </tbody>
                                </Table>
                                }  
                        
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
export default MyPetsRequestList;