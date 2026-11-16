
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";

import { Menu, X, ArrowUpRight } from "lucide-react";

import "./Navbar.css";

import {
  getNavbarConfig,
  navigationItems,
} from "./navbarConfig";

// Reusable animated business logo
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
            y: 28,
            scale: 1.15,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -28,
            scale: 0.92,
            filter: "blur(3px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Get the correct business configuration for the current route
  const currentConfig = getNavbarConfig(location.pathname);
  const currentTheme = currentConfig.theme;

  // Shared theme variables for navbar and mobile drawer
  const navbarStyle = {
    "--navbar-background": currentTheme.background,
    "--navbar-scrolled-background": currentTheme.scrolledBackground,
    "--navbar-text": currentTheme.text,
    "--navbar-accent": currentTheme.accent,
    "--navbar-border": currentTheme.border,
  };

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu after navigation
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close drawer whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`floating-navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
        style={navbarStyle}
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
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
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.15,
                }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                  <span className="navbar-link-indicator" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <IconButton
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
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
          style: navbarStyle,
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
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={closeMenu}
                  className="mobile-navigation-link"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={19} />
                </ListItemButton>
              </motion.div>
            ))}
          </List>
        </nav>

        <div className="mobile-drawer-footer">
          ARADHYA GROUP OF BUSINESS
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
