import React from "react";
import "./NotFound.css"
import Head from "react-document-configuration";

function NotFound() {
    return (
        <div className="large-space">
            <Head title="Page non trouvée - Farmeurimmo" icon="logo.jpg"/>
            <div className="space">
                <div className="notfound">
                    <h1>Page non trouvée</h1>
                    <p>Cette page n'existe plus/pas.</p>
                    <img className="cat" alt={"404"} src="https://http.cat/404.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default NotFound