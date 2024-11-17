import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0, filter: "blur(10px)" },
    visible: {
      pathLength: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        pathLength: { delay: 0.5, type: "spring", duration: 3 },
        opacity: { delay: 0.2, duration: 0.01 },
      },
    },
  };

  return (
    <div>
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M3 1L15 1V15H1V3L8 10V4"
          stroke="black"
          strokeWidth={2}
          variants={draw}
        />
      </motion.svg>
    </div>
  );
}
