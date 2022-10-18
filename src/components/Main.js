import {
  Facebook,
  Instagram,
  LinkedIn,
  MenuBook,
  GitHub,
  ClosedCaption,
  WhatsApp,
  SettingsPowerRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Main.scss";
import man from "./assets/man.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hola!</p>
            <h1>Soy Franco</h1>
            <p>Front-end Developer</p>

            <div className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/xfrancool"
              >
                <GitHub className="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="hhttps://www.instagram.com/franco.ortega2/?hl=es"
              >
                <Instagram className="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/franco.ortega2/"
              >
                <Facebook className="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/franco-ortega-9148b617a/"
              >
                <LinkedIn className="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=+5493513532478&text=Hola%20Franco!%20Mire%20tus%20trabajos%20de%20desarrollo%20web%20y%20estoy%20interesado%20en%20dialogar%20contigo,%20asi%20concretamos%20juntos%20un%20proyecto%20nuevo..."
              >
                <WhatsApp className="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://cv-fran.netlify.app/"
              >
                <ClosedCaption className="icon" />
              </a>
            </div>

            <div className="buttons">
              {/* <button>Mira mi trabajo</button>
              <button>Hire Me</button> */}
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
