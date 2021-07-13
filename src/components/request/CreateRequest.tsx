import React,{Component} from 'react';
import{Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';

import APIURL from '../../helpers/environment'

type RequestPetState={
    status:string,
    wayToContact: string,
    comments: string
}

type AcceptedProps={
    token:string,
    myRequestAddActiveOff(): void,
    petToRequest:IPets
    }

interface IPets{
    id:number,
    petName:string,
    petType: string,
    description: string,
        }    


export default class CreateRequest extends Component<AcceptedProps,RequestPetState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state = {
            status:'Open',
            wayToContact: '',
            comments: ''

        }
        this.statusUpdate = this.statusUpdate.bind(this)
        this.wayToContactUpdate = this.wayToContactUpdate.bind(this)
        this.commentsUpdate = this.commentsUpdate.bind(this)
        this.createRequest = this.createRequest.bind(this)
     

}
    statusUpdate(e:{target:{value:string}}){
        this.setState({
            status: e.target.value
        })}

    wayToContactUpdate(e:{target:{value:string}}){
        this.setState({
            wayToContact: e.target.value
        })}

    commentsUpdate(e:{target:{value:string}}){
        this.setState({
            comments: e.target.value
        })}


    createRequest(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let url = `${APIURL}/request/create/`
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                request: {
                    status: this.state.status,
                    wayToContact: this.state.wayToContact,
                    comments: this.state.comments,
                    petId: this.props.petToRequest.id,
                    
                }}), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : this.props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
            console.log(result);
                  
        }).then(()=>this.props.myRequestAddActiveOff())
        .catch(err => console.log(err));
    }




render(){
    return(
        <Modal isOpen= {true} className="standardFont">
             <h2 className="standardModalHeading">Request for {this.props.petToRequest.petName}</h2>
            <ModalBody>
                <Form onSubmit={e=> this.createRequest(e)}>
                    <FormGroup>
                        <Label htmlFor="status" className="petHeading"style={{fontSize:'2em', fontFamily:"'Luckiest Guy', cursive"}}>Request Status:</Label>
                        <Input type= "select" name="status" value={this.state.status} onChange={(e) => this.statusUpdate(e)}>
                        <option></option>    
                        <option value = "Open">Open</option>
                        <option value = "Scheduled">Scheduled</option>
                        <option value = "Closed">Closed</option>
                        <option value = "Declined">Declined</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="wayToContact" className="petHeading"style={{fontSize:'2em', fontFamily:"'Luckiest Guy', cursive"}}>Best Way to Contact:</Label>
                        <p className="standardFont">Include email address and/or phone number.</p>
                        <Input name="wayToContact" value={this.state.wayToContact} onChange={(e) => this.wayToContactUpdate(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comments" className="petHeading"style={{fontSize:'2em'}}>Comments:</Label>
                        <p className="standardFont">Please share schedule availability and any additional information for the pet owner.</p>
                        <Input type="textarea" name="comments" value={this.state.comments} onChange={(e) => this.commentsUpdate(e)} required/>
                    </FormGroup>
                    <Button className="standardButton" type="submit">Submit</Button>
                    
                </Form>
            </ModalBody>
            <ModalFooter>
            <Button  className="standardButton" onClick={()=>this.props.myRequestAddActiveOff()}>Cancel</Button>
            </ModalFooter>
        </Modal>  
        
    )
}

}