
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

import "./Hero.css";
import ExploreCircle from "./ExploreCircle";

import bankingbg from "../../assets/bankingbg.png";
import jewelleryImage from "../../assets/jewellary.png";
import jewellerbg2 from "../../assets/jewellerbg2.png";
import barbg from "../../assets/barbg.png";
import astrologybg from "../../assets/astrologybg.png";
import astrologybg1 from "../../assets/astrologybg1.png";

const heroSlides = [
  {
    id: "banking",
    title: "Bank",
    heading: "A Legacy of Trust.",
    highlight: "A Future of Banking Growth.",
    description:
      "Aradhya Group brings together jewellery, financial services and personalised consultancy, with a commitment to customer relationships, quality and community development.",
    image: bankingbg,
    cta: "Get Started",
    eyebrow: "BUILDING TRUST, CREATING OPPORTUNITIES.",
    path: "/bank",
  },
  {
    id: "jewellery",
    title: "Jewellery",
    heading: "Tradition in Every Design.",
    highlight: "Beauty in Every Moment.",
    description:
      "Discover gold and silver jewellery featuring traditional and contemporary designs for weddings and special occasions. ARADHYA JEWELLERS brings together skilled craftsmanship, hallmarking and customer-focused service in Nagpur.",
    image: jewellerbg2,
    cta: "Explore Collection",
    eyebrow: "TRADITIONAL CRAFTSMANSHIP, TIMELESS DESIGNS.",
    path: "/jewellery",
  },
  {
    id: "restaurant",
    title: "Bar & Restaurant",
    heading: "A Taste of Excellence.",
    highlight: "Moments to Remember.",
    description:
      "Discover a welcoming dining experience where delightful flavours, elegant ambience and warm hospitality come together to make every visit special. Experience the pleasure of sharing great food and memorable moments.",
    image: barbg,
    cta: "Explore More",
    eyebrow:
      "WHERE HOSPITALITY MEETS EXCELLENCE, AN EXPERIENCE BEYOND DINING.",
    path: "/bar-restaurant",
  },
  {
    id: "astrology",
    title: "Astrology",
    eyebrow: "ASTROLOGY & VASTU CONSULTATION",
    heading: "Discover the Wisdom",
    highlight: "of Astrology.",
    subtitle: "Traditional Knowledge. Thoughtful Guidance.",
    description:
      "Explore traditional astrological guidance, gemstone consultation and Vastu insights with Falguni Jaiswal at Aradhya.",
    highlights: [
      "Kundli & Horoscope",
      "Vastu Consultation",
      "Gemstone Guidance",
      "Graha, Rashi & Nakshatra",
    ],
    image: astrologybg1,
    cta: "Explore Astrology",
    path: "/astrology",
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
              className={`hero-text-content ${
                currentSlide.id === "astrology"
                  ? "hero-astrology-content"
                  : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Eyebrow */}
              {currentSlide.eyebrow && (
                <span className="hero-eyebrow">
                  <span className="hero-eyebrow-line" />
                  {currentSlide.eyebrow}
                </span>
              )}

              {/* Main Heading */}
              <h1 className="hero-heading">
                {currentSlide.heading}
                <br />
                <span>{currentSlide.highlight}</span>
              </h1>

              {/* Optional Subtitle */}
              {currentSlide.subtitle && (
                <h2 className="hero-subtitle">
                  {currentSlide.subtitle}
                </h2>
              )}

              {/* Description */}
              <p className="hero-description">
                {currentSlide.description}
              </p>

              {/* Optional Service Highlights */}
              {currentSlide.highlights && (
                <div
                  className="hero-highlights"
                  aria-label="Astrology services"
                >
                  {currentSlide.highlights.map((item) => (
                    <span
                      className="hero-highlight-item"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA Button */}
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
                <img src={slide.image} alt={slide.title} />
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
