import React, {Component} from 'react';
import Register from '../user/Register'


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
        registerActive: true
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
            <button onClick={() =>this.registerActiveOn()}>{this.state.registerActive===true?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken}/>:<></>}Get Started!</button>
            {/* <button onClick={() =>this.loginActiveOn()}>{this.state.loginActive===true?<Login activeOff={this.loginActiveOff} updatedToken = {this.props.updateToken}/>:<></>}Login</button> */}
        </header>
        </div>
    );

}

 }
export default Header;