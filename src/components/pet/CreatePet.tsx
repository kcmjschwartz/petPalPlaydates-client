import React,{ Component, TextareaHTMLAttributes } from 'react';
import{Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';

import APIURL from '../../helpers/environment'

type CreatePetState={
    petName:string,
    petType: string,
    description: string
}

type AcceptedProps={
    token:string,
    myPetAddActiveOff(): void,
    fetchMyPets():void
    }
    

export default class CreatePet extends Component<AcceptedProps,CreatePetState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state = {
            petName:'',
            petType: '',
            description: ''
        }
        this.petNameUpdate = this.petNameUpdate.bind(this)
        this.petTypeUpdate = this.petTypeUpdate.bind(this)
        this.petDescriptionUpdate = this.petDescriptionUpdate.bind(this)
     

}
    petNameUpdate(e:{target:{value:string}}){
        this.setState({
            petName: e.target.value
        })}

    petTypeUpdate(e:{target:{value:string}}){
        this.setState({
            petType: e.target.value
        })}

    petDescriptionUpdate(e:{target:{value:string}}){
        this.setState({
            description: e.target.value
        })}


    createPet(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let url = `${APIURL}/pet/create/`
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                pet: {
                    petName: this.state.petName,
                    petType: this.state.petType,
                    description: this.state.description,
                   
                }}), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : this.props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
            console.log(result);
            this.props.fetchMyPets()        
        }).then(()=>this.props.myPetAddActiveOff())
        .catch(err => console.log(err));
    }




render(){
    return(
        <Modal isOpen= {true} className="standardFont">
            {/* <ModalHeader>Register</ModalHeader> */}
            <h2 className="standardModalHeading">Add My Pet</h2>
            <ModalBody>
                <Form onSubmit={e=> this.createPet(e)}>
                    <FormGroup>
                        <Label htmlFor="petName" style={{fontSize:'2em', fontFamily:"'Luckiest Guy', cursive"}}>Pet Name:</Label>
                        <Input name="petName" value={this.state.petName} onChange={(e) => this.petNameUpdate(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="petType" style={{fontSize:'2em', fontFamily:"'Luckiest Guy', cursive"}}>Pet Type:</Label>
                        <Input type= "select" name="petType" value={this.state.petType} onChange={(e) => this.petTypeUpdate(e)}>
                        <option></option>
                        <option value = "Dog">Dog</option>
                        <option value = "Cat">Cat</option>
                        <option value = "Small Pet">Small Pet</option>
                        <option value = "Reptile">Reptile</option>
                        <option value = "Bird">Bird</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description" className="petHeading"style={{fontSize:'2em'}}>About:</Label>
                        <p className="standardFont">Tell us about your pet! (Ex. age, breed, activity level,favorite toy/treat)</p>
                        <Input type="textarea" name="description" value={this.state.description} onChange={(e) => this.petDescriptionUpdate(e)}/>
                    </FormGroup>
                    <Button className="standardButton" type="submit">Submit</Button>
                    
                </Form>
            </ModalBody>
            <ModalFooter>
            <Button  className="standardButton" onClick={()=>this.props.myPetAddActiveOff()}>Cancel</Button>
            </ModalFooter>
        </Modal>  
        
    )
}

}