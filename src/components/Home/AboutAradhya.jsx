
import { useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useRef } from "react";
import { ArrowRight, MoveUpRight } from "lucide-react";

import "./AboutAradhya.css";

// Director image — replace this filename with your actual image.
//import directorImage from "../../assets/director.png";
import boss1 from "../../assets/boss1.png";

// Business logos
import jewelleryLogo from "../../assets/logo1.png";
import retailLogo from "../../assets/logo5.png";
import bankingLogo from "../../assets/logo2.png";
import restaurantLogo from "../../assets/logo3.png";
import astrologyLogo from "../../assets/logo4.png";

const businessVerticals = [
  "Jewellery & Lifestyle",
  "Banking & Financial Services",
  "Retail & Beverages",
  "Bar & Restaurant",
  "Astrology & Vastu Guidance",
];

const businessLogos = [
  {
    id: "jewellery",
    name: "Aradhya Jewellers",
    image: jewelleryLogo,
  },
  {
    id: "retail",
    name: "Aradhya Retail & Beverages",
    image: retailLogo,
  },
  {
    id: "banking",
    name: "Mahila Urban Credit Co-operative Society",
    image: bankingLogo,
  },
  {
    id: "restaurant",
    name: "Aradhya Restaurant and Bar",
    image: restaurantLogo,
  },
  {
    id: "astrology",
    name: "Aradhya Astrology",
    image: astrologyLogo,
  },
];

const rightContentVariants = {
  hidden: {
    opacity: 0,
    x: 65,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const DirectorCounter = ({ isInView }) => {
  const count = useMotionValue(0);

  const roundedCount = useTransform(count, (value) =>
    String(Math.round(value)).padStart(1, "0")
  );

  useEffect(() => {
    const controls = animate(count, isInView ? 5 : 0, {
      duration: 3.2,
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [isInView, count]);

  return (
    <motion.span className="about-counter-number">
      {roundedCount}
    </motion.span>
  );
};

const AboutAradhya = () => {
  const sectionRef = useRef(null);

  // Animation reverses when the section leaves the viewport.
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: false,
  });

  return (
    <section
      className="about-aradhya-section"
      ref={sectionRef}
      aria-labelledby="about-aradhya-heading"
    >
      <div className="about-aradhya-container">

        {/* =================================
            TOP CONTENT
        ================================= */}

        <div className="about-main-grid">

          {/* Director Image */}
          <motion.div
            className="about-director-image-wrapper"
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -100 }
            }
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-director-image">
              <img
                src={boss1}
                alt="Ashish Manpiya, Director of Aradhya Group"
                loading="lazy"
              />
            </div>

            {/* Director Information Card */}
            <motion.div
              className="about-director-info"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 35 }
              }
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="director-role">
                Director:
              </span>

              <h3>Ashish Manpiya</h3>

              <span className="director-contact-label">
                Contact Number:
              </span>

              <a href="tel:+919372221118">
                +91 93722 21118
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="about-right-content">

            {/* Eyebrow */}
            <motion.div
              className="about-eyebrow-wrapper"
              variants={rightContentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="about-eyebrow">
                ABOUT ARADHYA GROUP
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="about-aradhya-heading"
              className="about-main-heading"
              variants={rightContentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Driving Growth Through
              <br />
              Diverse <span>Businesses</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="about-description"
              variants={rightContentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.9,
                delay: 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Under the leadership of Ashish Manpiya, Director
              of Aradhya Group, we bring together five diverse
              business ventures with a shared vision of trust,
              quality, and excellence. Our businesses span
              jewellery, banking, retail, hospitality, and
              astrology.
            </motion.p>

            {/* Business Verticals and Counter */}
            <div className="about-details-grid">

              {/* Business List */}
              <motion.ul
                className="about-business-list"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {businessVerticals.map((business, index) => (
                  <motion.li
                    key={business}
                    variants={rightContentVariants}
                    transition={{
                      duration: 0.7,
                      delay: 0.65 + index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {business}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Business Counter */}
              <motion.div
                className="about-business-counter"
                initial={{
                  opacity: 0,
                  x: 45,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 45 }
                }
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="about-counter-top">
                  <DirectorCounter isInView={isInView} />
                  <span className="about-counter-plus">+</span>
                </div>

                <div className="about-counter-caption">
                  <MoveUpRight
                    className="about-counter-decoration"
                    size={43}
                    strokeWidth={1.3}
                  />

                  <span>
                    Business
                    <br />
                    Verticals Under
                    <br />
                    One Group
                  </span>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="/about"
              className="about-learn-more"
              variants={rightContentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.8,
                delay: 1.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>Learn More Here</span>

              <span className="about-learn-more-icon">
                <ArrowRight size={20} strokeWidth={2.2} />
              </span>
            </motion.a>
          </div>
        </div>

        {/* =================================
            BUSINESS LOGO STRIP
        ================================= */}

        <div className="about-business-logos">
          {businessLogos.map((business, index) => (
            <motion.div
              className="about-business-logo-item"
              key={business.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 35 }
              }
              transition={{
                duration: 0.75,
                delay: 1.15 + index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={business.image}
                alt={business.name}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutAradhya;
