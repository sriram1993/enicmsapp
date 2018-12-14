import React from 'react';
import './Inspektoren.css';


const inspektorenDetails = () =>{
    return(
        <div className="container modalContainer">
            <div>
                <h5 className="d-inline-block">Thomas Muller</h5>
                <div className="d-inline-block float-right">
                    <img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon"  alt="..."/ >
                </div>
            </div><hr/>
            <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Rohrleitungs ID</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                        <td>D015-390A-O-022108</td>
                        <td><img src={process.env.PUBLIC_URL+'/details.png'} className="detailsImage"  alt="..."/ ></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>D015-390A-O-022108</td>
                        <td><img src={process.env.PUBLIC_URL+'/details.png'} className="detailsImage"  alt="..."/ ></td>
                    </tr>
                </tbody>
            </table><hr/>
            {/* Button Section */}
            <div className="d-inline-block float-right">
                <button type="button" className="btn btn btn-danger btnInspektonDelete">Inspektor löschen</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-success btnDownloadAllInspection">Alle downloaden</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-outline-info float-right transparentButton">Schließen</button>
            </div>
            </div>
        </div>
    )
};

export default inspektorenDetails;