
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import "./ExploreCircle.css";

const ExploreCircle = ({ href = "#about" }) => {
  return (
    <motion.a
      href={href}
      className="explore-circle"
      aria-label="Explore more about Aradhay Group"
      initial={{ opacity: 0, scale: 0.65, y: 35 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      whileTap={{ scale: 0.94 }}
    >
      {/* Rotating Circular Typography */}
      <svg
        className="explore-circle-svg"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="explore-circle-path"
            d="
              M 100,100
              m -73,0
              a 73,73 0 1,1 146,0
              a 73,73 0 1,1 -146,0
            "
          />
        </defs>

        <text className="explore-circle-text">
          <textPath
            href="#explore-circle-path"
            startOffset="0%"
          >
            EXPLORE MORE  ✦  EXPLORE MORE  ✦
            EXPLORE MORE  ✦ 
          </textPath>
        </text>
      </svg>

      {/* Center Arrow */}
      <span className="explore-circle-center">
        <ArrowUpRight size={27} strokeWidth={1.8} />
      </span>

      {/* Decorative Glow */}
      <span className="explore-circle-glow" />
    </motion.a>
  );
};

export default ExploreCircle;
