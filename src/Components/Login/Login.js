import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginContainer from './LoginContainer';
import './Login.css';

const Login = () =>{
    return(
        <div>
            <Header/>
            <LoginContainer/>
            <Footer/>
        </div>    
    )
};

export default Login;