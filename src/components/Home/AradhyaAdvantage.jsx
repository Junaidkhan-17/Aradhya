
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Lightbulb,
  Trophy,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

import "./AradhyaAdvantage.css";

const advantageCards = [
  {
    id: "quality",
    title: "Uncompromised Quality",
    description:
      "From BIS Hallmarked Gold to Premium Beverages, we ensure quality, purity, and excellence across all our ventures.",
    Icon: Lightbulb,
    animation: "left",
  },
  {
    id: "trust",
    title: "Trust & Transparency",
    description:
      "Serving our community with honesty, secure banking, easy EMIs, and transparent dealings without hidden charges.",
    Icon: Trophy,
    animation: "bottom",
  },
  {
    id: "community",
    title: "Community & Care",
    description:
      "Our team is always available—ready to resolve concerns quickly and effectively.",
    Icon: UsersRound,
    animation: "right",
  },
];

const cardVariants = {
  hidden: (direction) => {
    const positions = {
      left: { x: -90, y: 0 },
      bottom: { x: 0, y: 90 },
      right: { x: 90, y: 0 },
    };

    return {
      opacity: 0,
      ...positions[direction],
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AradhyaAdvantage = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      className="aradhya-advantage-section"
      ref={sectionRef}
      aria-labelledby="advantage-heading"
    >
      <div className="advantage-container">

        {/* Section Heading */}
        <motion.div
          className="advantage-heading-wrapper"
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="advantage-eyebrow">
            THE AARADHYA ADVANTAGE
          </span>

          <h2 id="advantage-heading" className="advantage-heading">
            Building Trust,
            <br />
            Delivering <span>Excellence.</span>
          </h2>
        </motion.div>

        {/* Advantage Cards */}
        <div className="advantage-cards-grid">
          {advantageCards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <motion.article
                key={card.id}
                className="advantage-card"
                custom={card.animation}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  delay: index * 0.22,
                }}
              >
                {/* Decorative Arrow */}
                <div
                  className="advantage-card-arrow"
                  aria-hidden="true"
                >
                  <span>
                    <ArrowUpRight size={23} strokeWidth={2} />
                  </span>
                </div>

                {/* Card Content */}
                <motion.div
                  className="advantage-card-content"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{
                    delayChildren: 0.35 + index * 0.22,
                    staggerChildren: 0.16,
                  }}
                >
                  <motion.div
                    className="advantage-card-icon"
                    variants={contentVariants}
                  >
                    <Icon size={47} strokeWidth={1.35} />
                  </motion.div>

                  <motion.h3 variants={contentVariants}>
                    {card.title}
                  </motion.h3>

                  <motion.p variants={contentVariants}>
                    {card.description}
                  </motion.p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AradhyaAdvantage;
