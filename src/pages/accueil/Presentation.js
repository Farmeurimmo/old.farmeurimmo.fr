import "./Presentation.css"

function Presentation() {
    return (
        <section className="presentation">
            <div className="profile">
                <img src="logo.jpg" alt="logo"></img>
                <div className="present">
                    <h1 className="pseudo">Farmeurimmo</h1>
                    <ul className="list">
                        <li className="ele">Développeur Java, Web (HTML,CSS,JS/TS), C++, SQL, Python</li>
                        <li className="ele">Administrateur Système</li>
                        <li className="ele">Amateur de cybersécurité & d'IA</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Presentation