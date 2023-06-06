import React from "react";
import "./Badges.css"

function App() {
    return (
        <div className="badges">
            <button className="discord" className="animated" onClick={() => {navigator.clipboard.writeText("Farmeurimmo#0462");
            alert("Vous venez de copier : Farmeurimmo#0462")}}>
                <img id="discord" src="https://dcbadge.vercel.app/api/shield/423190503626899457"/>
            </button>
            <a className="animated" href="mailto:contact@farmeurimmo.fr?subject='Bonjour, je vous contact depuis votre site pour ?'&body='Bonjour, ....'">Envoyer un mail</a>
            <a className="animated" href="/contact">Remplir un formulaire de contact</a>
        </div>
    );
}

export default App;