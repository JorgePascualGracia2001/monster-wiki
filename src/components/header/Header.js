import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      id="header"
      className="color-primary-green background-secondary-green d-flex flex-justify-between flex-align-center"
    >
      <div id="page-title">
        <span>Monster Wiki</span>
        <FontAwesomeIcon icon="book" />
      </div>
      <div id="navbar" className="d-flex flex-justify-between">
        <Link to="/home">
          <FontAwesomeIcon icon="house" />
          Inicio
        </Link>
        <Link to="/search">
          <FontAwesomeIcon icon="search" />
          Busqueda
        </Link>
        <Link to="/edit">
          <FontAwesomeIcon icon="pencil" />
          Editar
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon="user" />
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
