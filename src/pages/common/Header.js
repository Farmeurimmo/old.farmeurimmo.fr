import '../accueil/App.css';
import React from "react";
import "./Header.css"

function App() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a className="animated" href="/">Accueil</a></li>
                    <li><a className="animated" href="/dev">Développement</a></li>
                    <li><a className="animated" href="/as">Administration Système</a></li>
                    <li><a className="animated" href="/projets">Mes projets</a></li>
                    <li><a className="animated" href="/avis">Avis</a></li>
                    <li><a className="animated" href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default App;