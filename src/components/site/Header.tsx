import React, {Component} from 'react';
import Register from '../user/Register';
import Login from '../user/Login';
import {Navbar, Button} from 'reactstrap'



type HeaderState = {
    registerActive: boolean,
    loginActive: boolean
}

type AcceptedProps ={
    updateToken(newToken:string, newRole:string): void,
    clearToken():void
    }


class Header extends Component<AcceptedProps, HeaderState>{
        constructor(props:AcceptedProps){
            super(props);
                this.state={
                    registerActive:false,
                    loginActive:false
                }
                this.registerActiveOff = this.registerActiveOff.bind(this)
                this.loginActiveOff = this.loginActiveOff.bind(this)
            }
//Makes Register Modal appear
registerActiveOn(){
    this.setState({
        registerActive: true
    })
}
//Passed to Register Modal to close it on Submit
registerActiveOff(){
    this.setState({
        registerActive: false
    })
}
//Makes Login Modal appear
loginActiveOn(){
    this.setState({
        loginActive: true
    })
}
//Passed to Login Modal to close it on Submit
loginActiveOff(){
    this.setState({
        loginActive: false
    })
}


render(){
   return (
    <div >
        <Navbar className= "header">
            <div>
                <h2>PetPal PlayDates</h2>
            </div>   
            <div>
            <Button className="headerButton" onClick={() =>this.registerActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.registerActive?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken} />:<></>}Get Started!</Button>
            
            <Button className="headerButton" onClick={() =>this.loginActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.loginActive?<Login activeLoginOff={this.loginActiveOff} updateToken = {this.props.updateToken}/>:<></>}Login</Button>
            
            <Button onClick={()=>this.props.clearToken()} className="headerButton"style= {{visibility: localStorage.getItem('token') ? "visible" : "hidden"}}>Logout</Button>
            
            </div>
           
        </Navbar>
    </div>  
    );

}

 }
export default Header;