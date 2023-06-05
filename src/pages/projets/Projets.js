import "./Projets.css"
import Head from "react-document-configuration";
import React from "react";

function Projets() {
    return (
        <div className="projets-container">
            <Head title="Projets - Farmeurimmo" icon="logo.jpg"/>
            <font color="red">
                <p><b>ATTENTION : Cette page est encore incomplète et n'est pas définitive</b></p>
            </font>
            <h1>Mes "petits" projets</h1>
            <table>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Langages/Framework/API</th>
                    <th>SysAdmin</th>
                    <th>Autre</th>
                    <th>Statut</th>
                    <th>Lien</th>
                </tr>
                </thead>
                <tr>
                    <td>Mon site personnel V2</td>
                    <td>HTML + CSS + JS (React APP)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>X</td>
                    <td>En cours</td>
                    <td><a href="https://farmeurimmo.fr" target="_blank">farmeurimmo.fr</a></td>
                </tr>
                <tr>
                    <td>SQLAccountMaker</td>
                    <td>Python (script python)</td>
                    <td>X</td>
                    <td>Créer des comptes mariadb/mysql en masse pour des professeurs</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/SQLAccountMaker" target="_blank">le projet github</a></td>
                </tr>
                <tr>
                    <td>MK Survival (plugin commandé par Kev1 et Mathissounet)</td>
                    <td>Java, API Purpur (fork de paper qui est un fork de spigot)</td>
                    <td>X</td>
                    <td>Gérer votre pays, attaquer, ou s'allier et des... claims :D</td>
                    <td>Commande livrée, nouvelle commande prévue mais pas encore passée</td>
                    <td><a href="https://discord.gg/KgqtzeyHyg" target="_blank">le serveur discord</a></td>
                </tr>
                <tr>
                    <td>Plugin ReaperSanction (anciennement SanctionSet)</td>
                    <td>Java, API Spigot (bientôt velocity et bungeecord)</td>
                    <td>X</td>
                    <td>X</td>
                    <td>En cours</td>
                    <td><a href="https://reaper.farmeurimmo.fr/reapersanction/" target="_blank">reaper.farmeurimmo.fr/reapersanction/</a></td>
                </tr>
                <tr>
                    <td>Site de Reaper Solutions</td>
                    <td>HTML + CSS + JS (Static)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>X</td>
                    <td>En pause</td>
                    <td><a href="https://reaper.farmeurimmo.fr" target="_blank">reaper.farmeurimmo.fr</a></td>
                </tr>
                <tr>
                    <td>Mon ancien site personnel V1</td>
                    <td>HTML + CSS + JS (Static)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>X</td>
                    <td>X</td>
                    <td><a href="https://farmeurimmo.fr" target="_blank">X</a></td>
                </tr>
                <tr>
                    <td>Site de RubisCraft</td>
                    <td>HTML + CSS</td>
                    <td>X</td>
                    <td>J'ai amélioré la partie front</td>
                    <td>X</td>
                    <td><a href="https://rubiscraft.fr" target="_blank">rubiscraft.fr</a></td>
                </tr>
                <tr>
                    <td>FeedMeFast (Numworks et/ou pc)</td>
                    <td>Python</td>
                    <td>X</td>
                    <td>Un jeu de rapidité où il faut manger le plus de carré possible</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/FeedMeFast-Numworks" target="_blank">le projet github</a></td>
                </tr>
                <tr>
                    <td>Casque Intelligent</td>
                    <td>C++ (arduino)</td>
                    <td>X</td>
                    <td>Fait pour le concours créateur d'idée</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/Casque_Intelligent" target="_blank">le projet github</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Projets