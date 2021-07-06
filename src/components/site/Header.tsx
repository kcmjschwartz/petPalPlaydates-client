import React, {Component} from 'react';
import Register from '../user/Register'
import Login from '../user/Login'


type HeaderState = {
    registerActive: boolean,
    loginActive: boolean
}

type AcceptedProps ={
    updateToken(newToken:string, newRole:string): void
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
        <div>
        <header>
            <h1>Pet-Pal PlayDates</h1>
            <button onClick={() =>this.registerActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.registerActive?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken}/>:<></>}Get Started!</button>
            <button onClick={() =>this.loginActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.loginActive?<Login activeLoginOff={this.loginActiveOff} updateToken = {this.props.updateToken}/>:<></>}Login</button>
        </header>
        </div>
    );

}

 }
export default Header;