import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment'





type AcceptedProps ={
    token: string,
    userEditActiveOn(): void,
    userList:IUsers[],
    editUser(user:IUsers):void
    fetchAllUsers():void
}

interface IUsers{
    id:number,
    firstName: string,
    lastName: string,
    role: string
    }

class UserList extends Component<AcceptedProps>{
    constructor(props:AcceptedProps){
        super(props);{

        }
        this.userMapper=this.userMapper.bind(this)
        this.deleteUser= this.deleteUser.bind(this)
    }

    
        deleteUser(user:IUsers){
            fetch(`${APIURL}/user/admin/delete/${user.id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization': this.props.token
                })
            })
            .then(() => this.props.fetchAllUsers())
        }



userMapper(){ 
    return this.props.userList.map((user:IUsers, index)=>
            {
                return( 
                    <tr className = "standardFont"style ={{fontSize:"1.3em"}} key={index}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.role}</td>
                            <td> <button className="standardButton" onClick={()=>{this.props.userEditActiveOn(); this.props.editUser(user)}}>Update Role</button></td>
                            
                            <td> <button className="standardButton" onClick={()=> {this.deleteUser(user)}}> Delete User</button></td>
                        
                    </tr>
        )
        
    }
    
    )
}

render(){
    return(
        <>
        {this.userMapper()}
        </>
    )
}
}
export default UserList;