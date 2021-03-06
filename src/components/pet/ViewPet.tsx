import React, {Component} from 'react'
import{Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'
import smallPetIcon from '../../assets/3406425-256.png'
import birdIcon from '../../assets/3406428-256.png'
import reptileIcon from '../../assets/5360428-256.png'
import CreateRequest from '../request/CreateRequest'

type RequestState={
    myRequestAdd:boolean
}

type AcceptedProps ={
    token: string,
    petToView:IPets,
    petViewActiveOff(): void

}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
     }




class PetView extends Component<AcceptedProps, RequestState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            myRequestAdd: false
        }
        this.myRequestAddActiveOn = this.myRequestAddActiveOn.bind(this)
        this.myRequestAddActiveOff = this.myRequestAddActiveOff.bind(this)
        }
        myRequestAddActiveOn(){
            this.setState({
                myRequestAdd: true
            })
        }
        
        
        myRequestAddActiveOff(){
            this.setState({
                myRequestAdd: false
            })
        }


render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">{this.props.petToView.petName}</h2>
            <ModalBody>
            <img src={this.props.petToView.petType==='Dog'? `${dogIcon}`:this.props.petToView.petType==='Cat'?`${catIcon}`:this.props.petToView.petType==='Bird'? `${birdIcon}`:this.props.petToView.petType==='Reptile'? `${reptileIcon}`: this.props.petToView.petType==='Small Pet'?`${smallPetIcon}`: '...'} className="standardIcon" style={{height:"300px", width: "300px", marginLeft:"90px"}}alt="..."/>
            <br/>
           
            <h4 className="petHeading">About:</h4>
            <p className="standardFont">{this.props.petToView.description}</p>
            <Button className="standardButton"onClick={()=>{this.myRequestAddActiveOn()}}>Request a PlayDate</Button>
            </ModalBody>
            <ModalFooter>
                       <Button className="standardButton" onClick={()=>this.props.petViewActiveOff()}>Back to PetPals</Button>
                    </ModalFooter>  

            </Modal>

            {this.state.myRequestAdd?<CreateRequest myRequestAddActiveOff={this.myRequestAddActiveOff} token = {this.props.token} petToRequest={this.props.petToView}/>:<></>}
        </div>
    )

}

}


export default PetView