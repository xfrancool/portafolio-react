import React from "react";
import react from "./assets/react.jpg";
import ui from "./assets/ui.jpg";
import wd from "./assets/wd.jpg";
import wd2 from "./assets/wd2.jpg";
import wd3 from "./assets/wd3.jpg";
import wd4 from "./assets/wd4.jpg";
import "./styles/Works.scss";

const Works = () => {
  return (
    <div className="works">
      <div className="work__section">
        <div className="cards">
          <img src={react} alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://portafolio-jobs.netlify.app/"
          >
            <button>Portafolio</button>
          </a>
        </div>

        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/play.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://xfrancool6.github.io/"
          >
            <button>MP3</button>
          </a>
        </div>

        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/notasjs.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://notas-js.netlify.app/"
          >
            <button>Notas</button>
          </a>
        </div>

        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/traductor.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://traductor-js.netlify.app/"
          >
            <button>Traductor</button>
          </a>
        </div>

        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/pomodoro.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://study-time.netlify.app/"
          >
            <button>Pomodoro</button>
          </a>
        </div>

        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/api.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://banco-imagen.netlify.app/"
          >
            <button>API Img</button>
          </a>
        </div>
        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/viaje.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web-travel1.netlify.app/"
          >
            <button>Viajes</button>
          </a>
        </div>
        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/constru.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://constructora1.netlify.app/"
          >
            <button>Construcción</button>
          </a>
        </div>
        <div className="cards">
          <img src="https://xfrancool.github.io/imgit/ecomer1.jpg" alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ecom-10.netlify.app/"
          >
            <button>Ecomers</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
