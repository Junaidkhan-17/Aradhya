
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

import "./BusinessVerticals.css";

// Replace these image filenames with your actual business images.
import jewellerybg2 from "../../assets/jewellerbg2.png";
import bankImage from "../../assets/bankbg.png";
import astrologyImage from "../../assets/astrologybg.png";
import restaurantImage from "../../assets/restaurent.png";
import beerShopImage from "../../assets/barbg.png";

const businesses = [
  {
    id: "jewellery",
    title: "Aaradhya Jewellers",
    description:
      "Timeless elegance and BIS Hallmarked craftsmanship. Discover our premium collection of gold and diamond jewellery with easy EMI options.",
    action: "Explore Jewellery",
    path: "/jewellery",
    image: jewellerybg2,
    imageAlt: "A bride wearing traditional jewellery",
    direction: "left",
  },
  {
    id: "bank",
    title: "Aaradhya Credit Bank",
    description:
      "Banking on trust. We provide secure financial solutions, high-interest Fixed Deposits (15%), and quick gold loans at 1.5% interest.",
    action: "Explore Banking",
    path: "/bank",
    image: bankImage,
    imageAlt: "Aaradhya banking office",
    direction: "right",
  },
  {
    id: "astrology",
    title: "Aaradhya Astrology",
    description:
      "Navigate your destiny with expert guidance. Get certified astrological consultations, Vastu tips, and free Kundli making.",
    action: "Explore Astrology",
    path: "/astrology",
    image: astrologyImage,
    imageAlt: "Astrology consultation workspace",
    direction: "left",
  },
  {
    id: "restaurant",
    title: "Aaradhya Bar & Restro",
    description:
      "Unwind in style! Experience an all-sophisticated ambience, signature cocktails, delicious food, and the perfect vibe for your evenings.",
    action: "Explore Bar",
    path: "/bar-restaurant",
    image: restaurantImage,
    imageAlt: "Aaradhya bar and restaurant interior",
    direction: "right",
  },
  {
    id: "beer-shop",
    title: "Aaradhya Beer Shop",
    description:
      "Your destination for premium and chilled beverages. Enjoy a wide selection of top-quality beers at the best market prices in Nagpur.",
    action: "Explore Beverages",
    path: "/beer-shop",
    image: beerShopImage,
    imageAlt: "Aaradhya beer shop interior",
    direction: "left",
  },
];

const introVariants = {
  hidden: {
    opacity: 0,
    x: -65,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const BusinessVerticals = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  return (
    <section
      className="business-verticals-section"
      ref={sectionRef}
      aria-labelledby="business-verticals-heading"
    >
      <div className="business-verticals-container">

        {/* Introductory Content */}
        <motion.div
          className="business-verticals-intro"
          variants={introVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="business-verticals-eyebrow">
            OUR BUSINESS VERTICALS
          </span>

          <h2 id="business-verticals-heading">
            Diverse
            <br />
            Businesses, One
            <br />
            Vision of
            <br />
            <span>Excellence.</span>
          </h2>
{/*
          <a
            href="tel:+919372221118"
            className="business-contact-button"
            aria-label="Call Aaradhya Group at +91 93722 21118"
          >
            <span>+91 93722 21118</span>
            <span className="business-contact-icon">
              <Phone size={17} fill="currentColor" />
            </span>
          </a>
          */}
        </motion.div>

        {/* Business Cards */}
        {businesses.map((business, index) => {
          const fromLeft = business.direction === "left";

          return (
            <motion.a
              key={business.id}
              href={business.path}
              className={`business-vertical-card business-card-${business.id}`}
              initial={{
                opacity: 0,
                x: fromLeft ? -75 : 75,
                y: 25,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      x: fromLeft ? -75 : 75,
                      y: 25,
                    }
              }
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={`${business.action} - ${business.title}`}
            >
              <img
                className="business-card-image"
                src={business.image}
                alt={business.imageAlt}
                loading="lazy"
              />

              <span className="business-card-overlay" />

              <div className="business-card-content">
                <motion.h3
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 18 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.45 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {business.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 18 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.55 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {business.description}
                </motion.p>

                <motion.span
                  className="business-card-action"
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 14 }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.65 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {business.action}

                  <span className="business-card-arrow">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </span>
                </motion.span>
              </div>
            </motion.a>
          );
        })}

      </div>
    </section>
  );
};

export default BusinessVerticals;
