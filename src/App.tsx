import React, { Component } from 'react';
import './App.css';
import LandingPage  from './components/site/LandingPage';
import Home from './components/site/Home' 
import Footer from './components/site/Footer';
import Header from './components/site/Header';


type AppState = {
  sessionToken: string | null
}

type AcceptedProps={

}

class App extends Component <AcceptedProps, AppState>{
  constructor(props:AcceptedProps){
    super(props);
    this.state = {
      sessionToken:('')

  }
  this.protectedViews = this.protectedViews.bind(this)
  this.updateToken = this.updateToken.bind(this)
  this.clearToken = this.clearToken.bind(this)
}
  
componentDidMount(){
    if (localStorage.getItem('token')){
      this.setState({
        sessionToken: localStorage.getItem('token')
      })
    }
  }

updateToken(newToken:string){
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken
    },() =>console.log(this.state.sessionToken))
    
}

clearToken(){
  localStorage.clear();
  this.setState({
    sessionToken: ''
  })
}
 
protectedViews(){                                                                                                
    return (this.state.sessionToken === localStorage.getItem('token') ? <LandingPage updatedToken={this.updateToken} token ={this.state.sessionToken} clearToken={this.clearToken()}/>
    : <Home updateToken={this.updateToken}/>)}

render(){
  return (
    <div className="App">
     <Header updatedToken={this.updateToken}/>
      {this.protectedViews()}
     <Footer />
    </div>
  )
}
}

export default App;
