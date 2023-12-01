import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import programmingCat from "./images/programming-cat.png";

const Home = (props) => {
  const [projectsBtnHovered, setProjectsBtnHovered] = React.useState(false);
  const [skillsHovered, setSkillsHovered] = React.useState(false);

  return (
    <div
      className="home"
      onMouseEnter={() => {
        props.handleButtonHover(false);
        setProjectsBtnHovered(false);
        setSkillsHovered(false);
      }}
    >
      <div className="home--inner">
        <div className="home--text-container">
          <h2 className="hi-my-name-is">OLÁ, EU SOU LUCAS</h2>
          <TypeAnimation
            sequence={[
              "DESENVOLVEDOR WEB",
              2000,
              "PROGRAMADOR",
              2000,
              "ESTUDANTE",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
            style={{
              fontSize: "44px",
              fontWeight: "800",
              fontFamily: "'General Sans'",
              textAlign: "center",
            }}
          />
          <div style={{ width: "100%" }}>
            <div className="projects-skills-div">
              <button
                className="projects-skills-btn"
                onMouseEnter={() => {
                  props.handleButtonHover(true);
                  setProjectsBtnHovered(true);
                }}
                onMouseLeave={() => {
                  props.handleButtonHover(false);
                  setProjectsBtnHovered(false);
                }}
              >
                {projectsBtnHovered && (
                  <TypeAnimation
                    sequence={["<>projects</>", 0]}
                    speed={40}
                    repeat={Infinity}
                    style={{ fontSize: "14px" }}
                  />
                )}
                {!projectsBtnHovered && <span>PROJETOS</span>}
              </button>
              <button
                className="projects-skills-btn"
                onMouseEnter={() => {
                  props.handleButtonHover(true);
                  setSkillsHovered(true);
                }}
                onMouseLeave={() => {
                  props.handleButtonHover(false);
                  setSkillsHovered(false);
                }}
              >
                {skillsHovered && (
                  <TypeAnimation
                    sequence={["<>Skills</>", 0]}
                    speed={40}
                    repeat={Infinity}
                    style={{ fontSize: "14px" }}
                  />
                )}
                {!skillsHovered && <span>COMPETÊNCIAS</span>}
              </button>
            </div>
          </div>
        </div>
        <img
          src={programmingCat}
          alt="programming-cat"
          className="programming-cat"
        ></img>
      </div>
      <div className="scroll">
        <span style={{}} className="scroll-span">
          scroll
        </span>
        <div className="scroll-div"></div>
        <div className="animated-div"></div>
      </div>
    </div>
  );
};

export default Home;
