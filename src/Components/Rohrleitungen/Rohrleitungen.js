import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Rohrleitungen.css';
import details from './details.png';
import ModalContainer from './RohrleitungenModal';

class Rohrleitungen extends Component{
    
    state = { 
        show:false ,
        pipes:[
            {
                rohrID : 'D015-390A-O-022108',
                messpunkte: 6,
                prüfaufsicht : 'ZUS',
                letzteInspektion:'keine',
                Inspektionen:0,
                pipeDetail : [
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    }
                ]
            },
            {
                rohrID : 'D015-390A-O-022108',
                messpunkte: 6,
                prüfaufsicht : 'ZUS',
                letzteInspektion:'keine',
                Inspektionen:0,
                pipeDetail : [
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    }
                ]
            },
            {
                rohrID : 'D015-390A-O-022108',
                messpunkte: 6,
                prüfaufsicht : 'ZUS',
                letzteInspektion:'keine',
                Inspektionen:0,
                pipeDetail : [
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    }
                ]
            },
            {
                rohrID : 'D015-390A-O-022108',
                messpunkte: 6,
                prüfaufsicht : 'ZUS',
                letzteInspektion:'keine',
                Inspektionen:0,
                pipeDetail : [
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    },
                    {
                        prüfaufsicht: 'ZUS',
                        datum:'03.12.2018',
                        auffalligkeiten: 3
                    }
                ]
            }
        ],

        pipeDetailModal : []
    
    };

    showModal  = (index) =>{
        const pipes = [...this.state.pipes];
        const pipeDetails = pipes[index].pipeDetail;
        this.setState({pipeDetailModal: pipeDetails});
        this.setState({ show:true });
    };

    hideModal = () =>{
        this.setState({ show:false });
    }

    render(){
    return(
        <div className="container gridContainer">
            <div>
                <h1 className="d-inline-block">Rohrleitungen</h1>
                <button type="submit" className="btn btn-primary float-right">Upload von Rohrleitungen</button>
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
                    return(
                        <tr key={key}>
                        <th scope="row">{key}</th>
                            <td>{item.rohrID}</td>
                            <td>{item.messpunkte}</td>
                            <td>{item.prüfaufsicht}</td>
                            <td>{item.letzteInspektion}</td>
                             <td>{item.Inspektionen}</td>
                            <td><a href="#" id={key} onClick={this.showModal.bind(this,key)} data-toggle="modal" ><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..."></img></a></td>
                        </tr>
                    )
                },this)}</tbody>
            </table>
            </div><br/><br/>
        <button type="button" className="btn btn-success btnDownloadAllInspection float-right">Alle Inspektionen downloaden</button>
        <ModalContainer show={this.state.show} handleClose={this.hideModal} modalData={this.state.pipeDetailModal} />
        </div>
      );
    }
};

export default Rohrleitungen;