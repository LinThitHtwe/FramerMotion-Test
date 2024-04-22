"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollBaseAnimation = () => {
  const { scrollYProgress } = useScroll();

  const scaleXSpring = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ["#ccc", "#764534", "#672506"]
  );

  return (
    <div>
      <motion.div
        style={{
          //scaleX: scrollYProgress,
          scaleX: scaleXSpring,
          background: background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>

      <div style={{ padding: "1.2rem", margin: "auto", maxWidth: "700px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          eligendi iusto, eum sapiente molestias? Laborum distinctio cumque
          magni iste odit illum! Omnis modi esse itaque sapiente enim laboriosam
          dolorum.
        </p>
      </div>
    </div>
  );
};

export default ScrollBaseAnimation;
