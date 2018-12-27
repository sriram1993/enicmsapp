import React from 'react';
import './Inspektoren.css';

const neuerInspektor = ({handleClose,show}) =>{
    return(
        <div className="modal modal-background"  style={{display: `${show ? "block" : "none"}`}} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            {/* Inner Container */}
            <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h5 className="d-inline-block">Neuer Inspektor</h5>
                  <div className="d-inline-block float-right">
                     <a href="#"><img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon" onClick={handleClose}  alt="..."/ ></a>
                  </div>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                  <div className="container">
                    <div className="form-group row">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name"  className="form-control"/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwort">Passwort</label>
                        <input type="password" placeholder="Passwort"  className="form-control"/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwort wiederholen">Passwort wiederholen</label>
                        <input type="password" placeholder="Passwort wiederholen"  className="form-control"/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rohrleitungen">Rohrleitungen</label>
                        <input type="number"  min="1" max="20"  className="form-control"/>
                    </div>
                    </div>
                    </div>
                    <div className="d-inline-block float-right modal-footer">
                        <button type="button" className="btn btn-success btnDownloadAllInspection">Abbrechen</button>
                        {/* <button type="button" className="btn "></button> */}
                        <button type="button" className="btn btn-success float-right btnHinzufugen">Hinzufügen</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default neuerInspektor;