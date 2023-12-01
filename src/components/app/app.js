import Lenis from "@studio-freight/lenis";
import React from "react";
import Header from "../header/header";
import Home from "../home/home";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Cursor from "../stickyCursor/stickyCursor";
import "./app.css";

const lenis = new Lenis();

const App = () => {
  React.useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const firstThreshold = window.innerHeight;
      const secondThreshold = firstThreshold + 1500;

      if (window.scrollY > firstThreshold && window.scrollY < secondThreshold) {
        setBackgroundDark(false);
      } else if (window.scrollY < firstThreshold) {
        setBackgroundDark(true);
      }

      if (window.scrollY > secondThreshold) {
        setBackgroundDark(true);
      } else if (
        window.scrollY < secondThreshold &&
        window.scrollY > firstThreshold
      ) {
        setBackgroundDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [isBackgroundDark, setBackgroundDark] = React.useState(true);
  const [isBtnHovered, setIsHovered] = React.useState(false);
  const [isProjectHovered, setProjectHovered] = React.useState(false);

  const style = {
    backgroundColor: isBackgroundDark ? "#0d0d0d" : "#f5f3ea",
    position: "relative",
  };

  const handleButtonHover = (isHovered) => {
    setIsHovered(isHovered);
  };

  const handleProjectHover = (projectHover) => {
    setProjectHovered(projectHover);
  };

  return (
    <div id="body" className="body" style={style}>
      <Cursor
        isBtnHovered={isBtnHovered}
        isBackgroundDark={isBackgroundDark}
        isProjectHovered={isProjectHovered}
      />
      <Header
        handleButtonHover={handleButtonHover}
        isBackgroundDark={isBackgroundDark}
      />
      <Home handleButtonHover={handleButtonHover} />
      <Skills isBackgroundDark={isBackgroundDark} />
      <Projects
        isBackgroundDark={isBackgroundDark}
        isProjectHovered={isProjectHovered}
        handleProjectHover={handleProjectHover}
      />
      <span
        style={{
          position: "absolute",
          bottom: "0px",
          left: "10%",
          color: "#f5f3ea",
        }}
      >
        &copy;Lucas Puhl Gasperin
      </span>
    </div>
  );
};

export default App;
