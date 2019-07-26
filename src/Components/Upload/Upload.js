import React, { Component } from 'react';
import './Upload.css';
import ProgressBar from '../Common/ProgressBar';
import ReactFileReader from 'react-file-reader';

class upload extends Component {

    state = {
        csvFileName: "",
        isometricZipName: "",
        riDataZipName: "",
        isCSVUploaded: false,
        isIsometricZipUploaded: false,
        isRiDataZipUploaded: false,
        importDisabled: true
        //importDisabled : !state.isCSVUploaded && !state.isRiDataZipUploaded && !state.isIsometricZipUploaded
    }

    handleFileUpload = (files, uploadType) => {
        var reader = new FileReader();
        var fileName = files[0].name;
        var fileExtension = files[0].name.split(".")[1];
        reader.onload = function (e) {
            alert(reader.result)
        }
        reader.readAsText(files[0])
        switch (uploadType) {
            case "CSVFileUpload":
                this.setState({ csvFileName: fileName, isCSVUploaded: true }, () =>{
                    console.log(this.state.isCSVUploaded)
                }
                    )
                break;
            case "RIDataUpload":
                this.setState({ riDataZipName: fileName, isRiDataZipUploaded: true }, () =>{
                    console.log(this.state.isRiDataZipUploaded)
                }
                )
                break;
            case "IsometricZipUpload":
                this.setState({ isometricZipName: fileName, isIsometricZipUploaded: true }, () => {
                     console.log(this.state.isIsometricZipUploaded)
                   // alert(newstate);
                    }
                )
                break;

            default:
                this.setState({ isometricZipName: "", isIsometricZipUploaded: false });
        }
        alert("this.state.isCSVUploaded:", this.state.isCSVUploaded, "this.state.isRiDataZipUploaded:", this.state.isRiDataZipUploaded, "this.state.isIsometricZipUploaded:", this.state.isIsometricZipUploaded)
        this.forceUpdate();
        if (this.state.isCSVUploaded && this.state.isRiDataZipUploaded && this.state.isIsometricZipUploaded) {
            this.setState({ importDisabled: false });

        }
    }

    handleCSVFileUpload = files => {
        this.handleFileUpload(files, "CSVFileUpload");

    }

    handleRIDataUpload = files => {
        this.handleFileUpload(files, "RIDataUpload");

    }

    handleIsometricZipUpload = files => {
        this.handleFileUpload(files, "IsometricZipUpload");;

    }

    render() {
        return (
            <div className="container uploadContainer">
                <h1>Upload</h1>
                {/* Button 1 */}
                <blockquote>
                    Bitte hier die Rohrleitungsdaten hochladen. Die Datei wird<br /> anschließend auf Kompatibilität überprüft.
            </blockquote><br />
                <div className="form-group">
                    <ReactFileReader handleFiles={this.handleCSVFileUpload} fileTypes={'.csv'}>
                        <button className="btn btn-primary btnUpload">Rohleitungsdatei öffnen…</button>&nbsp;<span>{this.state.csvFileName}</span>
                    </ReactFileReader>
                </div>
                {/* Button 2 */}
                <blockquote>
                    Anschließend bitte die .zip Datei mit den<br /> zusammengehörenden Isometrien hochladen.
            </blockquote><br />
                <div className="form-group">
                    <ReactFileReader handleFiles={this.handleIsometricZipUpload} fileTypes={'.zip'}>
                        <button type="submit" className="btn btn-primary btnUpload">Isometrie .zip öffnen…</button>&nbsp;<span>{this.state.isometricZipName}</span>
                    </ReactFileReader>
                </div>
                {/* Button 4 */}
                <div className="form-group">
                    <ReactFileReader handleFiles={this.handleRIDataUpload} fileTypes={'.zip'}>
                        <button type="submit" className="btn btn-primary btnUpload">R&I Dateien hochladen</button>&nbsp;<span>{this.state.riDataZipName}</span>
                    </ReactFileReader>
                </div>
                <blockquote>
                    Bitte hier die Rohrleitungsdaten hochladen. Die Datei wird<br /> anschließend auf Kompatibilität überprüft.
            </blockquote><br />
                <div className="form-group">
                    <button type="submit" className="btn btn-success btnUpload btnImportieren" disabled={this.state.importDisabled}>Importieren</button>
                </div>
                <ProgressBar />
            </div>
        )
    }
};

export default upload;