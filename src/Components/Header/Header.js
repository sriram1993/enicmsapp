import React from 'react';
import './Header.css';

const Header = () =>{
        return(
        <div>
            <nav className="navbar navbar-default headerContainer">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand textSpan" href="#">ENI App</a>
                    </div>
                </div>            
            </nav>
        </div>
        );
};

export default Header;
