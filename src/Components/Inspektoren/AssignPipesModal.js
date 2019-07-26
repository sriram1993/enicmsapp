import React, { Component } from 'react';
import './Inspektoren.css';

//const AssignPipesModal = ({closeAssignPipe,showAssignPipe}) =>{
class AssignPipesModal extends Component {

    state = {
        remainingPipes: [
            {
                id: "7YUHGHS-9UIHJJ",
                name: "D015-220A-O-022108"
            },
            {
                id: "89UHGHS-9UIHJJ",
                name: "D015-330A-O-022123"
            },
            {
                id: "5TUHGHS-9UIHJJ",
                name: "U015-390A-O-022108"
            },
            {
                id: "I8UHGHS-9UIHJJ",
                name: "NU15-390A-O-022108"
            },
            {
                id: "O9UHGHS-9UIHJJ",
                name: "OP15-390A-O-022108"
            },
            {
                id: "GYUHGHS-9UIHJJ",
                name: "DP15-390A-O-022108"
            },
            {
                id: "HTUHGHS-9UIHJJ",
                name: "AA15-390A-O-022108"
            }
        ]
    }

    render() {
        return (
            <div className="modal modal-background" style={{ display: `${this.props.showAssignPipe ? "block" : "none"}` }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    {/* Modal Content */}
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h5 className="d-inline-block ">Assign Pipes</h5>
                            <div className="d-inline-block float-right">
                                <a href="#"><img src={process.env.PUBLIC_URL + '/close.png'} className="closeIcon" onClick={this.props.closeAssignPipe} alt="..." /></a>
                            </div>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body">
                            <div className="container tableContainer">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Rohrleitungs ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>{this.state.remainingPipes.map(function (item, key) {
                                        const rowIndex = key + 1;
                                        return (
                                            <tr key={key}>
                                                <td scope="row"><div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id={item.id} />
                                                    <label class="custom-control-label" for={item.id}>{rowIndex}</label>
                                                </div></td>
                                                <td>{item.name}</td>
                                            </tr>
                                        )
                                    }, this)}
                                        {/* <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" for="customCheck1">1</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                <label class="custom-control-label" for="customCheck2">2</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                <label class="custom-control-label" for="customCheck3">3</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                                <label class="custom-control-label" for="customCheck4" >4</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                                <label class="custom-control-label" for="customCheck5" >5</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck6" />
                                                <label class="custom-control-label" for="customCheck6">6</label>
                                            </div></td>
                                            <td>D015-390A-O-022108</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Button Section */}
                        <div className="d-inline-block modal-footer">
                            <button type="button" className="btn btn-outline-info float-right  transparentButton">Schließen</button>
                            <button type="button" className="btn btn-success   btnDownloadAllInspection">Hinzufügen</button>&nbsp;&nbsp;
                {/* <button type="button" className="btn btn-danger float-right btnInspektonDelete">Inspektor löschen</button>&nbsp;&nbsp; */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default AssignPipesModal;