import "./error.css"
import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="notfound">
        <img src="/notfound.png"/>
        <h1>Pagina Não Encontrada</h1>
        <Link to="/">
        <button className="button-voltar">Voltar a Home</button>
        </Link>
    </div>
  );
}

export default Error;
