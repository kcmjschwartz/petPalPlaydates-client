import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'
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
        super(props);{

        }
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
                    <div className="card" style={{width:'30em' }} key={index}>
                        
                        <img src={request.pet.petType==='Dog'? `${dogIcon}`:request.pet.petType==='Cat'?`${catIcon}`:'...'} className="standardIcon" alt="Pet"/>
                        
                        <div className="card-body">
                            <h4 className="petHeading">{request.pet.petName}</h4>
                            <h4 className="petHeading">Status:</h4><h5 className="standardFont">{request.status}</h5>
                            <h4 className="petHeading">Way To Contact:</h4><h5 className="standardFont">{request.wayToContact}</h5>
                            <h4 className="petHeading">Comments:</h4>
                            <p className="standardFont">{request.comments}</p>
                            
                            <button className="standardButton" onClick={()=>{this.props.myRequestEditActiveOn(); this.props.editMyRequest(request)}}>Update Request</button>
                            <br/><br/>
                            <button className="standardButton" onClick={()=> {this.deleteMyRequest(request)}}> Delete</button>
                        </div>
                    </div>
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