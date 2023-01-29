import "../../globalstyle.css";
import "./styles.css";
export function Header({ logout, kenzie }) {
  return (
    <header>
      <img src={kenzie} alt="" className="kenzieHeader" />
      <button className="inicio" onClick={logout}>
        Inicio
      </button>
    </header>
  );
}
