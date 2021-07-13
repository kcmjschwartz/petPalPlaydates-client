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
    myRequestEditActiveOn(): void,
    myRequestList:IRequests[],
    editMyRequest(request:IRequests):void
    fetchMyRequests():void
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

class MyRequestList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);

        this.myRequestMapper=this.myRequestMapper.bind(this)
        this.deleteMyRequest= this.deleteMyRequest.bind(this)
    }

    
        deleteMyRequest(request:IRequests){
            fetch(`${APIURL}/request/delete/myRequest/${request.id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization': this.props.token
                })
            })
            .then(() => this.props.fetchMyRequests())
        }



myRequestMapper(){ 
    return this.props.myRequestList.map((request:IRequests, index)=>
            {
                return( 
                    <>
                    <tr key={index}>
                        <td><img src={request.pet.petType==='Dog'? `${dogIcon}`:request.pet.petType==='Cat'?`${catIcon}`:request.pet.petType==='Bird'? `${birdIcon}`:request.pet.petType==='Reptile'? `${reptileIcon}`: request.pet.petType==='Small Pet'?`${smallPetIcon}`: '...'} style={{height:'50px',width:'50px'}} alt="Pet"/></td>
                        <td><h4 className="petHeading">{request.pet.petName}</h4></td>
                        <td><h6 className="standardFont">{request.status}</h6></td>
                        <td><p className="standardFont">{request.wayToContact}</p></td>
                        <td><p className="standardFont">{request.comments}</p></td>
                        
                        <td><button className="standardButton" onClick={()=>{this.props.myRequestEditActiveOn(); this.props.editMyRequest(request)}}>Update Request</button></td>
                        
                        <td><button className="standardButton" onClick={()=> {this.deleteMyRequest(request)}}> Delete</button></td>
                        
                    </tr>
                    </>
        )
        
    }
    
    )
}

render(){
    return(
        <>
        {this.myRequestMapper()}
        </>
    )
}
}
export default MyRequestList;