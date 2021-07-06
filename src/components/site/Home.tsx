import React, {Component} from 'react';
import Carousel from './Carousel'
import Register from '../user/Register'

type HomeState = {
    registerActive: boolean
}

type AcceptedProps ={
updateToken(newToken:string, newRole:string): void
}

class Home extends Component<AcceptedProps, HomeState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                registerActive:false
            }
            this.registerActiveOff = this.registerActiveOff.bind(this)
        }
    
registerActiveOn(){
    this.setState({
        registerActive: true
    })
}


registerActiveOff(){
    this.setState({
        registerActive: false
    })
}



render(){
    return(
        <div>
        <h1>Welcome to Pet-Pal Play Dates</h1>
        <p></p>
        <Carousel/>
        <p></p>
        <button onClick={() =>this.registerActiveOn()}>{this.state.registerActive?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken}/>:<></>}Get Started!</button>
        </div>
    );
    

}
}


export default Home;