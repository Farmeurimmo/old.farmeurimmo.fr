import React from "react";
import "./NotFound.css"
import Head from "react-document-configuration";
import Badges from "../common/Badges";

function NotFound() {
    return (
        <div className="large-space">
            <Badges/>
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