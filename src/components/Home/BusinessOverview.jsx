
import { motion } from "motion/react";
import {
  Gem,
  Landmark,
  UtensilsCrossed,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./BusinessOverview.css";

import bankingImage from "../../assets/bank.png";
import jewelleryImage from "../../assets/jewellary.png";
import restaurantImage from "../../assets/restaurent.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 65,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const BusinessOverview = () => {
  return (
    <section className="business-overview-section" id="about">
      <motion.div
        className="business-overview-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* 01 - Jewellery Card */}
        <motion.article
          className="overview-card jewellery-card"
          variants={cardVariants}
          whileHover={{ y: -6 }}
        >
          <div className="overview-card-top">
            <div className="overview-icon jewellery-icon">
              <Gem size={37} strokeWidth={1.3} />
            </div>

            <span className="overview-number">01.</span>

            <div className="overview-card-info">
              <h3>Jewellery</h3>
              <h4>Craftsmanship & Tradition, Timeless Elegance</h4>

              <p>
                Gold & Silver · Traditional & Modern Designs
              </p>
            </div>

            <div className="overview-stat">
              <span>Year of establishment - 2016</span>
            </div>
          </div>
        </motion.article>

        {/* 02 - Company Introduction */}
        <motion.article
          className="overview-introduction"
          variants={cardVariants}
        >
          <span className="overview-eyebrow">
            GET TO KNOW US
          </span>

          <h2>
            Bringing Elegance, Trust
            & Exceptional Experiences:
            Your Destination for
            <span> Jewellery, Banking & Dining.</span>
          </h2>

          <a href="#contact" className="overview-text-link">
            Discover Our Story
            <ArrowUpRight size={17} />
          </a>
        </motion.article>

        {/* 03 - Portrait Image */}
        <motion.article
          className="overview-portrait-card"
          variants={cardVariants}
          whileHover={{ scale: 1.025 }}
        >
          <img
            src={bankingImage}
            alt="Aradhya Group business leadership"
          />

          <div className="portrait-overlay">
            <span>Our People, Our Strength</span>
          </div>

          <span className="portrait-decoration" />
        </motion.article>

        {/* 04 - Customer Community Card */}
        <motion.article
          className="overview-community-card"
          variants={cardVariants}
          whileHover={{ y: -6 }}
        >
          <img
            src={bankingImage}
            alt="Aradhya Group architecture"
            className="community-background"
          />

          <div className="community-overlay" />

          <div className="community-eyebrow-container">
            <span className="community-eyebrow">
              COMMUNITY ENGAGEMENT
            </span>
          </div>

          <div className="community-top">
            <div className="community-avatars">
              <span>AG</span>
              <span>AG</span>
              <span>AG</span>
              <span className="community-plus">+</span>
            </div>
          </div>

          <Sparkles
            className="community-sparkle"
            size={38}
            fill="currentColor"
          />

          <div className="community-content">
            <h3>
              Building Relationships. Growing Together.
              <br />
              Celebrating Together. Creating Experiences.
            </h3>

            <h3 className="community-number">
              15+
              <br />
              Additional participants received silver coins.
            </h3>

            <p>
              Aradhya Jewellers organised a Rangoli competition,
              recognising local talent with gold and silver coin prizes.
            </p>
          </div>
        </motion.article>

        {/* 05 - Banking Card */}
        <motion.article
          className="overview-card bank-card"
          variants={cardVariants}
          whileHover={{ y: -6 }}
        >
          <div className="overview-card-top">
            <div className="overview-icon bank-icon">
              <Landmark size={27} strokeWidth={1.8} />
            </div>

            <span className="overview-number">
              02. FINANCIAL SERVICES
            </span>

            <div className="overview-card-info">
              <h3>Aradhya Financial Services</h3>
              <h4>Savings & Financial Assistance. Banking with Trust.</h4>

              <p>
                Fixed Deposits · Recurring Deposits · Gold Loans ·
                Financial Solutions · Secure Future
              </p>
            </div>

            <div className="overview-stat">
              <span>₹5K – ₹50K Daily collection loan range</span>
            </div>
          </div>
        </motion.article>

        {/* 06 - Restaurant Card */}
        <motion.article
          className="overview-card restaurant-card"
          variants={cardVariants}
          whileHover={{ y: -6 }}
        >
          <div className="overview-card-top">
            <div className="overview-icon restaurant-icon">
              <UtensilsCrossed size={27} strokeWidth={1.8} />
            </div>

            <span className="overview-number">
              03. HOSPITALITY
            </span>

            <div className="overview-card-info">
              <h3>Bar & Restaurant</h3>
              <h4>Exceptional Dining & Hospitality</h4>

              <p>
                Delicious Food · Dining · Memorable Experiences
              </p>
            </div>

            <div className="overview-stat">
              <span>A Place to Connect.</span>
              <br />
              <span>
                Hospitality-focused promotional positioning.
              </span>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default BusinessOverview;
