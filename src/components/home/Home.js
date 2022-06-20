import "./Home.scss";
import Card from "../common/Card";

function Home() {
  return (
    <Card className="card-main d-flex">
      <Card className="card-section d-flex flex-align-center info-home">
        <h1 className="title">
          ¡Monster wiki es tu bestiario de dungenons and dragons desarrollado en
          react!
        </h1>
        <ul>
          <li>
            <h3>Este es el inicio donde enconrtarás artículos recomendados</h3>
          </li>
          <li>
            <h3>
              Tambien tenemos un buscador con todas las criaturas existentes
            </h3>
          </li>
          <li>
            <h3>
              Y por último podrás realizar sugerencias introducinedo tu usuario
            </h3>
          </li>
        </ul>
      </Card>
      <Card className="card-section recommended-container">
        <Card className="card-sub-section">
          <div className="d-flex flex-align-center recommended">
            <h2 className="recommended-title">Goblin</h2>
            <div className="recommended-body">
              "Los goblins son pequeños humanoides, egoístas y de negro corazón,
              que habitan en cavernas, minas abandonadas, mazmorras saqueadas y
              otros lugares lúgubres."
            </div>
          </div>
        </Card>
        <Card className="card-sub-section">
          <div className="d-flex flex-align-center recommended">
            <h2 className="recommended-title">Dragón rojo adulto</h2>
            <div className="recommended-body">
              "Los mas grandes y poderosos entre los dragones cromáticos, los
              dragones rojos son también los mas fieros y crueles."
            </div>
          </div>
        </Card>
        <Card className="card-sub-section">
          <div className="d-flex flex-align-center recommended">
            <h2 className="recommended-title">Esqueleto</h2>
            <div className="recommended-body">
              "Los esquletos son cadáveres no-muertos reanimados parecidos a los
              zombies, pero sin carne y sin el ansia de alimentarse de los
              vivos."
            </div>
          </div>
        </Card>
        <Card className="card-sub-section">
          <div className="d-flex flex-align-center recommended">
            <h2 className="recommended-title">Orco</h2>
            <div className="recommended-body">
              "Los orcos son una raza humanoide que ha hamenazado la
              civilización, desde hace tanto como se recuerda."
            </div>
          </div>
        </Card>
      </Card>
    </Card>
  );
}

export default Home;
