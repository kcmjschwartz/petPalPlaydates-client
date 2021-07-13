import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/site/LandingPage';
import Home from './components/site/Home' 
import Footer from './components/site/Footer';
import Header from './components/site/Header';


type AppState = {
  sessionToken: string,
  sessionRole: string
}

type AcceptedProps={

}

class App extends Component <AcceptedProps, AppState>{
  constructor(props:AcceptedProps){
    super(props);
    this.state = {
      sessionToken:'',
      sessionRole:''

  }
  this.protectedViews = this.protectedViews.bind(this)
  this.updateToken = this.updateToken.bind(this)
  this.clearToken = this.clearToken.bind(this)
}
  
componentDidMount(){
    if (localStorage.getItem('token')){
      this.setState({
        sessionToken: localStorage.getItem('token') || '',
        sessionRole: localStorage.getItem('role') || ''
      })
    }
  }

updateToken(newToken:string, newRole:string){
    localStorage.setItem('token', newToken);
    localStorage.setItem('role', newRole)
    this.setState({
      sessionToken: newToken,
      sessionRole: newRole
    },
    // () =>console.log(this.state.sessionToken, this.state.sessionRole)
    )
    
}

clearToken(){
  localStorage.clear();
  this.setState({
    sessionToken: '',
    sessionRole:''
  })
}

protectedViews(){                                                                                                
    return (this.state.sessionToken === localStorage.getItem('token') ? <LandingPage role={this.state.sessionRole} token ={this.state.sessionToken} clearToken={this.clearToken}/>  
    
    : <Home updateToken={this.updateToken}/>)}

render(){
  return (
    <div className="App">
    
     <Header updateToken={this.updateToken} clearToken={this.clearToken}/>
       
      {this.protectedViews()}
    
      <Footer />
    </div>
    
  )
}
}

export default App;
