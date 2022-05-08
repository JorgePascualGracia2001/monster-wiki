import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <a href="/#">
          <FontAwesomeIcon icon="house" />
          Inicio
        </a>
        <a href="/#">
          <FontAwesomeIcon icon="search" />
          Busqueda
        </a>
        <a href="/#">
          <FontAwesomeIcon icon="pencil" />
          Editar
        </a>
        <a href="/#">
          <FontAwesomeIcon icon="user" />
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
