import React, {Component} from 'react';
import {
    Route,
    Link,
    Switch   
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {Navbar, Nav} from 'reactstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'


import AllPetsIndex from "../pet/AllPetsIndex"
import MyPetsIndex from "../pet/MyPetsIndex"
import MyPetsRequestsIndex from "../request/MyPetsRequestsIndex"

type AcceptedProps ={
    role: string,
    token: string,
    clearToken():void
}



class Sitebar extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={

        }
    }

render(){
    return(
        <div>
        <div className="navbar-style">
            <Navbar expand="lg" >
                <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                 <div>
                <NavDropdown title= "Pets" id ="navbarScrollingDropdown">
                    <NavDropdown.Item className="dropdownFont"><Link to ='/allpets'>All PetPals</Link></NavDropdown.Item>
                    <NavDropdown.Item  className="dropdownFont"><Link to = '/mypets'>My Pets</Link></NavDropdown.Item>
                </NavDropdown>
                </div>
                 <div >
                <NavDropdown title= "Requests" id ="navbarScrollingDropdown">
                    <NavDropdown.Item  className="dropdownFont"><Link to = '/mypetsrequests'>For My Pets</Link></NavDropdown.Item>
                    <NavDropdown.Item  className="dropdownFont">For My PetPals</NavDropdown.Item>
                </NavDropdown>
                </div>
                 
                 <div>
                 {/* <NavDropdown title= "Reviews" id ="navbarScrollingDropdown">
                    <NavDropdown.Item href="/" className="dropdownFont">Written For My Pets</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="dropdownFont">PetPals Reviewed By Me</NavDropdown.Item>
                </NavDropdown> */} 
                 {/* <NavLink href="/" className="navbar-style">Reviews</NavLink> */}
                </div>
                 <div>
                 <NavDropdown title= "Admin" id ="navbarScrollingDropdown" style= {{visibility: this.props.role==="admin" ? "visible" : "hidden"}}>
                    <NavDropdown.Item  className="dropdownFont">Manage Users</NavDropdown.Item>
                    {/* <NavDropdown.Item  className="dropdownFont">Manage Reviews</NavDropdown.Item> */}
                </NavDropdown>    
                 {/* <NavLink style= {{visibility: this.props.role==="admin" ? "visible" : "hidden"}}className="navbar-style">Admin</NavLink> */}
                </div>
                <div>
                {/* <Button onClick={()=>this.props.clearToken()} className="headerButton">Logout</Button> */}
                </div>
                </Nav>
            </Navbar>
        </div>
            <div>
                <Switch>
                    <Route exact path ='/'><AllPetsIndex token={this.props.token}/></Route>
                    <Route exact path ='/allpets'><AllPetsIndex token={this.props.token}/></Route>
                    <Route exact path ='/mypets'><MyPetsIndex token={this.props.token}/></Route>
                    <Route exact path ='/mypetsrequests'><MyPetsRequestsIndex token={this.props.token}/></Route>
                </Switch>

            </div>    



        </div>




        );
    };
}    


export default Sitebar;
