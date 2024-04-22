"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ViewBaseAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      ></div>
      <motion.div
        transition={{ duration: 3 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ height: "100vh", backgroundColor: "black" }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "red" : "green",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBaseAnimation;
