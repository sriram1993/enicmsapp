import React from 'react';
import './Upload.css';

const upload = () =>{
    return(
        <div className="container uploadContainer">
            <h1>Upload</h1><br/><br/>
            {/* Button 1 */}
            <blockquote>
                Bitte hier die Rohrleitungsdaten hochladen. Die Datei wird<br/> anschließend auf Kompatibilität überprüft.
            </blockquote><br/>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btnUpload">Rohleitungsdatei öffnen…</button>
            </div>
            {/* Button 2 */}
            <blockquote>
                Anschließend bitte die .zip Datei mit den<br/> zusammengehörenden Isometrien hochladen.
            </blockquote><br/>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btnUpload">Isometrie .zip öffnen…</button>
            </div> 
            {/* Button 3 */}
            <blockquote>
                Bitte hier die Rohrleitungsdaten hochladen. Die Datei wird<br/> anschließend auf Kompatibilität überprüft.
            </blockquote><br/>
            <div className="form-group">
                <button type="submit" className="btn btn-success btnUpload btnImportieren">Importieren</button>
            </div> 

        </div>
    )
};

export default upload;