import React from 'react';
import './Login.css';

const Login = () =>{
    return(
        <div className="loginContainer">
           <div className="formContainer">
                <h1>Welcome</h1>
                <span>Email:
                <input type="email" text="Email" /><br/><br/>
                </span>
                <span>Password:
                <input type="password" text="Password" />
                </span>
                
           </div>
        </div>    
    )
};

export default Login;