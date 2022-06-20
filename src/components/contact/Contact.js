import "./Contact.scss";
import Card from "../common/Card";
import { useState } from "react";

function Contact() {
  let [contactSent, setContactSent] = useState();

  function sendContact(e){
    setContactSent(!contactSent);
    e.preventDefault();
  };
  

  if (contactSent){
    return(
      <Card className="card-main contact-form">
        <Card className="card-section">
          <form onSubmit={sendContact}>
            <div className="form-component d-flex thanks-message">
              <div>Gracias por ponerte en contacto con nosotros, revisaremos tu incidencia!</div>
            </div>
            <div className="d-flex flex-justify-center button-wrapper">
              <button role="button" type="submit">Enviar otra incidencia</button>
            </div>
          </form>
        </Card>
      </Card>
    )
  }
  return (
    <Card className="card-main contact-form">
      <Card className="card-section">
        <form onSubmit={sendContact}>
          <div className="form-component d-flex">
            <div>Asunto:</div>
            <input></input>
          </div>
          <div className="form-component d-flex">
            <div>Descripción:</div>
            <textarea></textarea>
          </div>
          <div className="d-flex flex-justify-center button-wrapper">
            <button role="button" type="submit">Enviar</button>
          </div>
        </form>
      </Card>
    </Card>
  );
}

export default Contact;
