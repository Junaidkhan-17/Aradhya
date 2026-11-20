
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";

import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Phone,
} from "lucide-react";

import "./Navbar.css";

import {
  getNavbarConfig,
  navigationItems,
} from "./navbarConfig";

const CONTACT_NUMBER = "+919372221118";
const CONTACT_DISPLAY = "+91 93722 21118";

// Animated business logo
const LogoRotator = ({ logo, label, mobile = false }) => {
  return (
    <div
      className={`navbar-logo-rotator ${
        mobile ? "mobile-logo-rotator" : ""
      }`}
      aria-label={`${label} logo`}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={logo}
          src={logo}
          alt={`${label} logo`}
          className="rotating-navbar-logo"
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.94,
            filter: "blur(3px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.96,
            filter: "blur(2px)",
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Current business logo and accent
  const currentConfig = getNavbarConfig(location.pathname);
  const currentTheme = currentConfig.theme;

  const navbarStyle = {
    "--navbar-accent": currentTheme.accent,
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus after route changes
  useEffect(() => {
    setMenuOpen(false);
    setBusinessMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setBusinessMenuOpen(false);
  };

  const toggleBusinessMenu = () => {
    setBusinessMenuOpen((prev) => !prev);
  };

  return (
    <>
      <motion.header
        className={`floating-navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
        style={navbarStyle}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-inner">

          {/* Brand Logo */}
          <NavLink
            to="/"
            className="navbar-brand"
            aria-label="Aradhya Group Home"
            onClick={closeMenu}
          >
            <LogoRotator
              logo={currentConfig.logo}
              label={currentConfig.label}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav
            className="navbar-navigation"
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>

            {/* Businesses Dropdown */}
            <div className="navbar-dropdown">
              <button
                type="button"
                className={`navbar-link navbar-dropdown-trigger ${
                  navigationItems.some(
                    (item) => location.pathname === item.path ||
                    location.pathname.startsWith(`${item.path}/`)
                  )
                    ? "active"
                    : ""
                }`}
                aria-expanded={businessMenuOpen}
                aria-haspopup="true"
                onClick={toggleBusinessMenu}
              >
                Our Businesses
                <ChevronDown
                  size={15}
                  className={`dropdown-chevron ${
                    businessMenuOpen ? "dropdown-chevron-open" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {businessMenuOpen && (
                  <motion.div
                    className="navbar-dropdown-menu"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22 }}
                  >
                    {navigationItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `navbar-dropdown-link ${
                            isActive ? "active" : ""
                          }`
                        }
                        onClick={closeMenu}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight size={16} />
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>
          </nav>

          {/* Contact Button */}
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="navbar-contact-button"
            aria-label={`Call ${CONTACT_DISPLAY}`}
          >
            <span>{CONTACT_DISPLAY}</span>
            <span className="navbar-contact-icon">
              <Phone size={17} fill="currentColor" />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <IconButton
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </IconButton>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={closeMenu}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          id: "navbar-mobile-drawer",
          className: "navbar-mobile-drawer",
        }}
      >
        <div className="mobile-drawer-header">
          <NavLink
            to="/"
            aria-label="Aradhya Group Home"
            onClick={closeMenu}
          >
            <LogoRotator
              logo={currentConfig.logo}
              label={currentConfig.label}
              mobile
            />
          </NavLink>

          <IconButton
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <X size={24} />
          </IconButton>
        </div>

        <nav aria-label="Mobile navigation">
          <List className="mobile-navigation-list">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ListItemButton
                component={NavLink}
                to="/"
                end
                onClick={closeMenu}
                className="mobile-navigation-link"
              >
                <span>Home</span>
                <ArrowUpRight size={19} />
              </ListItemButton>
            </motion.div>

            <div className="mobile-business-heading">
              Our Businesses
            </div>

            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07,
                }}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={closeMenu}
                  className="mobile-navigation-link mobile-business-link"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={19} />
                </ListItemButton>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
            >
              <ListItemButton
                component={NavLink}
                to="/about"
                onClick={closeMenu}
                className="mobile-navigation-link"
              >
                <span>About Us</span>
                <ArrowUpRight size={19} />
              </ListItemButton>
            </motion.div>
          </List>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="mobile-contact-button"
          >
            <Phone size={17} />
            <span>{CONTACT_DISPLAY}</span>
          </a>

          <p>ARADHYA GROUP OF BUSINESS</p>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
