import React from 'react';
import './Inspektoren.css';


const inspektorenDetails = ({showDetails,handleCloseDetails}) =>{
    return(
        <div className="modal modal-background"  style={{display: `${showDetails ? "block" : "none"}`}} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            {/* Modal Content */}
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h5 className="d-inline-block ">Thomas Muller</h5>
                  <div className="d-inline-block float-right">
                    <a href="#"><img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon" onClick={handleCloseDetails}   alt="..."/ ></a>
                  </div>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
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
                     <tr>
                      <th scope="row">2</th>
                       <td>D015-390A-O-022108</td>
                       <td><img src={process.env.PUBLIC_URL+'/details.png'} className="detailsImage"  alt="..."/ ></td>
                     </tr>
                     <tr>
                      <th scope="row">2</th>
                       <td>D015-390A-O-022108</td>
                       <td><img src={process.env.PUBLIC_URL+'/details.png'} className="detailsImage"  alt="..."/ ></td>
                     </tr>
                    </tbody>
                   </table>
                </div>
                </div>
            {/* Button Section */}
            <div className="d-inline-block float-right modal-footer">
                <button type="button" className="btn btn-outline-info float-right transparentButton">Schließen</button>
                <button type="button" className="btn btn-success float-right btnDownloadAllInspection">Alle downloaden</button>&nbsp;&nbsp;
                <button type="button" className="btn btn btn-danger float-right btnInspektonDelete">Inspektor löschen</button>&nbsp;&nbsp;
            </div>
            </div>
            </div>
        </div>
    )
};

export default inspektorenDetails;