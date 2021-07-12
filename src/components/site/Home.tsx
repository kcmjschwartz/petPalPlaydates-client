import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from '../user/Register'
import Timeline from './Timeline';
import {Button} from 'reactstrap'
import Carousel from 'react-bootstrap/Carousel'
import hedgiePic from "../../assets/liudmyla-denysiuk-iJ9o00UeAWk-unsplash.jpg";
import guineaPic from "../../assets/bonnie-kittle-MUcxe_wDurE-unsplash.jpg";
import bunnyPic from "../../assets/sandy-millar-HoZtQxSpaqo-unsplash.jpg";
import birdPic from "../../assets/andrea-lightfoot-ZePrO18ieX4-unsplash.jpg";
import puppyPic from "../../assets/andrew-pons-oH9AuO20kbk-unsplash.jpg";
import lizardPic from "../../assets/suong-nguyen--_yJPCofxYQ-unsplash.jpg";
import catPic from "../../assets/simone-dalmeri-pKnpMFEf50Y-unsplash.jpg";



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
        <div className= "main">
        <div className = "mainDiv">  
          
        <br/>  
        <h1 className="standardHeadingFont">PetPal PlayDates</h1>
        <p>Cupcake ipsum dolor sit. Amet biscuit cookie jelly beans. Sweet roll chocolate cake lollipop powder jelly beans. Chocolate cake brownie liquorice pie chocolate bar jelly beans tiramisu jelly-o jelly-o.</p>
        <br/>

        <div className= "carousel">
        <Carousel fade>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={hedgiePic}
              alt="HedgeHog"
            />
            <p>Photo by Liudmyla Denysiuk on Unsplash</p>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={guineaPic}
              alt="Guinea Pig"
            />
            <p>Photo by Bonnie Kittle on Unsplash</p>
          </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={bunnyPic}
              alt="Bunny"
            />
            <p>Photo by Sandy Millar on Unsplash</p>
            </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={birdPic}
              alt="Bird"
            />
            <p>Photo by Andrea Lightfoot on Unsplash</p>
            </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={puppyPic}
              alt="Puppy"
            />
            <p>Photo by Andrew Pons on Unsplash</p>
            </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={catPic}
              alt="kitty"
            />
            <p>Photo by Simone Dalmeri on Unsplash</p>
            </Carousel.Item>
          <Carousel.Item interval={8000}>
            <img
              className="d-block w-100"
              src={lizardPic}
              alt="Iguana"
            />
            <p>Photo by Suong Nguyen on Unsplash</p>
            </Carousel.Item>
        </Carousel>
      </div>

        <br/>
        <p>Cupcake ipsum dolor sit amet caramels donut. Jujubes pie halvah bonbon croissant. Dragée cake jelly chocolate cake. Soufflé oat cake macaroon fruitcake. Topping tart pastry dragée. Candy canes tootsie roll gummi bears cupcake. Tart ice cream marshmallow cotton candy toffee sesame snaps macaroon topping.</p>
        <div>
        <Button className="standardButton" onClick={() =>this.registerActiveOn()}>{this.state.registerActive?<Register activeOff={this.registerActiveOff} updateToken = {this.props.updateToken}/>:<></>}Get Started!</Button>
        </div>
        </div>
        </div>
        
          <div style={{backgroundColor:"#16662B", width: "100%"}} >
            <Timeline />
            </div>  
        
        </div>
    );
    

}
}


export default Home;