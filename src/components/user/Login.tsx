import React,{ Component } from 'react';
import{Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../../helpers/environment'

type LoginState={
    email: string,
    password: string  
}

type AcceptedProps={
    updateToken(newToken:string, newRole:string): void,
    activeLoginOff(): void
    }

    export default class Login extends Component<AcceptedProps,LoginState>{
        constructor(props:AcceptedProps){
            super(props);
            this.state = {
                email:'',
                password:''
                
            }
            this.emailUpdate = this.emailUpdate.bind(this)
            this.passwordUpdate = this.passwordUpdate.bind(this)
          
    }
        emailUpdate(e:{target:{value:string}}){
            this.setState({
                email: e.target.value
            })}
    
        passwordUpdate(e:{target:{value:string}}){
            this.setState({
                password: e.target.value
            })}


        loginUser(e:React.FormEvent<HTMLFormElement>){
            e.preventDefault();
            let url = `${APIURL}/user/login`
            fetch(url,{
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        email: this.state.email,
                        password: this.state.password
                    }}), 
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            })
            .then((response) => response.json())
            .then((result) =>{
                console.log(result);
                this.props.updateToken(result.sessionToken, result.user.role);
                
            }).then(()=>this.props.activeLoginOff())
            .catch(err => console.log(err));
        }
    
       
        
        
        render(){
            return(
                <div>
                <Modal isOpen= {true} className="standardFont">
                    {/* <ModalHeader className="standardModalHeading" cssModule={{'modal-title': 'w-100 text-center', 'modal-title-color': '#3E239E'}}>Login</ModalHeader> */}
                    <h2 className="standardModalHeading">Login</h2>
                    
                    <ModalBody>
                        <Form onSubmit={e=> this.loginUser(e)}>
                        
                            <FormGroup>
                                <Label htmlFor="email">Email:</Label>
                                <Input name="email" value={this.state.email} onChange={(e) => this.emailUpdate(e)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password:</Label>
                                <Input name="password" value={this.state.password} onChange={(e) => this.passwordUpdate(e)}/>
                            </FormGroup>
                            <Button className="standardButton" type="submit">Submit</Button>
                          </Form>
                    </ModalBody>
                    <ModalFooter>
                       <Button className="standardButton" onClick={()=>this.props.activeLoginOff()}>Cancel</Button>
                    </ModalFooter>
                </Modal> 
                </div> 
                
            )
        }
        
        }


