
import { motion, useReducedMotion } from "motion/react";

import "./Experts.css";

// Replace these image paths with your actual asset filenames.
import Boss1 from "../../assets/boss1.png";
import manager1 from "../../assets/manager1.png";
import maam from "../../assets/maam.png";

const experts = [
  {
    id: 1,
    name: "Ashish Manipiya",
    role: "Founder & CEO",
    image: Boss1,
    imageAlt: "Ashish Manipiya, Founder and CEO of Aradhya Group",
    size: "large",
  },
  {
    id: 2,
    name: "Falguni Jaiswal",
    role: "Astrology Consultations",
    image: maam,
    imageAlt: "Falguni Jaiswal, Astrology Consultant",
    size: "standard",
  },
  {
    id: 3,
    name: "Our Team",
    role: "Manager",
    image: manager1,
    imageAlt: "Aradhya Group Manager",
    size: "standard",
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 90,
    y: 25,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.15,
      delay: index * 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Experts = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="experts-section" id="experts">
      <div className="experts-container">
        {/* Section Heading */}
        <motion.div
          className="experts-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.4,
          }}
        >
          <span className="experts-eyebrow">
            MEET THE EXPERTS
          </span>

          <h2>
            The Visionaries Behind
            <span>Aradhya's Success</span>
          </h2>
        </motion.div>

        {/* Expert Cards */}
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <motion.article
              key={expert.id}
              className={`expert-card expert-card-${expert.size}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -9,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }
              }
            >
              <div className="expert-image-wrapper">
                <img
                  src={expert.image}
                  alt={expert.imageAlt}
                  className="expert-image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="expert-image-overlay" />
              </div>

              <div className="expert-info">
                <h3>{expert.name}</h3>

                <span className="expert-role">
                  {expert.role}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
