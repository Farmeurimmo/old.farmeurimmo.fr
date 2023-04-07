import "./NotAvailable.css"
import Head from "react-document-configuration";
import React from "react";

function NotAvailable() {
    return (
        <div className="space">
            <Head title="Erreur" icon="logo.jpg"/>
            <div className="notavailable">
                <img alt="Not Available" className="catimg" src="https://http.cat/204.jpg"/>
            </div>
        </div>
    )
}

export default NotAvailable