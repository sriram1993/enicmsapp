import React from 'react';
import './Rohrleitungen.css';


const modalDialog = ({handleClose,show,modalData}) =>{
    console.log("Modal Dialog" + handleClose);
    console.log("Modal Data:" + modalData);
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
        //<div style={{ position: "fixed", top: "0px", left: "0px", width: "200px", height: "100px", background: "#123456", display: `${show ? "block" : "none"}` }}>LALLA</div>
    
    <div className="modal" style={{display: `${show ? "block" : "none"}`}} id="rohrleitungenModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
         <div className="modal-header">
            <h5 className="d-inline-block">D015-390A-O-022108</h5>
            <div className="d-inline-block float-right">
                <button type="submit" className="btn btn-primary">Neue Inspektion anlegen</button>&nbsp;&nbsp;&nbsp;
                <a href="#"><img src={process.env.PUBLIC_URL+'/close.png'} className="closeIcon"  alt="..." onClick={handleClose} /></a>
            </div>
         </div><hr/>
         <div className="modal-body">
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
            </div>
            <hr/>
            <div className="d-inline-block float-right modal-footer">
                <button type="button" className="btn btn-success  btnDownloadAllInspection">Alle downloaden</button>&nbsp;&nbsp;
                {/* <button type="button" className="btn "></button> */}
                <button type="button" className="btn btn-outline-info float-right transparentButton">Schließen</button>
            </div>
            </div>
          </div>
        </div>
    )
};

export default modalDialog;
