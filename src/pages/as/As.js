import "./As.css"
import MesOutils from "../common/MesOutils";
import React from "react";
import Head from "react-document-configuration";

function As() {
    return (
        <div className="as-container">
            <Head title="Administrateur Système - Farmeurimmo" icon="logo.jpg"/>
            <h1>Mes compétences</h1>
            <p>Installation & sécurisation de serveur</p>
            <p>Installation de panel : portainer ou pterodactyl</p>
            <p>Mise en place de database via docker avec stacks ou docker compose</p>
            <p>Mise en place de tunnels pour sécuriser l'accès ou de tcp shield</p>
            <p>Mise en place d'un nom de domaine</p>
            <p>Hébergement & sécurisation de site web</p>
            <MesOutils/>
        </div>
    )
}

export default As