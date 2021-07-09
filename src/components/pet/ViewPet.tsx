import React, {Component} from 'react'
import{Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'


type AcceptedProps ={
    token: string | null,
    petToView:IPets,
    petViewActiveOff(): void

}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
     }




class PetView extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);
        
        }

render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">{this.props.petToView.petName}</h2>
            <ModalBody>
            <img src={this.props.petToView.petType=='Dog'? `${dogIcon}`:this.props.petToView.petType=='Cat'?`${catIcon}`:'...'} className="standardIcon" alt="..."/>
            <br/>
            <h4 className="petHeading">About:</h4>
            <p>{this.props.petToView.description}</p>
            <Button className="standardButton" >Request a PlayDate</Button>
            </ModalBody>
            <ModalFooter>
                       <Button className="standardButton" onClick={()=>this.props.petViewActiveOff()}>Back to PetPals</Button>
                    </ModalFooter>  

            </Modal>
        </div>
    )

}

}


export default PetView