import React, {Component} from 'react'
import{Button, Modal, ModalBody, ModalFooter, Form, Input, Label, FormGroup} from 'reactstrap';

import APIURL from '../../helpers/environment'

type EditUserState={
    editRole:string
}

type AcceptedProps ={
    token: string,
    userToEdit:IUsers,
    userEditActiveOff(): void,
    fetchAllUsers(): void

}

interface IUsers{
    id:number,
    firstName: string,
    lastName: string,
    role: string
    }




class UpdateUser extends Component<AcceptedProps, EditUserState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                editRole: this.props.userToEdit.role
            }
            this.editUser = this.editUser.bind(this)
            this.updateRole = this.updateRole.bind(this)
        }
    
        editUser(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch(`${APIURL}/user/admin/update/${this.props.userToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({user: {role:this.state.editRole}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then((res) =>{
            this.props.fetchAllUsers();
            this.props.userEditActiveOff();
        }).catch(err => console.log(err))
    }

    

    updateRole(e:{target:{value:string}}){
        this.setState({
            editRole:e.target.value
        })
    }

render(){
    return (
        <div>
            <Modal isOpen= {true} className="standardFont">
            <h2 className="standardModalHeading">Update Role</h2>
            <ModalBody>
                <Form onSubmit = {(e) => this.editUser(e)}>
                <FormGroup>    
                <Label htmlFor="status" className="petHeading" style={{fontSize:'2em'}}>Role:</Label>
                <Input type="select" name="status" value={this.state.editRole} onChange={(e) => this.updateRole(e)}>
                <option></option>    
                        <option value = "user">user</option>
                        <option value = "admin">admin</option>
                                                </Input>
                </FormGroup>
                <Button type ="submit"className="standardButton">Save Changes</Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button className="standardButton" onClick={()=>this.props.userEditActiveOff()}>Back to Requests</Button>
            </ModalFooter>  

            </Modal>
        </div>
    )

}

}


export default UpdateUser;