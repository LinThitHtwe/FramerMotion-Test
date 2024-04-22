"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const BasicOfMotion = () => {
  const [isVisiable, setIsVisable] = useState(true);

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisable(!isVisiable)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisiable && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [20, -60, 30, 0, -120],
            }}
            transition={{
              duration: 3,
              //type: "spring",
              ease: "circInOut",
              times: [0, 0.15, 0.2, 0.8, 0.95, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
