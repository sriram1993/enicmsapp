import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginContainer from './LoginContainer';
import Container from '../Rohrleitungen/Rohrleitungen';
import ModalContainer from '../Rohrleitungen/RohrleitungenModal';
import Inspektoren from '../Inspektoren/Inspektoren';
import NeuerInspektor from '../Inspektoren/NeuerInspektor';
import InspektorenDetails from '../Inspektoren/InspektorenDetails';
import Upload from '../Upload/Upload';
import { Switch, Route } from 'react-router-dom'

import './Login.css';

const Login = () =>{
    return(
        <div>
            <Header/>
            {/* <LoginContainer/> */}
            <Switch>
                <Route exact path='/' component={LoginContainer}/>
                <Route exact path='/pipe' component={Container}/>
                <Route exact path='/inspektron' component={Inspektoren}/>
                <Route exact path='/upload' component={Upload}/>
            {/* <ModalContainer/> */}
            {/* <Inspektoren/> */}
            {/* <NeuerInspektor/> */}
            {/* <InspektorenDetails/> */}
            {/* <Upload/> */}
            </Switch>
            <Footer/>
        </div>    
    )
};

export default Login;