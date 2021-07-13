import React,{ Component } from 'react';
import{Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';

import APIURL from '../../helpers/environment'

type RegisterState={
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    city: string
}

type AcceptedProps={
    updateToken(newToken:string, newRole:string): void,
    activeOff(): void,
    }
    

export default class Register extends Component<AcceptedProps,RegisterState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            city:''
        }
        this.emailUpdate = this.emailUpdate.bind(this)
        this.passwordUpdate = this.passwordUpdate.bind(this)
        this.firstNameUpdate = this.firstNameUpdate.bind(this)
        this.lastNameUpdate = this.lastNameUpdate.bind(this)
        this.cityUpdate = this.cityUpdate.bind(this)

}
    emailUpdate(e:{target:{value:string}}){
        this.setState({
            email: e.target.value
        })}

    passwordUpdate(e:{target:{value:string}}){
        this.setState({
            password: e.target.value
        })}

    firstNameUpdate(e:{target:{value:string}}){
        this.setState({
            firstName: e.target.value
        })}


    lastNameUpdate(e:{target:{value:string}}){
        this.setState({
            lastName: e.target.value
        })}

    cityUpdate(e:{target:{value:string}}){
        this.setState({
            city: e.target.value
        })}

    registerUser(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let url = `${APIURL}/user/register`
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    city: this.state.city
                }}), 
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then((response) => response.json())
        .then((result) =>{
            // console.log(result);
            this.props.updateToken(result.sessionToken, result.user.role);
            
        }).then(()=>this.props.activeOff())
        .catch(err => console.log(err));
    }




render(){
    return(
        <Modal isOpen= {true} className="standardFont">
            {/* <ModalHeader>Register</ModalHeader> */}
            <h2 className="standardModalHeading">Register</h2>
            <ModalBody>
                <Form onSubmit={e=> this.registerUser(e)}>
                    <FormGroup>
                        <Label htmlFor="firstName">First Name:</Label>
                        <Input name="firstName" value={this.state.firstName} onChange={(e) => this.firstNameUpdate(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="lastName">Last Name:</Label>
                        <Input name="lastName" value={this.state.lastName} onChange={(e) => this.lastNameUpdate(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="city">City:</Label>
                        <Input name="city" value={this.state.city} onChange={(e) => this.cityUpdate(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input name="email" type="email" value={this.state.email} onChange={(e) => this.emailUpdate(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password:</Label>
                        <Input name="password" type="password" value={this.state.password} onChange={(e) => this.passwordUpdate(e)} required/>
                    </FormGroup>
                    <Button className="standardButton" type="submit">Submit</Button>
                    
                </Form>
            </ModalBody>
            <ModalFooter>
            <Button  className="standardButton" onClick={()=>this.props.activeOff()}>Cancel</Button>
            </ModalFooter>
        </Modal>  
        
    )
}

}