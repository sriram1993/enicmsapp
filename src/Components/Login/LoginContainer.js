import React from 'react';
import './Login.css';

const loginContainer = () =>{
    return(
        <form className="loginContainer">
            <div className="txtArea">
              <span className="txtLogin">Login</span><br/>
              <p>Email address</p>
              <input type="text" placeholder="Email address" className="txtBoxEmailPassword"/>
              <p>Passwort</p>
              <input type="password" placeholder="Passwort" className="txtBoxEmailPassword"/>
              <div>
              <button className="loginButton">Login</button>
              </div>
            </div>
        </form>
    )
};


export default loginContainer;

