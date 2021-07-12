import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import APIURL from '../../helpers/environment'
import UserList from './AllUsers'
import UpdateUser from './UpdateUser'


type UserState={
    users: IUsers[], 
    userEditActive: boolean,
    userToEdit:IUsers   
}

interface IUsers{
    id:number,
    firstName: string,
    lastName: string,
    role: string
    }

    type AcceptedProps ={
    token: string,
    
}

class UsersIndex extends Component<AcceptedProps, UserState>{
    constructor(props:AcceptedProps){
        super(props);
        this.state={
            users:[],
            userEditActive: false,
            userToEdit: {
                id:0,
                firstName: '',
                lastName: '',
                role: ''
            },
          
        }
        this.fetchAllUsers = this.fetchAllUsers.bind(this)
        this.userEditActiveOff = this.userEditActiveOff.bind(this)
        this.userEditActiveOn = this.userEditActiveOn.bind(this)
        this.editUser = this.editUser.bind(this)
        
    }

    fetchAllUsers(){
        fetch(`${APIURL}/user/admin/getall/`,{
            method:'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : this.props.token
            })
        }).then (res => res.json())
        .then (result =>{
           
            this.setState({
                users:result                
            }, () =>{console.log(this.state.users)})
            }).catch(err => console.log (err))
    }

    componentDidMount(){
        this.fetchAllUsers()
    }

    userEditActiveOn(){
        this.setState({
            userEditActive: true
        })
    }
    
    
    userEditActiveOff(){
        this.setState({
            userEditActive: false
        })
    }

    editUser(user:IUsers){
        this.setState({
            userToEdit: user
        })
    }

    

render(){
    return (
        <div>
            
                <h1 className="standardHeadingFont">All Users</h1>
                
                

            
            <div >
            <Table striped>
                <thead>
                    <tr className="petHeading"style ={{fontSize:"2em"}}>
                        <th>User</th>
                        <th>Role</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                <UserList userList={this.state.users} editUser = {this.editUser} userEditActiveOn ={this.userEditActiveOn} token = {this.props.token} fetchAllUsers={this.fetchAllUsers}/>

                {this.state.userEditActive?<UpdateUser userEditActiveOff={this.userEditActiveOff} token = {this.props.token} userToEdit={this.state.userToEdit} fetchAllUsers={this.fetchAllUsers}/>:<></>}
                </tbody>
        </Table>
        </div>

    </div>
    );
    }
}

export default UsersIndex;