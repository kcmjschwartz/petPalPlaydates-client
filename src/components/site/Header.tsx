import React, {Component} from 'react';
import Register from '../user/Register';
import Login from '../user/Login';
import {PageHeader, Button} from 'antd'



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
    <div className="site-page-header-ghost-wrapper">
        <PageHeader
            ghost={true}
            title="Pet-Pal Play Dates"
            extra={[<>
            <Button key = "2" onClick={() =>this.registerActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.registerActive?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken}/>:<></>}Get Started!</Button>
            <Button key = "1"onClick={() =>this.loginActiveOn()}style= {{visibility: localStorage.getItem('token') ? "hidden" : "visible"}}>{this.state.loginActive?<Login activeLoginOff={this.loginActiveOff} updateToken = {this.props.updateToken}/>:<></>}Login</Button>
            </>]}
        >
        </PageHeader>
        </div>  
    );

}

 }
export default Header;