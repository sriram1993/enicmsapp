import React from 'react';
import './Rohrleitungen.css';


const modalDialog = () =>{
    return(
    //     <div className="modal fade myModal">
    //     <div className="modal-dialog modal-lg">
    //       <div className="modal-content">
          
    //         <div className="modal-header">
    //           <h4 className="modal-title">Modal Heading</h4>
    //           <button type="button" className="close" data-dismiss="modal">&times;</button>
    //         </div>
            

    //         <div className="modal-body">
    //           Modal body..
    //         </div>
            
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>


    // Remove modalContainer class once the Modal popup is working
    <div className="container modalContainer">
        <div>
            <h5 className="d-inline-block">D015-390A-O-022108</h5>
            <div className="d-inline-block float-right">
                <button type="submit" className="btn btn-primary">Neue Inspektion anlegen</button>&nbsp;&nbsp;&nbsp;
                <img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon"  alt="..."/ >
            </div>
        </div><hr/>
        <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Prüfaufsicht</th>
                        <th scope="col">Datum</th>
                        <th scope="col">Auffälligkeiten</th>
                        <th scope="col">Download</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>ZUS</td>
                        <td>03.12.2018</td>
                        <td>3</td>
                        <td><img src={process.env.PUBLIC_URL+'/download.png'} className="downloadImage"  alt="..."/ ></td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>ZUS</td>
                        <td>03.12.2018</td>
                        <td>3</td>
                        <td><img src={process.env.PUBLIC_URL+'/download.png'} className="downloadImage"  alt="..."/ ></td>
                        <td></td>
                    </tr>
                </tbody>
            </table><br/><br/>
            <hr/>
            <div className="d-inline-block float-right">
                <button type="button" className="btn btn-success btnDownloadAllInspection">Alle downloaden</button>&nbsp;&nbsp;
                {/* <button type="button" className="btn "></button> */}
                <button type="button" className="btn btn-outline-info float-right transparentButton">Schließen</button>
            </div>
        </div>
    )
};

export default modalDialog;
