import React from 'react';
import Register from '../user/Register'
import Login from '../user/Login'


const Header = (props) => {


    return (
        <div>
        <header>
            <h1>Pet-Pal PlayDates</h1>
            <button><Register/>Get Started</button>
            <button><Login/>Login</button>
        </header>
        </div>
    );

}


export default Header;