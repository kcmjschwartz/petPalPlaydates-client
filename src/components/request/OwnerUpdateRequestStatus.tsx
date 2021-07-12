import React, {Component} from 'react'
import{Button, Modal, ModalBody, ModalFooter, Form, Input, Label, FormGroup} from 'reactstrap';

import APIURL from '../../helpers/environment'

type EditPetRequestState={
    editStatus:string
}

type AcceptedProps ={
    token: string,
    myPetsRequestToEdit:IRequests,
    myPetsRequestEditActiveOff(): void,
    fetchMyPetsRequests(): void

}

interface IRequests{
    id:number,
    petId:number,
    status: string,
    wayToContact: string,
    comments: string
}




class UpdateMyPetsRequest extends Component<AcceptedProps, EditPetRequestState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                editStatus: this.props.myPetsRequestToEdit.status
            }
            this.editMyPetsRequest = this.editMyPetsRequest.bind(this)
            this.updateStatus = this.updateStatus.bind(this)
        }
    
        editMyPetsRequest(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch(`${APIURL}/request/update/myPet/${this.props.myPetsRequestToEdit.petId}/thisrequest/${this.props.myPetsRequestToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({request: {status:this.state.editStatus}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then((res) =>{
            this.props.fetchMyPetsRequests();
            this.props.myPetsRequestEditActiveOff();
        }).catch(err => console.log(err))
    }

    

    updateStatus(e:{target:{value:string}}){
        this.setState({
            editStatus:e.target.value
        })
    }

render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">Update Status</h2>
            <ModalBody>
                <Form onSubmit = {(e) => this.editMyPetsRequest(e)}>
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
                <Button type ="submit"className="standardButton">Save Changes</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button className="standardButton" onClick={()=>this.props.myPetsRequestEditActiveOff()}>Back to Requests</Button>
            </ModalFooter>  

            </Modal>
        </div>
    )

}

}


export default UpdateMyPetsRequest;
