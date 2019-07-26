import React, { Component } from 'react';
import './Inspektoren.css';
import AssignPipesModal from './AssignPipesModal'

// const inspektorenDetails = ({ showDetails, handleCloseDetails }) => {
class inspektorenDetails extends Component {


  state = {
    showAssignPipes: false
  }

  showAssignPipesModal = () => {
    this.setState({ showAssignPipes: true });
  }

  hideAssignPipesModal = () => {
    this.setState({ showAssignPipes: false });
  }

  render() {
    return (
      <div className="modal modal-background" style={{ display: `${this.props.showDetails ? "block" : "none"}` }} tabIndex="-2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          {/* Modal Content */}
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="d-inline-block">{this.props.name}</h5>
              
              <div className="d-inline-block float-right">
                <button type="button" className="btn btn-primary" onClick={this.showAssignPipesModal}>Neue Rohrleitung hinzufügen</button>&nbsp;&nbsp;
                <a href="#"><img src={process.env.PUBLIC_URL + '/close.png'} className="closeIcon" onClick={this.props.handleCloseDetails} alt="..." /></a>
              </div>
            </div>
            {/* Modal Body */}
            <div className="modal-body">
              <div className="container tableContainer">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      {/* <th scope="col"><div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input"  id="CheckAll"/>
                      <label class="custom-control-label" for="CheckAll">#</label>
                    </div></th> */}
                      <th scope="col">Rohrleitungs ID</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                      <td scope="row">2</td>
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                      <td scope="row">3</td>
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                      <td scope="row">4</td>
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                      <td scope="row">5</td> 
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                      <td scope="row">6</td>
                      <td>D015-390A-O-022108</td>
                      <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Button Section */}
            <div className="d-inline-block float-right modal-footer">
              <button type="button" className="btn btn-outline-info float-right transparentButton">Schließen</button>
              <button type="button" className="btn btn-success float-right btnDownloadAllInspection">Alle downloaden</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-danger float-right btnInspektonDelete">Inspektor löschen</button>&nbsp;&nbsp;
              
            </div>
          </div>
        </div>
        <AssignPipesModal closeAssignPipe ={this.hideAssignPipesModal} showAssignPipe={this.state.showAssignPipes}/>
      </div>
    )
  }
};

export default inspektorenDetails;