import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Rohrleitungen.css';
import details from './details.png';
import ModalContainer from './RohrleitungenModal';
import { Link } from 'react-router-dom';

class Rohrleitungen extends Component{

    constructor(){
        super();
        this.state = {
            show:false,
            pipes:[],
            pipeDetailModal : [],
            selectedPipeID: ''
        }
    }
    

    componentDidMount(){
        fetch('https://eni-pipes.azurewebsites.net/api/Pipes')
        .then(results => {
            return results.json();
        }).then(data =>{
            console.log(data);
            this.setState({pipes:data});
        })
    }
    // state = { 
    //     show:false ,
    //     pipes:[
    //         {
    //             rohrID : 'D015-390A-O-022110',
    //             messpunkte: 6,
    //             prüfaufsicht : 'ZUS',
    //             letzteInspektion:'keine',
    //             Inspektionen:0,
    //             pipeDetail : [
    //                 {
    //                     prüfaufsicht: 'ZUS',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'ZUS',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'ZUS',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 }
    //             ]
    //         },
    //         {
    //             rohrID : 'D115-390A-O-122108',
    //             messpunkte: 6,
    //             prüfaufsicht : 'ZUS',
    //             letzteInspektion:'keine',
    //             Inspektionen:0,
    //             pipeDetail : [
    //                 {
    //                     prüfaufsicht: 'SWE',
    //                     datum:'16.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'SWE',
    //                     datum:'18.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'SWE',
    //                     datum:'20.12.2018',
    //                     auffalligkeiten: 3
    //                 }
    //             ]
    //         },
    //         {
    //             rohrID : 'D215-390A-O-999999',
    //             messpunkte: 6,
    //             prüfaufsicht : 'ZUS',
    //             letzteInspektion:'keine',
    //             Inspektionen:0,
    //             pipeDetail : [
    //                 {
    //                     prüfaufsicht: 'DEN',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'DEN',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'DEN',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 }
    //             ]
    //         },
    //         {
    //             rohrID : 'D115-390A-O-022108',
    //             messpunkte: 6,
    //             prüfaufsicht : 'ZUS',
    //             letzteInspektion:'keine',
    //             Inspektionen:0,
    //             pipeDetail : [
    //                 {
    //                     prüfaufsicht: 'GER',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'GER',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 },
    //                 {
    //                     prüfaufsicht: 'GER',
    //                     datum:'03.12.2018',
    //                     auffalligkeiten: 3
    //                 }
    //             ]
    //         }
    //     ],
    //     pipeDetailModal : [],
    //     selectedPipeID: ''
    // };

    

    showModal  = (index) =>{
        const pipes = [...this.state.pipes];
        const pipeDetails = pipes[index].pipeDetail;
        const selectedPipe = pipes[index].rohrID;
        this.setState({pipeDetailModal: pipeDetails, selectedPipeID : selectedPipe ,  show:true});
        console.log("State Value:" + pipeDetails[0].prüfaufsicht);
    };

    hideModal = () =>{
        this.setState({ show:false });
    }

    render(){
    return(
        <div className="container gridContainer">
            <div>
                <h1 className="d-inline-block">Rohrleitungen</h1>
                <Link to="/upload"><button type="button"  className="btn btn-primary float-right">Upload von Rohrleitungen</button></Link>
            </div><br/><br/>
            <div className="tableContainer">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Rohrleitungen ID</th>
                        <th scope="col">Messpunkte</th>
                        <th scope="col">Prüfaufsicht</th>
                        <th scope="col">Letzte Inspektion</th>
                        <th scope="col">Inspektionen</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>{this.state.pipes.map(function(item,key){
                    const rowIndex = key +1;
                    return(
                        <tr key={key}>
                        <th scope="row">{rowIndex}</th>
                            <td>{item.name}</td>
                            <td>{item.messpunkte}</td>
                            <td>{item.testingSupervisor}</td>
                            <td>{item.letzteInspektion}</td>
                             <td>{item.Inspektionen}</td>
                            <td><a href="#" id={key} onClick={this.showModal.bind(this,key)} data-toggle="modal" ><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..."></img></a></td>
                        </tr>
                    )
                },this)}</tbody>
            </table>
            </div><br/><br/>
        <button type="button" className="btn btn-success btnDownloadAllInspection float-right">Alle Inspektionen downloaden</button>
        <ModalContainer show={this.state.show} handleClose={this.hideModal} modalData={this.state.pipeDetailModal} selectedPipe = {this.state.selectedPipeID} />
        </div>
      );
    }
};

export default Rohrleitungen;