import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { users } from "../../models/user/demoUsers";

function Header() {
  let [trylogin, setTrylogin] = useState();

  function activarLogin() {
    setTrylogin(!trylogin);
  }

  function activarLogout() {
    window.location.href = "/home";
  }

  function mustLogin() {
    alert("Inicia sesión para continuar");
  }

  let actualUser;
  let actualPassword;

  let [usuarioActual, setUsuarioActual] = useState("");
  const passwordInput = useRef();

  function handleSubmit(e) {
    setUsuarioActual();
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].user === actualUser &&
        users[i].password === actualPassword
      ) {
        setUsuarioActual(users[i]);
        passwordInput.current.placeholder = "contraseña";
        activarLogin();
      }
    }
    if (!usuarioActual) {
      passwordInput.current.value = "";
      passwordInput.current.placeholder = "datos erróneos";
    }
    e.preventDefault();
  }

  function handleUserChange(e) {
    actualUser = e.target.value;
  }

  function handlePasswordChange(e) {
    actualPassword = e.target.value;
  }

  if (trylogin) {
    return (
      <form onSubmit={handleSubmit}>
        <div
          id="header"
          className="color-primary-green background-secondary-green d-flex flex-align-center flex-justify-around"
        >
          <div className="d-flex input-wrapper">
            <input
              type="text"
              placeholder="usuario"
              onChange={handleUserChange}
            ></input>
            <input
              type="password"
              placeholder="contraseña"
              onChange={handlePasswordChange}
              ref={passwordInput}
            ></input>
          </div>
          <div className="d-flex button-wrapper">
            <button type="submit">Iniciar sesión</button>
            <button onClick={activarLogin}>Cancelar</button>
          </div>
        </div>
      </form>
    );
  } else if (usuarioActual) {
    if (usuarioActual.admin === true) {
      return (
        <div
          id="header"
          className="color-primary-pink background-primary-white d-flex flex-justify-between flex-align-center"
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
            <Link to="/incidence">
              <FontAwesomeIcon icon="pencil" />
              Incidencias
            </Link>
            <div className="login-wrapper clickable" onClick={activarLogout}>
              <FontAwesomeIcon icon="user" />
              {usuarioActual.user}
            </div>
          </div>
        </div>
      );
    } else {
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
            <Link to="/contact">
              <FontAwesomeIcon icon="pencil" />
              Contactanos
            </Link>
            <div className="login-wrapper clickable" onClick={activarLogout}>
              <FontAwesomeIcon icon="user" />
              {usuarioActual.user}
            </div>
          </div>
        </div>
      );
    }
  }
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
        <div className="clickable" onClick={mustLogin}>
          <FontAwesomeIcon icon="pencil" />
          Contactanos
        </div>
        <div className="clickable" onClick={activarLogin}>
          <FontAwesomeIcon icon="user" />
          Login
        </div>
      </div>
    </div>
  );
}

export default Header;
