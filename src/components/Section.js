import React from "react";
import "./styles/Section.scss";
import man2 from "./assets/man2.jpg";
import skill from "./assets/skill.jpg";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={man2} alt="" />
        </div>

        <div className="section__content">
          <h1>Reseña</h1>
          <p>Más de 2 años es desarrollador developer</p>
          <p>Poyectos a pedidos</p>
          <p>Proyectos personales</p>
          <p>2 años de programación progresiva</p>
          <p>Javascript Developer</p>
          <p>React js Developer</p>
        </div>
        <div className="divSkill">
          <h1>Tools</h1>
          <img src={skill} alt="" className="skill" />
        </div>
      </div>
    </div>
  );
};

export default Section;
