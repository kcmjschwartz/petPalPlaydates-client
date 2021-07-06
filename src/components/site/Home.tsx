import React, {Component} from 'react';
import Carousel from './Carousel'
import Register from '../user/Register'

type HomeState = {
    registerActive: boolean
}

type AcceptedProps ={
updateToken(newToken:string): void
}

class Home extends Component<AcceptedProps, HomeState>{
    constructor(props:AcceptedProps){
        super(props);
            this.state={
                registerActive:false
            }
        }
    
updateActiveOn(){
    this.setState({
        registerActive: true
    })
}


updateActiveOff(){
    this.setState({
        registerActive: true
    })
}



render(){
    return(
        <div>
        <h1>Welcome to Pet-Pal Play Dates</h1>
        <p></p>
        <Carousel/>
        <p></p>
        <button onClick={() =>this.updateActiveOn()}>{this.state.registerActive===true?<Register activeOff={this.updateActiveOff} updatedToken = {this.props.updateToken}/>:<></>}Get Started!</button>
        </div>
    );
    

}
}


export default Home;