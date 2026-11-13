
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";

import meetingImage from "../../assets/meeting.png";

// Add verified customer testimonials here.
const defaultTestimonials = [];

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Testimonials = ({
  reviews = defaultTestimonials,
  rating = 4.9,
  reviewCount = 80,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasReviews = reviews.length > 0;

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-grid">
        {/* LEFT IMAGE CONTAINER */}
        <motion.div
          className="testimonial-visual-panel"
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {/* Background Image */}
          <motion.img
            src={meetingImage}
            alt="Professional business collaboration"
            className="testimonial-background"
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />

          {/* Image Overlay */}
          <div className="testimonial-image-overlay" />

          {/* Heading Content */}
          <motion.div
            className="testimonial-visual-heading"
            variants={contentVariants}
          >
            <span>CLIENT STORIES</span>

            <h2>
              Hear from Our
              <br />
              <span>Customer.</span>
            </h2>

            <p>
              Real experiences. Meaningful relationships. Lasting impressions.
            </p>
          </motion.div>

          {/* FLOATING RATING BOX */}
          <motion.div
            className="testimonial-rating-wrapper"
            initial={{
              opacity: 0,
              x: 70,
              y: 50,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.35,
              },
            }}
          >
            <div className="testimonial-rating-inner">
              <div className="testimonial-rating-number">{rating}</div>

              <div
                className="testimonial-rating-stars"
                aria-label={`${rating} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={19}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="testimonial-rating-label">
                ({reviewCount}+ Clients Reviews)
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT TESTIMONIAL CONTAINER */}
        <motion.div
          className="testimonial-content-panel"
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
        >
          {/* Decorative Quote Icon */}
          <motion.div
            className="testimonial-quote-icon"
            initial={{
              opacity: 0,
              rotate: -25,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <Quote size={32} />
          </motion.div>

          {/* TESTIMONIAL CAROUSEL */}
          {hasReviews ? (
            <Swiper
              className="testimonial-swiper"
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              loop={reviews.length > 1}
              speed={900}
              autoplay={
                reviews.length > 1
                  ? {
                      delay: 5500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              pagination={{
                clickable: true,
                el: ".testimonial-pagination",
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide
                  key={review._id || review.id || index}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={review._id || review.id || index}
                      className="testimonial-slide-content"
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.65,
                      }}
                    >
                      <span className="testimonial-slide-number">
                        CUSTOMER EXPERIENCE / 0{index + 1}
                      </span>

                      {/* Customer Review */}
                      <blockquote className="testimonial-quote">
                        {review.content}
                      </blockquote>

                      {/* Divider */}
                      <div className="testimonial-divider" />

                      {/* Customer Profile */}
                      <div className="testimonial-author">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="testimonial-avatar"
                          />
                        ) : (
                          <div className="testimonial-avatar testimonial-avatar-fallback">
                            {review.name?.charAt(0) || "C"}
                          </div>
                        )}

                        <div className="testimonial-author-info">
                          <h3>{review.name}</h3>
                          <span>{review.designation}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* Empty State Until Real Reviews Are Added */
            <div className="testimonial-empty-state">
              <span>OUR CUSTOMER EXPERIENCES</span>

              <h3>Every great relationship begins with trust.</h3>

              <p>
                We believe in building lasting relationships through meaningful
                experiences and exceptional service.
              </p>

              <div className="testimonial-divider" />

              <div className="testimonial-author">
                <div className="testimonial-avatar testimonial-avatar-fallback">
                  A
                </div>

                <div className="testimonial-author-info">
                  <h3>Aradhaya Group</h3>
                  <span>Building Relationships Through Trust</span>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {hasReviews && reviews.length > 1 && (
            <div
              className="testimonial-pagination"
              aria-label={`Testimonial ${activeIndex + 1} of ${reviews.length}`}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
