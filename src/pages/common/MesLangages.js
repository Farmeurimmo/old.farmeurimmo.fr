import "./Mes.css"
import MesAPI from "./MesAPI";

function MesLangages() {
    return (
        <section className="meslang">
            <div className="meslangages">
                <h1 className="hpres">Mes langages</h1>
                <img className="lang" alt="Java"
                     src="https://camo.githubusercontent.com/65b616ed4448c46e59c11345a1d49a01adc6d51f9bd6e93ee61d29573e04c597/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176612f6a6176612d6f726967696e616c2d776f72646d61726b2e737667"/>
                <img alt="TS" className="lang"
                     src="https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667"/>
                <img alt="JS" className="lang"
                     src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"/>
                <img alt="C++" className="lang"
                     src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"/>
                <img alt="SQL" className="lang" src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png"/>
                <img alt="Python" className="lang"
                     src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"/>
                <img alt="HTML" className="lang"
                     src="https://camo.githubusercontent.com/89a4f052af35af3ae91139b0da6496483e00d4fb645589fc4d26cf95b42f8454/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d706c61696e2d776f72646d61726b2e737667"/>
                <img alt="CSS" className="lang"
                     src="https://camo.githubusercontent.com/b3ce9472d369cacc72c37b7be98298b051836c138eada89587178fbd41939043/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d706c61696e2d776f72646d61726b2e737667"/>
            </div>
            <MesAPI/>
        </section>
    )
}

export default MesLangages