import React,{ Component }  from 'react';
import './Login.css';

class LoginContainer extends Component{

  state = {
    isLoggedIn : false,
    email : '',
    password: ''
  }

  authenticateUser = () =>{
    const email = this.state.email;
    const password = this.state.password;
    console.log("Email:" + email + "  Password:" + password );
    if(email== 'sriram.m@gmail.com' && password=='12345678'){
      this.props.history.push('/pipe');
    }
    else{
      alert('Invalid Email and/or Password');
    }
  }

  handleEmailChange = (event) =>{
       this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  render(){
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
            <input type="email" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange}  className="form-control"/>
          </div>
          <div className="form-group row">
            <label htmlFor="passwort">Passwort</label>
            <input type="password" placeholder="Passwort" value={this.state.password} onChange={this.handlePasswordChange}   className="form-control"/>
          </div><br/>
          <div className="form-group row float-right">
            <button type="button" className="btn btn-primary loginButton" onClick={this.authenticateUser}>Login</button>
          </div>
        </form>

        <div className="col">

        </div>
      </div>
    )
  }
};


export default LoginContainer;

