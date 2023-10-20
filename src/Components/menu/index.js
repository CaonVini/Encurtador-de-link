import "./menu.css"
import { Link } from "react-router-dom"

function Menu() {
  return (
    <div className="menu">
      <Link className="menu-text" to="/links">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
