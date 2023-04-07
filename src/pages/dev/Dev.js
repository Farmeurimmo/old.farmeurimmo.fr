import "./Dev.css"
import MesLangages from "../common/MesLangages";
import Head from "react-document-configuration";
import React from "react";

function Dev() {
    return (
        <div className="dev-container">
            <Head title="Développeur - Farmeurimmo" icon="logo.jpg"/>
            <h1>Mes statistiques</h1>
            <div className="img-stats">
                <img alt="readme-stats" id="mid-size-readme-stats"
                     src="https://github-readme-stats.vercel.app/api?username=Farmeurimmo&count_private=true&show_icons=true&theme=radical"/>
                <img alt="wakatime" id="mid-size-wakatime"
                     src="https://raw.githubusercontent.com/Farmeurimmo/Farmeurimmo/main/images/stat.svg"/>
            </div>
            <h1>Mes compétences</h1>
            <p>
                Développement de plugins minecraft simple à très complexe et complet (plugin uhc, hub, d'îles skyblock
                etc..)
                avec les api Spigot, BungeeCord et Velocity
            </p>
            <p>
                Développement de sites web (HTML + CSS + JS) OU avec un framework comme React.
            </p>
            <p>
                Développement de RestAPI en Java avec Spring pour des serveurs à la demande, du stockage ou autre.
            </p>
            <p>
                Développement de Workers Cloudflare en TypeScript pour du stockage avec les Buckets, R2, Images ou
                autres.
            </p>
            <p>
                Développement de scripts en c++ pour cartes arduino.</p>
            <p>
                Développement de jeux simple en python avec pygame.</p>
            <MesLangages/>
        </div>
    )
}

export default Dev