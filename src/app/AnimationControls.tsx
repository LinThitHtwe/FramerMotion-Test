"use client";
import { motion, useAnimationControls } from "framer-motion";
import React from "react";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip Me
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          backgroundColor: "black",
          borderRadius: 10,
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
