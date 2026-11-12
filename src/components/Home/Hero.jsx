
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@mui/material";
import { ArrowRight, Sparkles } from "lucide-react";

import "./Hero.css";
import ExploreCircle from "./ExploreCircle";
import bankingImage from "../../assets/bank.png";
import jewelleryImage from "../../assets/jewellary.png";
import restaurantImage from "../../assets/restaurent.png";

const heroSlides = [
  {
    id: "banking",
    title: "Bank",
    heading: "Leading the",
    highlight: "Future of Banking.",
    description:
      "Committed to delivering secure, reliable and innovative financial solutions that empower individuals and businesses. With a focus on trust, transparency and financial growth.",
    image: bankingImage,
    cta: "Get Started",
    eyebrow: "The Bank for Your Success",
    path: "/bank",
  },
  {
    id: "jewellery",
    title: "Jewellery",
    heading: "Elegance that",
    highlight: "Defines Every Moment.",
    description:
      "Discover exceptional craftsmanship, timeless designs and exquisite jewellery created to celebrate life's most beautiful moments.",
    image: jewelleryImage,
    cta: "Explore Collection",
    eyebrow: "Crafted for Generations",
    path: "/jewellery",
  },
  {
    id: "restaurant",
    title: "Bar & Restaurant",
    heading: "Where Every",
    highlight: "Moment Becomes Special.",
    description:
      "Experience exceptional hospitality, inviting ambience and memorable dining experiences designed to bring people together.",
    image: restaurantImage,
    cta: "Explore More",
    eyebrow: "An Experience Beyond Dining",
    path: "/bar-restaurant",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide];

  const handleSlideChange = (index) => {
    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  const handleExplore = () => {
    // Navigate to the selected business page when its route is available.
    window.location.href = currentSlide.path;
  };

  return (
    <section className="hero-section" id="home">

      {/* Background Image */}
      <div className="hero-background">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            className="hero-background-image"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
            }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 5, ease: "linear" },
            }}
          />
        </AnimatePresence>

        <div className="hero-gradient-overlay" />
      </div>

      {/* Main Hero Content */}
      <div className="hero-content-wrapper">

        <div className="hero-content">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              className="hero-text-content"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="hero-eyebrow">
                <span className="hero-eyebrow-line" />
                {currentSlide.eyebrow}
              </span>

              <h1 className="hero-heading">
                {currentSlide.heading}
                <br />
                <span>{currentSlide.highlight}</span>
              </h1>

              <p className="hero-description">
                {currentSlide.description}
              </p>

              <Button
                className="hero-cta-button"
                onClick={handleExplore}
                endIcon={
                  <span className="hero-cta-icon">
                    <ArrowRight size={21} />
                  </span>
                }
                aria-label={`${currentSlide.cta} - ${currentSlide.title}`}
              >
                {currentSlide.cta}
              </Button>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bottom Thumbnail Navigation */}
        <div className="hero-bottom">

          <div
            className="hero-thumbnails"
            role="group"
            aria-label="Select business"
          >
            {heroSlides.map((slide, index) => (
              <motion.button
                key={slide.id}
                type="button"
                className={`hero-thumbnail ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Show ${slide.title}`}
                aria-pressed={activeSlide === index}
                whileHover={{ y: -6, scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                />
              </motion.button>
            ))}
          </div>

        </div>
        {/* Explore Circle */}
        <ExploreCircle href="#about" />
        
      </div>

    </section>
  );
};

export default Hero;
