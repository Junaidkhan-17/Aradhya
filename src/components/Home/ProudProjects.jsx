
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./ProudProjects.css";

import bankingImage from "../../assets/bank.png";
import jewelleryImage from "../../assets/jewellary.png";
import restaurantImage from "../../assets/restaurent.png";

const projects = [
  {
    id: "jewellery",
    number: "01",
    title: "Jewellery",
    subtitle: "The Art of Timeless Elegance",
    description:
      "Discover exceptional jewellery crafted with attention to detail, timeless beauty and a passion for fine craftsmanship.",
    image: jewelleryImage,
    category: "LUXURY JEWELLERY",
  },
  {
    id: "banking",
    number: "02",
    title: "Banking",
    subtitle: "Building Financial Confidence",
    description:
      "Experience trusted banking solutions designed to support individuals, businesses and their financial aspirations.",
    image: bankingImage,
    category: "BANKING & FINANCE",
  },
  {
    id: "restaurant",
    number: "03",
    title: "Bar & Restaurant",
    subtitle: "Where Every Moment Becomes Special",
    description:
      "Explore exceptional dining, welcoming ambience and memorable experiences created around great food and hospitality.",
    image: restaurantImage,
    category: "HOSPITALITY & DINING",
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
          Breaking Boundaries,
          <br />
          Building <span>Dreams.</span>
        </h2>

        <p>
          Discover the businesses, experiences and values
          that define the Aradhay Group.
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
              <article className="proud-project-card">

                {/* PROJECT IMAGE */}
                <img
                  src={project.image}
                  alt={`${project.title} - Aradhay Group`}
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
                    <span>{project.number} / 03</span>
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
