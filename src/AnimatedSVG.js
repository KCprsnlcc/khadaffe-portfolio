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
        width="150"
        height="150"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <motion.circle
          cx="75"
          cy="75"
          r="60"
          stroke="var(--accent-primary)"
          strokeWidth="3"
          fill="none"
          animate={{ 
            r: [60, 65, 60],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Middle Circle */}
        <motion.circle
          cx="75"
          cy="75"
          r="45"
          stroke="var(--accent-secondary)"
          strokeWidth="2.5"
          fill="none"
          animate={{ 
            r: [45, 40, 45],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        {/* Inner Circle */}
        <motion.circle
          cx="75"
          cy="75"
          r="30"
          stroke="var(--accent-tertiary)"
          strokeWidth="2"
          fill="none"
          animate={{ 
            r: [30, 35, 30],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut",
            delay: 0.6
          }}
        />
        
        {/* Core Circle with Gradient */}
        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        <motion.circle
          cx="75"
          cy="75"
          r="15"
          fill="url(#coreGradient)"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Decorative elements - code symbols */}
        <motion.path
          d="M50 65 L40 75 L50 85"
          stroke="var(--accent-tertiary)"
          strokeWidth="2"
          fill="none"
          animate={{ 
            stroke: ["var(--accent-tertiary)", "var(--accent-primary)", "var(--accent-tertiary)"],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.path
          d="M100 65 L110 75 L100 85"
          stroke="var(--accent-tertiary)"
          strokeWidth="2"
          fill="none"
          animate={{ 
            stroke: ["var(--accent-tertiary)", "var(--accent-primary)", "var(--accent-tertiary)"],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedSVG;
