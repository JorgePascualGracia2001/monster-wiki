import "./Incidence.scss";
import Card from "../common/Card";
import { incidences } from "../../models/suggestion/demoIncidences";
import { useState } from "react";

function Incidence() {
  let [incidenceIndex, setincidenceIndex] = useState(0);

  function goPrevious(){
    setincidenceIndex(incidenceIndex - 1)
  }

  function goNext(){
    setincidenceIndex(incidenceIndex + 1)
  }

  if (incidenceIndex === 0) {
    return (
      <Card className="card-main incidence-form">
        <Card className="card-section">
        <div className="form-component d-flex">
              <h2>Asunto:</h2>
              <div>{incidences[incidenceIndex].about}</div>
            </div>
            <div className="form-component d-flex">
              <h2>Descripción:</h2>
              <div>{incidences[incidenceIndex].description}</div>
            </div>
            <div className="d-flex flex-justify-around button-wrapper">
              <button onClick={goNext}>siguiente</button>
            </div>
        </Card>
      </Card>
    );
  } else if (incidenceIndex === incidences.length - 1) {
    return (
      <Card className="card-main incidence-form">
        <Card className="card-section">
        <div className="form-component d-flex">
              <h2>Asunto:</h2>
              <div>{incidences[incidenceIndex].about}</div>
            </div>
            <div className="form-component d-flex">
              <h2>Descripción:</h2>
              <div>{incidences[incidenceIndex].description}</div>
            </div>
            <div className="d-flex flex-justify-around button-wrapper">
              <button onClick={goPrevious}>Anterior</button>
            </div>
        </Card>
      </Card>
    );
  }
  return (
    <Card className="card-main incidence-form">
      <Card className="card-section">
      <div className="form-component d-flex">
            <h2>Asunto:</h2>
            <div>{incidences[incidenceIndex].about}</div>
          </div>
          <div className="form-component d-flex">
            <h2>Descripción:</h2>
            <div>{incidences[incidenceIndex].description}</div>
          </div>
          <div className="d-flex flex-justify-around button-wrapper">
            <button onClick={goPrevious}>Anterior</button>
            <button onClick={goNext}>siguiente</button>
          </div>
      </Card>
    </Card>
  );
}

export default Incidence;
