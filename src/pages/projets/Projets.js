import "./Projets.css"
import Head from "react-document-configuration";
import React from "react";

function Projets() {
    return (
        <div className="projets-container">
            <Head title="Projets - Farmeurimmo" icon="logo.jpg"/>
            <font color="orange">
                <p><b>/!\ Généralement le contenu a été abrégé et simplifié pour permettre une meilleure compréhension. Des éléments peuvent manquer.</b></p>
                <p><b>Les projets sont classés du plus récent au plus vieux.</b></p>
            </font>
            <h1>Mes "gros" projets</h1>
            <h2>OpaleUHC bientôt Opale</h2>
            <p>J'ai rejoint le projet fin mars 2023 en tant que développeur. Au début je m'occupais de maintenir le serveur qui faisait des hosts
               LG UHC en semi privé. Les plugins présent était très mal fait et baclé. Nous avons donc décidé de tout changer et de refaire une version
               propre et homogène. Nous avons aussi décidé de changer de version de la 1.18 à la 1.19.4. J'ai développé un plugin de lobby, un addon
               pour améliorer le pvp 1.19.4, un plugin de modération, un plugin velocity qui gère les reports, une file d'attente, un système pour récupérer le
               status de n'importe quel serveur depuis un serveur purpur. J'ai aussi commencé le développement d'un plugin faction (de A à Z donc je développe aussi
               le système de faction, claims) pour plus de flexibilité pour plus tard car avec le temps j'ai découvert que la souverraineté sur le code et
               le fait d'avoir son propre code apporte ses problèmes mais aussi des solutions et améliorations qui n'auraient pas pu avoir lieu avec des plugins
               d'internet.</p>
            <h2>Grande Pause..</h2>
            <p>Après VeryMc, j'étais las de minecraft, j'avais besoin de voir ailleurs. Je suis donc partit jouer à des jeux comme world of tanks, war thunder et d'autres.
               Par la suite quelques mois après, je me mis sérieusement au développement web où je me suis perfectionné en html et css. Je me suis même mis à
               apprendre le vue et le react dont ce site est fait. J'ai fait un peu de freelance avant d'arrêter par manque de clients et de temps. J'ai continué à
               développer des plugins minecraft par la suite et à me perfectionner. C'est aussi à ce moment là que j'ai décidé de créer reaper solutions, même si par manque
                de motivation je l'ai mis en pause par la suite. J'ai aussi commencé à sombrer dans les serveurs et linux...</p>
            <h2>VeryMc - Serveur Skyblock & Mini-Jeu</h2>
            <p>J'ai rejoint ce projet en tant que développeur à la fin de 2020 et je suis vite devenu "admin" de par mon expérience et mon activité. Malgré des
                "fusion" et remaniment, j'ai continué d'en faire partie. Je m'occupais de
               développer un plugin de lobby, une partie du plugin velocity (téléportation + file d'attente), d'un plugin de staff (vanish, menu de sanction etc...),
               et en plus d'un skyblock. Dans les premières versions du serveur, on utilisait quelques plugins d'internet pour le skyblock (plugin d'île, d'économie, minions etc...)
               mais j'ai par la suite décidé de tout redévelopper moi même. Avec tout ceci de refait nous avons refait une version qui a durée quelques temps.
               En vu du nombre de connectés fondre après l'ouverture, nous avons décidé de voir grand (même un peu trop :/). J'avais décidé de faire un skyblock répartit
               sur plusieurs serveurs. J'ai développé une synchro d'inventaire, des dongeons avec items customs, des nouveaux outils, etc... Mais, nous avons
               voulu ouvrir précipitament et nous avons eu des bugs au dernier moment nous obligeant à décaler la réouverture. Après les avoir corrigé, nous avons finalement
               ouvert, tout le monde était content sauf que ça n'a duré que 30 minutes et avec un pic de 40 connectés. Nous avons pris du ddos. Notre machine, mal protégée
               à l'époque ne tenait plus. On a vite abandonné puisque ce n'était pas la permière tentative de ddos mais la première avait été contré. Et puis la
               motivation manquait cruellement à l'équipe. Nous avons donc décidé d'arrêter le 21 septembre 2022. Durant ce projet, j'ai beaucoup appris et je me suis
               aussi mis à l'administration système.</p>
            <h2>TntGun - Serveur Semi-RP en 1.14.4</h2>
            <p>Je suis entré en tant que modérateur test vers mai 2019 et j'ai vite monté les échelons jusqu'à devenir super modérateur.
                Je faisais pas mal de build et je construisais une ville. J'occupais aussi de la modération (ban,mute,etc...).
                Malheureusement le serveur a fermé le 24/01/2020 dû à un manque de joueurs et de motivation du staff.</p>
            <h2>NetherHole - Serveur Mini-Jeux</h2>
            <p>Je suis entré en tant que développeur test en aout 2021 et je suis vite devenu administrateur. Je me suis occupé de
             développer un plugin de lobby(menu tp, items, protections, etc), de proxy(sanction, /hub etc...).
             J'ai décidé de quitter le projet puisque le budget et le temps que les autres admins possédaient était devenu 0.</p>
            <p></p>
            <h2>RubisCraft - Serveur PvP Faction Moddé</h2>
            <p>Je m'occupais du développement d'une partie du mod mais j'ai vite arrêté et je m'occupais principalement de l'administration,
                l'optimisation du serveur et la recherche de bug. C'était la première expérience que j'ai eu dans un projet minecraft. Je suis
                parti du poste d'administrateur en 2019-2020 en étant rentré début 2019 dans l'équipe en tant que développeur test. Le serveur
                existe toujours mais il a toujours été fait pour des amis et n'était pas vraiment dans l'optique d'être publique.</p>
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
                    <td><a href="https://farmeurimmo.fr" target="_blank" className="animated">Le site</a></td>
                </tr>
                <tr>
                    <td>SQLAccountMaker</td>
                    <td>Python (script python)</td>
                    <td>X</td>
                    <td>Créer des comptes mariadb/mysql en masse pour des professeurs</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/SQLAccountMaker" target="_blank" className="animated">Le projet github</a></td>
                </tr>
                <tr>
                    <td>MK Survival (plugin commandé par Kev1 et Mathissounet)</td>
                    <td>Java, API Purpur (fork de paper qui est un fork de spigot)</td>
                    <td>X</td>
                    <td>Gérer votre pays, attaquer, ou s'allier et des... claims :D</td>
                    <td>Commande livrée, nouvelle commande prévue mais pas encore passée</td>
                    <td><a href="https://discord.gg/KgqtzeyHyg" target="_blank" className="animated">Le serveur discord</a></td>
                </tr>
                <tr>
                    <td>Plugin ReaperSanction (anciennement SanctionSet)</td>
                    <td>Java, API Spigot (bientôt velocity et bungeecord)</td>
                    <td>X</td>
                    <td>X</td>
                    <td>En cours</td>
                    <td><a href="https://reaper.farmeurimmo.fr/reapersanction/" target="_blank" className="animated">ReaperSanction</a></td>
                </tr>
                <tr>
                    <td>Site de JSGames</td>
                    <td>HTML + CSS + JS (Static)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>Snake en JS</td>
                    <td>En pause</td>
                    <td><a href="https://games.farmeurimmo.fr" target="_blank" className="animated">Le site</a></td>
                </tr>
                <tr>
                    <td>Site de Reaper Solutions</td>
                    <td>HTML + CSS + JS (Static)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>X</td>
                    <td>En pause</td>
                    <td><a href="https://reaper.farmeurimmo.fr" target="_blank" className="animated">Le site</a></td>
                </tr>
                <tr>
                    <td>Mon ancien site personnel V1</td>
                    <td>HTML + CSS + JS (Static)</td>
                    <td>Installation sur pages.dev + configuration nom de domaine</td>
                    <td>X</td>
                    <td>X</td>
                    <td><a href="https://farmeurimmo.fr" target="_blank" className="animated">X</a></td>
                </tr>
                <tr>
                    <td>Site de RubisCraft</td>
                    <td>HTML + CSS</td>
                    <td>X</td>
                    <td>J'ai amélioré la partie front</td>
                    <td>X</td>
                    <td><a href="https://rubiscraft.fr" target="_blank" className="animated">Le site</a></td>
                </tr>
                <tr>
                    <td>FeedMeFast (Numworks et/ou pc)</td>
                    <td>Python</td>
                    <td>X</td>
                    <td>Un jeu de rapidité où il faut manger le plus de carré possible</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/FeedMeFast-Numworks" target="_blank" className="animated">Le projet github</a></td>
                </tr>
                <tr>
                    <td>Casque Intelligent</td>
                    <td>C++ (arduino)</td>
                    <td>X</td>
                    <td>Fait pour le concours créateur d'idée</td>
                    <td>X</td>
                    <td><a href="https://github.com/Farmeurimmo/Casque_Intelligent" target="_blank" className="animated">Le projet github</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Projets