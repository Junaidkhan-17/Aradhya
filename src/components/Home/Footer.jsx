
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import "./Footer.css";

import logo1 from "../../assets/logo1.png";
//import footerTeamImage from "../../assets/footer-team.png";

const businessLinks = [
  { label: "Aradhya Jewellers", path: "/jewellery" },
  { label: "Aradhya Credit Bank", path: "/bank" },
  { label: "Aradhya Beer Shop", path: "/beer-shop" },
  { label: "Aradhya Bar & Restro", path: "/bar-restaurant" },
  { label: "Aradhya Astrology", path: "/astrology" },
  { label: "Innovation Hub", path: "/innovation-hub" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Team Member", path: "/team" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Feedback", path: "/feedback" },
];

const footerEase = [0.22, 1, 0.36, 1];

const revealLeft = {
  hidden: { opacity: 0, x: -65, y: 12 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.05, ease: footerEase },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 65, y: 12 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.05, ease: footerEase },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: footerEase },
  },
};

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubscribe = async (data) => {
    // Connect your newsletter API/service here when the backend is ready.
    console.info("Newsletter subscription:", data.email);

    setSubscribed(true);
    reset();
  };

  return (
    <footer className="home-footer">
      <div className="footer-main-background">
        <div className="footer-pattern" />

        <div className="footer-container">
          {/* Newsletter Subscription */}
          <motion.section
            className="footer-newsletter"
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-copy">
                <span className="footer-newsletter-eyebrow">
                  STAY CONNECTED WITH ARADHYA
                </span>

                <h2>
                  Subscribe for Latest
                  <br />
                  Offers &amp; Updates
                </h2>

                <p>
                  Get the latest updates, business news and special
                  announcements from Aradhya Group.
                </p>

                <form
                  className="footer-subscribe-form"
                  onSubmit={handleSubmit(onSubscribe)}
                  noValidate
                >
                  <div className="footer-input-wrap">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      {...register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="Subscribe to newsletter"
                    >
                      <span>Send Message</span>
                      <span className="footer-submit-icon">
                        <ArrowRight size={17} />
                      </span>
                    </button>
                  </div>

                  {errors.email && (
                    <span className="footer-form-message error">
                      {errors.email.message}
                    </span>
                  )}

                  {subscribed && (
                    <span className="footer-form-message success">
                      Thank you! Your email has been received.
                    </span>
                  )}
                </form>
              </div>

              <div className="footer-newsletter-image">
                <img
                  src={logo1}
                  alt="Aradhya Group team"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.section>

          {/* Footer Columns */}
          <div className="footer-content-grid">
            {/* Brand Column */}
            <motion.div
              className="footer-brand-column"
              variants={revealLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link
                to="/"
                className="footer-logo-link"
                aria-label="Aradhya Group home"
              >
                <img src={logo1} alt="Aradhya Group" />
              </Link>

              <h3>
                Building Trust. Creating
                <br />
                Opportunities. Growing
                <br />
                Together.
              </h3>

              <p className="footer-brand-description">
                A group built on trust, quality, relationships and
                opportunities across diverse business verticals.
              </p>

              <div className="footer-social-links">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>

            {/* Business Links */}
            <motion.div
              className="footer-links-column"
              variants={revealRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.12 }}
            >
              <h4>Our Businesses</h4>

              <ul>
                {businessLinks.map((item, index) => (
                  <motion.li
                    key={item.path}
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link to={item.path}>
                      <span>{item.label}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-links-column"
              variants={revealRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.25 }}
            >
              <h4>Quick Links</h4>

              <ul>
                {quickLinks.map((item, index) => (
                  <motion.li
                    key={item.path}
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ delay: index * 0.09 }}
                  >
                    <Link to={item.path}>
                      <span>{item.label}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Office Details */}
            <motion.div
              className="footer-office-column"
              variants={revealRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.38 }}
            >
              <h4>Our Office</h4>

              <p className="footer-director">
                Director: Ashish Manpiya
              </p>

              <div className="footer-contact-item">
                <MapPin size={15} />
                <p>
                  Sharda Chowk, Ganeshnagar,
                  <br />
                  Nandanwan, Nagpur,
                  <br />
                  Maharashtra 440024
                </p>
              </div>

              <p className="footer-office-hours">
                Mon - Sun: 10:00 AM - 09:00 PM
              </p>

              <a className="footer-contact-item" href="tel:9372221118">
                <Phone size={15} />
                <span>93722 21118</span>
              </a>

              <a
                className="footer-contact-item"
                href="mailto:info@theaaradhyagroup.com"
              >
                <Mail size={15} />
                <span>info@theaaradhyagroup.com</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="footer-copyright"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <strong>Aradhya Group</strong>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
