import './App.css';
import React from "react";
import Presentation from "./Presentation";
import Head from "react-document-configuration";
import MesLangages from "../common/MesLangages";
import MesOutils from "../common/MesOutils";
import Badges from "../common/Badges";

function App() {
    return (
        <div className="app-accueil">
            <Head title="Accueil - Farmeurimmo" icon="logo.jpg"/>
            <Badges/>
            <Presentation/>
            <section id={""} className="app">
                <h1>Qui suis-je ?</h1>
                <p>Je m'appelle Robin, étudiant en informatique, je suis passionné par la programmation et la sécurité
                    informatique.</p>
                <br/>
                <p>Je suis dans le développement depuis 2018, où j'ai commencé par des plugins minecraft et des pages
                    web basiques,
                    puis des API (avec spring) ou les workers cloudflare mais aussi des jeux sur ma calculatrice
                    numworks en python.</p>
                <br/>
                <p>Pour ce qui est du Sys.Admin, j'ai toujours eu un ordinateur entre les mains mais je m'y suis
                    sérieusement mis en 2021.
                    Notamment en créant ma propre infrastructure avec mes machines, tunnels, sécurités, anti ddos et
                    aussi la mise en place de mon nom de domaine.</p>
                <br/>
                <p>Bien évidement, en ayant un ordinateur entre les mains pendant plus de 10 ans, on se rend vite compte
                    que windows sert uniquement à jouer. Je suis
                    donc définitivement passé sous Kali (Linux) depuis 3 ans. Avec Kali vient une suite d'outils très
                    performants qui m'ont fait plonger dans la cybersécurité.</p>
            </section>
            <MesLangages/>
            <MesOutils/>
        </div>
    );
}

export default App;
