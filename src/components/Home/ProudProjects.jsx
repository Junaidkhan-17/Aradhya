
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./ProudProjects.css";

import bankingbg from "../../assets/bankingbg.png";
import jewellerbg from "../../assets/jewellerbg.png";
import barbg from "../../assets/barbg.png";
import astrologybg1 from "../../assets/astrologybg1.png";

const projects = [
  {
    id: "jewellery",
    number: "01",
    title: "Aradhya Jewellers",
    subtitle:
      "Craftsmanship Rooted in Tradition. The Art of Timeless Elegance.",
    description:
      "Discover beautifully crafted gold and silver jewellery, wedding collections and special-occasion designs, backed by a focus on craftsmanship, hallmarking and customer trust.",
    image: jewellerbg,
    category: "LUXURY JEWELLERY",
  },
  {
    id: "banking",
    number: "02",
    title: "Aradhya Financial & Banking Services",
    subtitle:
      "Savings & Financial Solutions | Fixed Deposits · Recurring Deposits · Gold Loans",
    description:
      "Explore financial services covering savings, deposit facilities, gold-backed loans and financial assistance for individuals and local business owners.",
    image: bankingbg,
    category: "BANKING & FINANCE",
  },
  {
    id: "restaurant",
    number: "03",
    title: "Bar & Restaurant",
    subtitle:
      "Where Every Moment Becomes Special | Dining · Hospitality · Memorable Experiences",
    description:
      "Discover a welcoming dining atmosphere designed around enjoyable food, warm hospitality and memorable moments.",
    image: barbg,
    category: "HOSPITALITY & DINING",
  },
  {
    id: "astrology",
    number: "04",
    title: "Astrology & Vastu",
    subtitle:
      "Traditional Wisdom, Personal Guidance | Kundli · Gemstones · Vastu Consultation",
    description:
      "Explore traditional astrological guidance with Falguni Jaiswal, covering Kundli and horoscope consultation, Vastu guidance, gemstone selection, planetary influences, Rashi and Nakshatra insights, and traditional astrological remedies.",
    image: astrologybg1,
    category: "ASTROLOGY & GEMSTONE CONSULTATION",
  },
];

// Duplicate slides to provide enough content for seamless looping.
const carouselProjects = [...projects, ...projects];

const ProudProjects = () => {
  return (
    <section className="proud-projects-section" id="projects">
      {/* SECTION HEADING */}
      <motion.div
        className="proud-projects-heading"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="proud-projects-eyebrow">
          PROUD PROJECTS
        </span>

        <h2>
          Breaking Boundaries, Building Trust,
          <br />
          Growing Through <span>Every Dream Business.</span>
        </h2>

        <p>
          Discover the businesses, services and community initiatives
          that shape the Aradhya journey.
        </p>
      </motion.div>

      {/* IMAGE CAROUSEL */}
      <motion.div
        className="proud-projects-carousel-wrapper"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Swiper
          className="proud-projects-swiper"
          modules={[Autoplay, Pagination]}
          slidesPerView={2.05}
          spaceBetween={28}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".proud-projects-pagination",
          }}
          allowTouchMove={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 14,
            },
            375: {
              slidesPerView: 1.12,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 1.25,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 1.65,
              spaceBetween: 22,
            },
            1200: {
              slidesPerView: 2.05,
              spaceBetween: 28,
            },
          }}
        >
          {carouselProjects.map((project, index) => (
            <SwiperSlide key={`${project.id}-${index}`}>
              <article className={`proud-project-card project-${project.id}`}>
                {/* PROJECT IMAGE */}
                <img
                  src={project.image}
                  alt={`${project.title} - Aradhya Group`}
                  className="proud-project-image"
                  loading="lazy"
                />

                {/* DARK OVERLAY */}
                <div className="proud-project-overlay" />

                {/* DEFAULT IMAGE CONTENT */}
                <div className="proud-project-default">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                {/* HOVER CONTENT */}
                <div className="proud-project-hover-content">
                  <div className="project-hover-top">
                    <span>
                      {project.number} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="project-hover-line" />
                  </div>

                  <div className="project-hover-details">
                    <span className="project-hover-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <h4>{project.subtitle}</h4>

                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CAROUSEL PAGINATION */}
        <div className="proud-projects-pagination" />
      </motion.div>
    </section>
  );
};

export default ProudProjects;
