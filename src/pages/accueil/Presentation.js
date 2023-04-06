import "./Presentation.css"

function Presentation() {
    return (
        <section className="presentation">
            <img src="logo.jpg" alt="logo"></img>
            <div className="present">
                <h1>Farmeurimmo</h1>
                <ul className="list">
                    <li className="ele">Développeur Java, JS/TS, C++, SQL, Python, HTML+CSS</li>
                    <li className="ele">Administrateur Système</li>
                    <li className="ele">Amateur de cybersécurité & d'IA</li>
                </ul>
            </div>
        </section>
    )
}

export default Presentation