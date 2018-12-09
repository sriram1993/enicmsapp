import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginContainer from './LoginContainer';
import Container from '../Rohrleitungen/Rohrleitungen';
import './Login.css';

const Login = () =>{
    return(
        <div>
            <Header/>
            {/* <LoginContainer/> */}
            <Container/>
            <Footer/>
        </div>    
    )
};

export default Login;