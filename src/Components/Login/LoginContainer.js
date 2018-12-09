import React from 'react';
import './Login.css';

const loginContainer = () =>{
    return(
       // <form className="loginContainer">
      <div className="loginContainer">
        <div className="col">
          {/* <div className="row"></div> */}
        </div>

        <form className="container col">
          <h1 className="row ">Login</h1><br/>
          <div className="form-group row">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Email address"  className="form-control"/>
          </div>
          <div className="form-group row">
            <label htmlFor="passwort">Passwort</label>
            <input type="password" placeholder="Passwort"  className="form-control"/>
          </div><br/>
          <div className="form-group row float-right">
            <button type="submit" className="btn btn-primary loginButton">Login</button>
          </div>
        </form>

        <div className="col">

        </div>
      </div>
    )
};


export default loginContainer;

