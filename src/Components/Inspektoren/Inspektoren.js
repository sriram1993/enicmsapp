import React from 'react';
import './Inspektoren.css';

const inspektoren = () =>{
    return(
        <div className="container inspektorenContainer">
            <div>
                <h1 className="d-inline-block">Inspektoren</h1>
                <button type="submit" className="btn btn-primary float-right">Neuer Inspektor</button>
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
                        <td><img src={process.env.PUBLIC_URL + '/details.png'} className="detailsImage" alt="..." data-toggle="modal" data-target=".myModal"></img></td>
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
        </div>
    )
};

export default inspektoren;