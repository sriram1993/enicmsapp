import React from 'react';

const neuerInspektor = () =>{
    return(
        <div className="container">
            {/* Inner Container */}
            <div className="container">
                {/* Modal Header */}
                <div>
                  <h5 className="d-inline-block">Neuer Inspektor</h5>
                  <div className="d-inline-block float-right">
                     <img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon"  alt="..."/ >
                  </div>
                </div><hr/>
                {/* Modal Body */}
                <form className="container col">
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
                    </div><hr/>
                    <div className="d-inline-block float-right">
                        <button type="button" className="btn btn-success btnDownloadAllInspection">Abbrechen</button>&nbsp;&nbsp;
                        {/* <button type="button" className="btn "></button> */}
                        <button type="button" className="btn btn-success float-right btnHinzufugen">Hinzufügen</button>
                    </div>
                </form>

            </div>
        </div>
    )
};

export default neuerInspektor;