import React from "react";
import "./NotFound.css"
import Head from "react-document-configuration";

function NotFound() {
    return (
        <div className="space">
            <div className="notfound">
                <Head title="Page non trouvée - Farmeurimmo" icon="logo.jpg"/>
                <h1>Page non trouvée</h1>
                <p>Cette page n'existe plus/pas.</p>
                <img className="cat" alt={"404"} src="https://http.cat/404.jpg"/>
            </div>
        </div>
    )
}

export default NotFound