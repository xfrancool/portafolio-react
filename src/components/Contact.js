import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">{/* <ArrowBack className="arrow" /> Regresar */}</Link>
      <div className="inputs">
        <form
          action="https://formsubmit.co/a2f57e26db198543ad04dc737db77467"
          method="POST"
        >
          <h1>Podes escribirme...</h1>
          <input type="text" placeholder="Nombre" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <input
            type="text"
            placeholder="Mensaje"
            className="message"
            name="message"
          />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
