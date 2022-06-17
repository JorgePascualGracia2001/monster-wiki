import "./Footer.scss";

function Footer() {
  return (
    <div
      id="footer"
      className="color-primary-green background-secondary-green d-flex flex-justify-between flex-align-center"
    >
      <div id="page-title">
        <span>Creado por Axel Vicente, Jairo Echegollen y Jorge Pascual</span>
      </div>
      <div id="navbar" className="d-flex flex-justify-between">
        <a href="https://www.dnd5eapi.co" target="_blank" rel="noreferrer">
          D&D 5e API
        </a>
      </div>
    </div>
  );
}

export default Footer;
