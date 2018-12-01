import React from 'react';
import './Login.css';

const loginContainer = () =>{
    return(
       // <form className="loginContainer">
       <form className="container">
         <h1>Login</h1>
         <div className="form-group">
           <label for="email">Email address</label>
           <input type="email" placeholder="Email address"  className="form-control"/>
         </div>
         <div className="form-group">
           <label for="passwort">Passwort</label>
           <input type="password" placeholder="passwort"  className="form-control"/>
         </div>
      </form>
    )
};


export default loginContainer;

