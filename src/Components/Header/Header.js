import React from 'react';
import './Header.css';

const Header = () =>{
        return(

            <div className="headerContainer">
              <div className="col"></div>
              <nav className="navbar navbar-expand-lg navbar-light col-6">
              <div className="collapse navbar-collapse">
              <ul className="nav container">
                <li className="nav-item">
                    <a className="nav-link textSpan" href="#"><b>ENI App</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link textSpan" href="#">Rohrleitungen</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link textSpan" href="#">Inspektron</a>
                </li>
                <li className="nav-item form-inline mx-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Suche" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Suchen</button>
                </li>
                </ul>
                </div>
              </nav>
              <div className="col"></div>
            </div>
        );
};

export default Header;
