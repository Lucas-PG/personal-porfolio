import { motion, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import "./stickyCursor.css";

const StickyCursor = (props) => {
  const cursorSize = props.isBtnHovered
    ? 80
    : props.isProjectHovered
    ? 200
    : 20;
  const innerCursorSize = 5;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    innerx: useMotionValue(0),
    innery: useMotionValue(0),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    mouse.innerx.set(clientX - innerCursorSize / 2);
    mouse.innery.set(clientY - innerCursorSize / 2);

    localStorage.setItem("mouseX", mouse.innerx.get());
    localStorage.setItem("mouseY", mouse.innery.get());
  };

  useEffect(() => {
    const storedX = localStorage.getItem("mouseX");
    const storedY = localStorage.getItem("mouseY");

    if (storedX && storedY) {
      mouse.x.set(parseFloat(storedX));
      mouse.y.set(parseFloat(storedY));
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <motion.div
      className={
        props.isBtnHovered
          ? "cursor-hovering"
          : props.isProjectHovered
          ? "project-hovering"
          : "cursor"
      }
      style={{
        left: mouse.x,
        top: mouse.y,
        backgroundColor: props.isBtnHovered
          ? "transparent"
          : props.isProjectHovered
          ? "rgba(0,0,0,0.5)"
          : props.isBackgroundDark
          ? "#f5f3ea"
          : "#0d0d0d",
        border: props.isProjectHovered
          ? "none"
          : props.isBackgroundDark
          ? "1px solid #f5f3ea"
          : "1px solid #0d0d0d",
      }}
    >
      <motion.div
        className={
          props.isProjectHovered ? "inner-project-hover" : "inner-cursor"
        }
        style={{
          left: mouse.innerx,
          top: mouse.innery,
          backgroundColor: props.isBackgroundDark ? "#f5f3ea" : "#0d0d0d",
        }}
      ></motion.div>
      {props.isProjectHovered && (
        <>
          <span style={{ fontSize: "24px", color: "#f5f3ea" }}>ABRIR</span>
        </>
      )}
    </motion.div>
  );
};

export default StickyCursor;
