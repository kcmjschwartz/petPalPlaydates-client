import React, {Component} from 'react';
import Sitebar from '../site/Navbar';
    import {
        BrowserRouter as Router 
        } from 'react-router-dom';


type AcceptedProps ={
    role:string,
    token: string,
    clearToken():void
}

class LandingPage extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={

        }
    }



render(){
    return (
        <div className = "main">
            <div className = "mainDiv">

            <Router>
                
                <Sitebar role={this.props.role} token={this.props.token} clearToken = {this.props.clearToken} />
                
            </Router>
            </div>
        </div>
            
        

    )
    }
}

export default LandingPage;