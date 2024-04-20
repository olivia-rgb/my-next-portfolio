"use client"
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animate = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: "100vh" });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "100vh" }}
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{ position: "relative" }} // Ensures the animation stays within the flow of the document
    >
      {children}
    </motion.div>
  );
};

export default Animate;
