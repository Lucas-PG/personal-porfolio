// Header.js
import React from "react";
import Magneticbutton from "../magneticBtn/magneticBtn";
import "./header.css";
import svg144 from "./images/144.svg";

const Header = (props) => {
  const [isNameFull, setNameFull] = React.useState(false);

  const handleMouseEnter = () => {
    setNameFull(true);
  };

  const handleMouseLeave = () => {
    setNameFull(false);
  };

  return (
    <header
      style={{
        backgroundColor: props.isBackgroundDark ? "#0d0d0d" : "#f5f3ea",
      }}
    >
      <div style={{ padding: "3rem 8rem" }}>
        <Magneticbutton>
          <a
            className="logo"
            onMouseEnter={() => {
              handleMouseEnter();
              props.handleButtonHover(true);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
              props.handleButtonHover(false);
            }}
            href="/"
          >
            <span
              style={{
                color: props.isBackgroundDark ? "#f5f3ea" : "#0d0d0d",
              }}
            >
              LUCAS
            </span>
            <span className={isNameFull ? "full-name" : "not-showing"}>
              {" "}
              P. GASPERIN
            </span>
            <img
              src={svg144}
              alt="svg"
              className="svg144"
              style={{
                backgroundColor: props.isBackgroundDark
                  ? "transparent"
                  : "#0d0d0d",
                borderRadius: "50%",
              }}
            />
          </a>
        </Magneticbutton>
      </div>
      <div className="header--lets-talk" style={{ padding: "3rem 8rem" }}>
        <Magneticbutton>
          <button
            type="button"
            onMouseEnter={() => props.handleButtonHover(true)}
            onMouseLeave={() => props.handleButtonHover(false)}
            className="lets-talk-btn"
            style={{ color: props.isBackgroundDark ? "#f5f3ea" : "#0d0d0d" }}
          >
            Vamos Conversar.
          </button>
        </Magneticbutton>
      </div>
    </header>
  );
};

export default Header;
