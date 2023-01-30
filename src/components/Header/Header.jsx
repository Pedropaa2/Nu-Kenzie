import "../../globalstyle.css";
import "./Header.css";
export function Header({ logout, kenzie }) {
  return (
    <header>
      <img src={kenzie} alt="" className="kenzieHeader" />
      <button className="home" onClick={logout}>
        Inicio
      </button>
    </header>
  );
}
