import React from 'react';
import './Header.css';
import { Switch, Route, Link } from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';

const Header = () =>{
        return(
            <div className="headerContainer">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse">
                    <ul className="nav row">
                        <li className="nav-item">
                            <Link className="nav-link textSpan" to="/"><b>ENI App</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link textSpan" to="/pipe">Rohrleitungen</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link textSpan" to="/inspektron">Inspektron</Link>
                        </li>
                        {/* <li className="nav-item form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Suche" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Suchen</button>
                        </li> */}
                    </ul>
                </div>
              </nav>
              {/* <div>
                <input className="form-control mr-sm-2" type="search" placeholder="Suche" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Suchen</button>
              </div> */}
            </div>
            </div>
        );
};

export default Header;
