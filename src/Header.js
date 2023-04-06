import './App.css';
import React from "react";
import "./Header.css"

function App() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a className="active" href="#">Accueil</a></li>
                    <li><a href={"#dev"}>Développement</a></li>
                    <li><a href={"#as"}>Administration Système</a></li>
                    <li><a href={"#projets"}>Mes projets</a></li>
                    <li><a href={"#contact"}>Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default App;