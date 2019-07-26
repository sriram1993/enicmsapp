import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Inspektoren.css';
import NeuerInspektron from './NeuerInspektor';
import InspektronDetails from './InspektorenDetails';
import AssignPipesModal from './AssignPipesModal'

class inspektoren extends Component{

    state = {
        showNeuer : false, 
        showInspektorDetail:false,
        passedName : "",
        inspektoren : [
            {
                id : 1,
                name: "Thomas Muller",
                noOfPipes : 5
            },
            {
                id : 2,
                name: "Toni Kroos",
                noOfPipes : 8
            },
            {
                id : 3,
                name: "Marcus Rashford",
                noOfPipes : 10
            },
            {
                id : 4,
                name: "Antony Martial",
                noOfPipes : 11
            },
            {
                id : 5,
                name: "Scott McTominay",
                noOfPipes : 14
            },
            {
                id : 6,
                name: "Andreas Perreira",
                noOfPipes : 15
            },
            {
                id : 7,
                name: "Mason Greenwood",
                noOfPipes : 26
            },
            {
                id : 8,
                name: "Tahith Chong",
                noOfPipes : 44
            }
        ]
    };

    showNeuerModal = () =>{
        this.setState({showNeuer:true});
    }

    hideNeuerModal =() =>{
        this.setState({showNeuer:false});
    }

    showInspektorDetailModal = (name) => {
        this.setState({showInspektorDetail:true});
         this.setState({passedName:name});
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
                <tbody>{this.state.inspektoren.map(function(item,key){
                    const rowIndex = key +1;
                    return(
                        <tr key={key}>
                        <th scope="row">{rowIndex}</th>
                            <td>{item.name}</td>
                            <td>{item.noOfPipes}</td>
                            <td><a href="#" onClick={() => this.showInspektorDetailModal(item.name)} data-toggle="modal" ><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></a></td>
                        </tr>
                    )
                },this)}
                    {/* <tr>
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
                    </tr>               */}
                </tbody>
            </table>
            </div><br/><br/>
            <NeuerInspektron show={this.state.showNeuer} handleClose={this.hideNeuerModal} />
            <InspektronDetails showDetails = {this.state.showInspektorDetail} handleCloseDetails={this.hideInspektorDetailModal} name={this.state.passedName}/>
        </div>
    )
    }
};

export default inspektoren;