import React, {Component} from 'react'
import{Button, Modal, ModalBody, ModalFooter, Form, Input, Label, FormGroup} from 'reactstrap';

import APIURL from '../../helpers/environment'

type EditPetRequestState={
    editStatus:string,
    editWayToContact:string,
    editComments:string
}

type AcceptedProps ={
    token: string,
    myRequestToEdit:IRequests,
    myRequestEditActiveOff(): void,
    fetchMyRequests(): void

}
interface IRequests{
    id:number,
    status: string,
    wayToContact: string,
    comments: string,
    pet: IPets
    } 

interface IPets{
    id:number,
    petName:string,
    petType: string,
}



class UpdateRequest extends Component<AcceptedProps, EditPetRequestState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                editStatus: this.props.myRequestToEdit.status,
                editWayToContact: this.props.myRequestToEdit.wayToContact,
                editComments: this.props.myRequestToEdit.comments
            }
            this.editMyRequest = this.editMyRequest.bind(this)
            this.updateStatus = this.updateStatus.bind(this)
            this.updateWayToContact = this.updateWayToContact.bind(this)
            this.updateComments = this.updateComments.bind(this)
        }
    
        editMyRequest(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch(`${APIURL}/request/update/${this.props.myRequestToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({request: {
                status:this.state.editStatus,
                wayToContact:this.state.editWayToContact,
                comments: this.state.editComments
            }}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then((res) =>{
            this.props.fetchMyRequests();
            this.props.myRequestEditActiveOff();
        }).catch(err => console.log(err))
    }

    

    updateStatus(e:{target:{value:string}}){
        this.setState({
            editStatus:e.target.value
        })
    }
    updateWayToContact(e:{target:{value:string}}){
        this.setState({
            editWayToContact:e.target.value
        })
    }
    updateComments(e:{target:{value:string}}){
        this.setState({
            editComments:e.target.value
        })
    }

render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">Update Request</h2>
            <ModalBody>
                <Form onSubmit = {(e) => this.editMyRequest(e)}>
                <FormGroup>    
                <Label htmlFor="status" className="petHeading" style={{fontSize:'2em'}}>Status:</Label>
                <Input type="select" name="status" value={this.state.editStatus} onChange={(e) => this.updateStatus(e)}>
                <option></option>    
                        <option value = "Open">Open</option>
                        <option value = "Scheduled">Scheduled</option>
                        <option value = "Closed">Closed</option>
                        <option value = "Declined">Declined</option>
                        </Input>
                </FormGroup>
                <FormGroup>
                        <Label htmlFor="wayToContact" className="petHeading"style={{fontSize:'2em', fontFamily:"'Luckiest Guy', cursive"}}>Best Way to Contact:</Label>
                        <Input name="wayToContact" value={this.state.editWayToContact} onChange={(e) => this.updateWayToContact(e)} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comments" className="petHeading"style={{fontSize:'2em'}}>Comments:</Label>
                        <p className="standardFont">Please share schedule availability and any additional information for the pet owener.</p>
                        <Input type="textarea" name="comments" value={this.state.editComments} onChange={(e) => this.updateComments(e)} required/>
                        </FormGroup> 
                <Button type ="submit"className="standardButton">Save Changes</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button className="standardButton" onClick={()=>this.props.myRequestEditActiveOff()}>Back to Requests</Button>
            </ModalFooter>  

            </Modal>
        </div>
    )

}

}


export default UpdateRequest;