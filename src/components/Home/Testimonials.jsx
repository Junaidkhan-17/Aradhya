
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sunita Deshmukh",
    role: "Bride's Mother",
    initials: "SD",
    review:
      "\"Aaradhya Jewellers made my daughter's wedding special. The 'Gold on EMI' scheme was a blessing for us. 100% BIS Hallmark purity and the designs are absolutely stunning. Highly recommended!\"",
  },
  {
    id: 2,
    name: "Rajesh Verma",
    role: "Local Business Owner",
    initials: "RV",
    review:
      "\"I have been banking with Aaradhya Credit Cooperative Bank for years. Their 15% interest on FD is the best in the market. Also, their 1.5% gold loan helped me expand my business without any hassle.\"",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Client",
    initials: "AS",
    review:
      "\"Falguni Jaiswal ji’s astrological guidance gave me clarity during a tough phase. The free Kundli making and Vastu tips at Aaradhya Jewellers are truly a unique initiative. Thank you for the peace of mind!\"",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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
    x: 75,
    y: 15,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.1,
      delay: index * 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Testimonials = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const shouldReduceMotion = useReducedMotion();

  // Determine how many cards fit in the current viewport.
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 600) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 991) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    testimonials.length - visibleCards
  );

  const scrollToCard = (index) => {
    const nextIndex = Math.min(
      Math.max(index, 0),
      maxIndex
    );

    const targetCard = cardRefs.current[nextIndex];

    if (!targetCard || !carouselRef.current) return;

    carouselRef.current.scrollTo({
      left: targetCard.offsetLeft - carouselRef.current.offsetLeft,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });

    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const containerLeft = carouselRef.current.scrollLeft;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const distance = Math.abs(card.offsetLeft - containerLeft);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(Math.min(closestIndex, maxIndex));
  };

  const handlePrevious = () => {
    scrollToCard(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToCard(activeIndex + 1);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-pattern" aria-hidden="true" />

      <div className="testimonials-container">
        {/* Section Heading */}
        <motion.div
          className="testimonials-heading"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <span className="testimonials-eyebrow">
            CUSTOMER TESTIMONIALS
          </span>

          <h2>
            Trusted by Customers,
            <br />
            Valued for Excellence
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="testimonials-carousel-wrapper"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
        >
          <div
            className="testimonials-track"
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="testimonial-card"
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
                          duration: 0.35,
                          ease: "easeOut",
                        },
                      }
                }
              >
                {/* Customer Information */}
                <div className="testimonial-user">
                  <div
                    className={`testimonial-avatar avatar-${index + 1}`}
                    aria-label={`${testimonial.name} initials`}
                  >
                    {testimonial.initials}
                  </div>

                  <div className="testimonial-user-info">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>

                {/* Review */}
                <p className="testimonial-review">
                  {testimonial.review}
                </p>

                {/* Rating */}
                <div
                  className="testimonial-rating"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="testimonials-controls">
            <button
              type="button"
              className="testimonial-arrow"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={19} />
            </button>

            <div className="testimonial-pagination">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`testimonial-dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to testimonial group ${index + 1}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                />
              ))}
            </div>

            <button
              type="button"
              className="testimonial-arrow"
              onClick={handleNext}
              disabled={activeIndex >= maxIndex}
              aria-label="Next testimonials"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
