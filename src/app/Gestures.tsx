"use client";

import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.7 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="example-button"
        >
          Click Me
        </motion.button>
        <motion.button
          style={{ backgroundColor: "red" }}
          whileTap={{ scale: 0.7 }}
          whileHover={{ scale: 1.05, rotate: "20.08deg" }}
          className="example-button"
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
