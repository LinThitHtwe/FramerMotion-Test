"use client";

import React from "react";
import { motion } from "framer-motion";
const BasicOfMotion = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.div
        initial={{
          rotate: "0deg",
        }}
        animate={{
          rotate: "180deg",
        }}
        transition={{
          duration: 3,
          //type: "spring",
          ease: "circInOut",
        }}
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
      ></motion.div>
    </div>
  );
};

export default BasicOfMotion;
