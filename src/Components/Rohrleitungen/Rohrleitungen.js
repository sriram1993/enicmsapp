import React from 'react';
import './Rohrleitungen.css';
import details from './details.png';


const container = () =>{
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
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                        <td>D015-390A-O-022108</td>
                        <td>6</td>
                        <td>ZUS</td>
                        <td>Keine</td>
                        <td>0</td>
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." /></td>
                    </tr>              
                </tbody>
            </table>
            </div><br/><br/>
        <button type="button" className="btn btn-success btnDownloadAllInspection float-right">Alle Inspektionen downloaden</button>
        </div>
    )
};

export default container;