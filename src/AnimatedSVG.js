import React from "react";
import { motion } from "framer-motion";

const AnimatedSVG = () => {
  return (
    <motion.div
      className="svg-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="60"
          cy="60"
          r="40"
          stroke="#26a69a"
          strokeWidth="3"
          fill="none"
          animate={{ r: [40, 45, 40] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedSVG;
