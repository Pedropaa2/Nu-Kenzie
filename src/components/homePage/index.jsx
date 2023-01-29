import "../../globalstyle.css";
import "./style.css";
export function HomePage({ kenzie, login, aside }) {
  return (
    <div className="homePage_Container">
      <section className="App-header">
        <img className="kenzie" src={kenzie} alt="" />
        <h2 className="siteInfo">Centralize o controle das suas finanças</h2>
        <p className="complement">de forma rápida e segura</p>
        <button onClick={login}>Iniciar</button>
      </section>
      <img src={aside} alt="" className="asideImg" />
    </div>
  );
}
