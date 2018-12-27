import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Inspektoren.css';
import NeuerInspektron from './NeuerInspektor';
import InspektronDetails from './InspektorenDetails';

class inspektoren extends Component{

    state = {showNeuer : false, showInspektorDetail:false};

    showNeuerModal = () =>{
        this.setState({showNeuer:true});
    }

    hideNeuerModal =() =>{
        this.setState({showNeuer:false});
    }

    showInspektorDetailModal = () =>{
        this.setState({showInspektorDetail:true});
    }

    hideInspektorDetailModal =() =>{
        this.setState({showInspektorDetail:false});
    }

    render(){
    return(
        <div className="container inspektorenContainer">
            <div>
                <h1 className="d-inline-block">Inspektoren</h1>
                <button type="submit" onClick={this.showNeuerModal} className="btn btn-primary float-right">Neuer Inspektor</button>
            </div><br/><br/>
            <div className="tableContainer">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Inspektor</th>
                        <th scope="col">Rohrleitungen</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><a href="#" onClick={this.showInspektorDetailModal} data-toggle="modal" ><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
                    </tr>              
                </tbody>
            </table>
            </div><br/><br/>
            <NeuerInspektron show={this.state.showNeuer} handleClose={this.hideNeuerModal} />
            <InspektronDetails showDetails = {this.state.showInspektorDetail} handleCloseDetails={this.hideInspektorDetailModal} />
        </div>
    )
    }
};

export default inspektoren;