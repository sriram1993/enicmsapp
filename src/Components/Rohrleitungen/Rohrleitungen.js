import React from 'react';
import './Rohrleitungen.css';


const container = () =>{
    return(
        <div className="container gridContainer">
        <div>
            <h1>Rohrleitungen</h1>
            <button type="submit" className="btn btn-primary float-right">Upload</button>
        </div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                 <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                 <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                 <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};

export default container;