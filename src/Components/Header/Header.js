import React from 'react';
import './Header.css';

const Header = () =>{
        return(
            <div className="headerContainer">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse">
                    <ul className="nav row">
                        <li className="nav-item">
                            <a className="nav-link textSpan" href="#"><b>ENI App</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link textSpan" href="#">Rohrleitungen</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link textSpan" href="#">Inspektron</a>
                        </li>
                        <li className="nav-item form-inline ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Suche" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Suchen</button>
                        </li>
                    </ul>
                </div>
              </nav>
            </div>
            </div>
        );
};

export default Header;
