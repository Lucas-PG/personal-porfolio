import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./projects.css";

const Projects = (props) => {
  return (
    <div className="projects">
      <div
        className="projects--header"
        style={{ color: props.isBackgroundDark ? "#f5f3ea" : "#0d0d0d" }}
      >
        <FontAwesomeIcon
          icon={faCode}
          size="4x"
          className="fa-code-header-left"
        />
        <h2>PROJETOS</h2>
        <FontAwesomeIcon
          icon={faCode}
          size="4x"
          className="fa-code-header-right"
        />
      </div>
      <div className="projects--body">
        <div className="single-project first-project">
          <div
            className="single-project--img"
            onMouseEnter={() => props.handleProjectHover(true)}
            onMouseLeave={() => props.handleProjectHover(false)}
          ></div>
          <div className="single-project--description">
            <h2>XXXXXXXXXXXXXXXX</h2>
            <span>
              XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
            </span>
            <p>Tailwind CSS JavaScripts</p>
          </div>
        </div>
        <div className="single-project second-project">
          <div className="single-project--description">
            <h2>XXXXXXXXXXXXXXXX</h2>
            <span>
              XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
            </span>
            <p>Tailwind CSS JavaScripts</p>
          </div>
          <div
            className="single-project--img"
            onMouseEnter={() => props.handleProjectHover(true)}
            onMouseLeave={() => props.handleProjectHover(false)}
          ></div>
        </div>
        <div className="single-project third-project">
          <div
            className="single-project--img"
            onMouseEnter={() => props.handleProjectHover(true)}
            onMouseLeave={() => props.handleProjectHover(false)}
          ></div>
          <div className="single-project--description">
            <h2>XXXXXXXXXXXXXXXX</h2>
            <span>
              XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
            </span>
            <p>Tailwind CSS JavaScripts</p>
          </div>
        </div>
        <div className="single-project fourth-project">
          <div className="single-project--description">
            <h2>XXXXXXXXXXXXXXXX</h2>
            <span>
              XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX
            </span>
            <p>Tailwind CSS JavaScripts</p>
          </div>
          <div
            className="single-project--img"
            onMouseEnter={() => props.handleProjectHover(true)}
            onMouseLeave={() => props.handleProjectHover(false)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
