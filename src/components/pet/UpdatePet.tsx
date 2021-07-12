import React, {Component} from 'react'
import{Button, Modal, ModalBody, ModalFooter, Form, Input, Label, FormGroup} from 'reactstrap';
import dogIcon from '../../assets/6366326-256.png'
import catIcon from '../../assets/3204629-256.png'
import smallPetIcon from '../../assets/3406425-256.png'
import birdIcon from '../../assets/3406428-256.png'
import reptileIcon from '../../assets/5360428-256.png'
import APIURL from '../../helpers/environment'

type EditPetState={
    editDescription:string
}

type AcceptedProps ={
    token: string,
    myPetToEdit:IPets,
    myPetEditActiveOff(): void,
    fetchMyPets(): void

}

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
     }




class UpdatePet extends Component<AcceptedProps, EditPetState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                editDescription: this.props.myPetToEdit.description
            }
            this.editMyPet = this.editMyPet.bind(this)
            this.updateDescription = this.updateDescription.bind(this)
        }
    
    editMyPet(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch(`${APIURL}/pet/update/${this.props.myPetToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({pet: {description:this.state.editDescription}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then((res) =>{
            this.props.fetchMyPets();
            this.props.myPetEditActiveOff();
        }).catch(err => console.log(err))
    }

    

    updateDescription(e:{target:{value:string}}){
        this.setState({
            editDescription:e.target.value
        })
    }

render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">{this.props.myPetToEdit.petName}</h2>
            <ModalBody>
                
                <img src={this.props.myPetToEdit.petType==='Dog'? `${dogIcon}`:this.props.myPetToEdit.petType==='Cat'?`${catIcon}`:this.props.myPetToEdit.petType==='Bird'? `${birdIcon}`:this.props.myPetToEdit.petType==='Reptile'? `${reptileIcon}`: this.props.myPetToEdit.petType==='Small Pet'?`${smallPetIcon}`: '...'} className="standardIcon" alt="..."/>
                <br/>
                <p className="standardFont">{this.props.myPetToEdit.petType}</p>
                
                <Form onSubmit = {(e) => this.editMyPet(e)}>
                <FormGroup>    
                <Label htmlFor="description" className="petHeading" style={{fontSize:'2em'}}>About:</Label>
                <Input type="textarea" name="description" value={this.state.editDescription} onChange={(e) => this.updateDescription(e)}/>
                </FormGroup>
                <Button type ="submit"className="standardButton">Save Changes</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button className="standardButton" onClick={()=>this.props.myPetEditActiveOff()}>Back to My Pets</Button>
            </ModalFooter>  

            </Modal>
        </div>
    )

}

}


export default UpdatePet


