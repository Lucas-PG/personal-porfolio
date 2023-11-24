"use client";
import { motion } from "framer-motion";
import React from "react";
import "./magneticBtn.css";

const Magneticbuton = (props) => {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const scaleFactor = 0.7;

    const x = (clientX - (left + width / 2)) * scaleFactor;
    const y = (clientY - (top + height / 2)) * scaleFactor;
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 50, mass: 1 }}
      className="magnetic"
    >
      {props.children}
    </motion.div>
  );
};

export default Magneticbuton;
