
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  ArrowUpRight,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Award,
  Globe,
  Share2,
} from "lucide-react";

import "./Footer.css";
import logo from "../../assets/logo.png";

/* =========================================
   ANIMATION VARIANTS
========================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   FOOTER COMPONENT
========================================= */

const Footer = ({ onSubscribe }) => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  /* =========================================
     SUBSCRIPTION FORM
  ========================================= */

  const handleSubscription = async (data) => {
    setSubmitMessage("");

    if (typeof onSubscribe !== "function") {
      setSubmitMessage(
        "Email service is not connected yet. Please contact our team directly."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      await onSubscribe({
        email: data.email.trim().toLowerCase(),
      });

      setSubmitMessage("Your message has been submitted successfully.");
      reset();
    } catch (error) {
      setSubmitMessage(
        error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================
     FOOTER DATA
  ========================================= */

  const services = [
    {
      label: "Jewellery Shop",
      href: "/jewellery",
    },
    {
      label: "Banking",
      href: "/bank",
    },
    {
      label: "Bar & Restaurant",
      href: "/restaurant",
    },
  ];

  const resources = [
    {
      label: "Contact us",
      href: "#contact",
    },
    {
      label: "Jewellery Shop",
      href: "/jewellery",
    },
    {
      label: "Banking",
      href: "/bank",
    },
    {
      label: "Bar & Restaurant",
      href: "/restaurant",
      isNew: true,
    },
  ];

  const socialLinks = [
    {
      icon: Globe,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: Share2,
      href: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: Share2,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
  ];

  /* =========================================
     BACK TO TOP
  ========================================= */

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="aradhya-footer" id="footer">
      {/* BACKGROUND DECORATIONS */}
      <div className="footer-pattern footer-pattern-left" />
      <div className="footer-pattern footer-pattern-right" />
      <div className="footer-glow" />

      <div className="footer-inner">
        {/* =================================
            TOP FLOATING EMAIL CONTAINER
        ================================= */}

        <motion.div
          className="footer-top-bar"
          initial={{
            opacity: 0,
            y: 65,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={{
            y: [0, -5, 0],
          }}
          whileHover={{
            y: -7,
            transition: {
              duration: 0.35,
            },
          }}
        >
          {/* LOGO */}
          <motion.a
            href="/"
            className="footer-top-logo"
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.35,
            }}
            aria-label="Aradhya Group home"
          >
            <img src={logo} alt="Aradhya Group of Business" />
          </motion.a>

          {/* EMAIL FORM */}
          <form
            className="footer-email-form"
            onSubmit={handleSubmit(handleSubscription)}
            noValidate
          >
            <div className="footer-email-input-wrap">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Enter your email address"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email || submitMessage
                    ? "footer-form-feedback"
                    : undefined
                }
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />

              <motion.button
                type="submit"
                className="footer-send-button"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.035,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

                <span className="footer-send-icon">
                  <ArrowUpRight size={21} />
                </span>
              </motion.button>
            </div>

            {errors.email && (
              <p
                id="footer-form-feedback"
                className="footer-form-feedback error"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}

            {submitMessage && (
              <p
                id={!errors.email ? "footer-form-feedback" : undefined}
                className={`footer-form-feedback ${
                  submitMessage.includes("successfully")
                    ? "success"
                    : "error"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            )}
          </form>
        </motion.div>

        {/* =================================
            FOOTER MAIN CONTENT
        ================================= */}

        <motion.div
          className="footer-main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* COLUMN 01 - BRAND */}
          <motion.div
            className="footer-brand-column"
            variants={itemVariants}
          >
            <motion.a
              href="/"
              className="footer-brand-logo"
              whileHover={{
                scale: 1.04,
              }}
              aria-label="Aradhya Group home"
            >
              <img src={logo} alt="Aradhya Group" />
            </motion.a>

            <motion.p
              className="footer-brand-description"
              variants={itemVariants}
            >
              Developing personalized customer journeys to increase
              satisfaction and loyalty of our expansion.
            </motion.p>

            {/* AWARDS */}
            <motion.div
              className="footer-awards"
              variants={itemVariants}
            >
              <motion.div
                className="footer-award-item"
                whileHover={{
                  y: -8,
                  scale: 1.06,
                }}
              >
                <Award className="footer-award-laurel" size={43} />

                <div className="footer-award-text">
                  <strong>18</strong>
                  <span>CLUTCH</span>
                  <small>AWARDS</small>
                </div>
              </motion.div>

              <motion.div
                className="footer-award-item"
                whileHover={{
                  y: -8,
                  scale: 1.06,
                }}
              >
                <Award className="footer-award-laurel" size={43} />

                <div className="footer-award-text">
                  <strong>5</strong>
                  <span>AWARDS</span>
                </div>
              </motion.div>
            </motion.div>

            {/* SOCIAL ICONS */}
            <div className="footer-social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.12,
                    }}
                    whileHover={{
                      y: -5,
                      rotate: 8,
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* COLUMN 02 - SERVICES */}
          <motion.div
            className="footer-link-column"
            variants={itemVariants}
          >
            <h3>Services</h3>

            <ul>
              {services.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a href={item.href}>
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 03 - RESOURCES */}
          <motion.div
            className="footer-link-column"
            variants={itemVariants}
          >
            <h3>Resources</h3>

            <ul>
              {resources.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a href={item.href}>
                    <span>{item.label}</span>

                    {item.isNew && (
                      <span className="footer-new-badge">NEW</span>
                    )}

                    <ArrowUpRight size={14} />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 04 - OFFICE */}
          <motion.div
            className="footer-office-column"
            variants={itemVariants}
          >
            <h3>Our Office</h3>

            <div className="footer-office-location">
              <MapPin size={16} />
              <span>Plot No. 318, Sahayog Apartment, Ganesh Nagar, Sharada Square, Nandanvan, Nagpur – 440024</span>
            </div>

            <a
              href="tel:+10095447818"
              className="footer-office-contact"
            >
              <Phone size={15} />
              <span>Phone: 9372221118</span>
            </a>

            <a
              href="mailto:support@aradhyagroup.com"
              className="footer-office-contact"
            >
              <Mail size={15} />
              <span>M: support@aradhyagroup.com</span>
            </a>

            <p className="footer-office-hours">
              Mon-Fri 10am-10pm
            </p>
          </motion.div>
        </motion.div>

        {/* =================================
            BOTTOM COPYRIGHT
        ================================= */}

        <motion.div
          className="footer-bottom"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p>
            © {currentYear} Aradhay Group. All Rights Reserved.
          </p>

          <div className="footer-bottom-right">
            <span>Designed with excellence.</span>

            <motion.button
              type="button"
              className="footer-back-top"
              onClick={handleBackToTop}
              aria-label="Back to top"
              whileHover={{
                y: -5,
                rotate: 45,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <ArrowUp size={19} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
