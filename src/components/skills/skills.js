import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./skills.css";

const Skills = (props) => {
  return (
    <div className="skills">
      <div
        className="skills--header"
        style={{ color: props.isBackgroundDark ? "#f5f3ea" : "#0d0d0d" }}
      >
        <FontAwesomeIcon
          icon={faCode}
          size="4x"
          className="fa-code-header-left"
        />
        <h2>COMPETÊNCIAS</h2>
        <FontAwesomeIcon
          icon={faCode}
          size="4x"
          className="fa-code-header-right"
        />
      </div>
      <div className="skills--body">
        <div className="skills-body--left">
          <div className="skills-body--description">
            <h2>As minhas ferramentas.</h2>
            <span>
              Estas são as linguagens e ferramentas que eu utilizei na maioria
              de meus projetos. Eu estou sempre procurando aprender e aprimorar
              minhas competências ainda mais.
            </span>
          </div>
        </div>
        <div className="skills-body--right">
          <span className="first-skill">JavaScript</span>
          <span>ReactJs</span>
          <span>Python</span>
          <span>C</span>
          <span>NodeJS</span>
          <span>PHP</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span className="dividing-skill">HTML</span>
          <span>CSS</span>
          <span>BootStrap</span>
          <span>TailwindCSS</span>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
