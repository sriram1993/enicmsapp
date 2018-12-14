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

import './Login.css';

const Login = () =>{
    return(
        <div>
            <Header/>
            {/* <LoginContainer/> */}
            {/* <Container/> */}
            {/* <ModalContainer/> */}
            {/* <Inspektoren/> */}
            {/* <NeuerInspektor/> */}
            {/* <InspektorenDetails/> */}
            <Upload/>
            <Footer/>
        </div>    
    )
};

export default Login;