
import aradhayLogo from "../../assets/logo.png";
import jewelleryLogo from "../../assets/logo1.png";
import banklogo from "../../assets/banklogo.png";
import restaurantLogo from "../../assets/logo3.png";
import astrologyLogo from "../../assets/logo4.png";

// Provisional navbar colors based on the Aradhya brand palette.
// Confirm exact brand HEX values before production.

export const navbarConfig = {
  home: {
    logo: aradhayLogo,
    label: "Aradhya Group",
    theme: {
      background: "rgba(37, 0, 143, 0.90)",
      scrolledBackground: "rgba(37, 0, 143, 0.96)",
      text: "#FFFFFF",
      accent: "#F5A51B",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },

  jewellery: {
    logo: banklogo,
    label: "Aradhya Jewellers",
    theme: {
      background: "rgba(255, 162, 0, 0.9)",
      scrolledBackground: "rgba(245, 165, 27, 0.96)",
      text: "#FFFFFF",
      accent: "#25008F",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },

  bank: {
    logo: banklogo,
    label: "Aradhya Bank",
    theme: {
      background: "rgba(14, 170, 67, 0.90)",
      scrolledBackground: "rgba(14, 170, 67, 0.96)",
      text: "#FFFFFF",
      accent: "#F5A51B",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },

  restaurant: {
    logo: restaurantLogo,
    label: "Bar & Restaurant",
    theme: {
      background: "rgba(240, 20, 69, 0.90)",
      scrolledBackground: "rgba(240, 20, 69, 0.96)",
      text: "#FFFFFF",
      accent: "#F5A51B",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },

  astrology: {
    logo: astrologyLogo,
    label: "Astrology",
    theme: {
      background: "rgba(150, 59, 232, 0.90)",
      scrolledBackground: "rgba(150, 59, 232, 0.96)",
      text: "#FFFFFF",
      accent: "#F5A51B",
      border: "rgba(255, 255, 255, 0.15)",
    },
  },
};

// Existing top-level business navigation.
// Business-specific menu links can be added after their page structure is finalized.

export const navigationItems = [
  {
    label: "Jewellery",
    path: "/jewellery",
  },
  {
    label: "Bank",
    path: "/bank",
  },
  {
    label: "Bar & Restaurant",
    path: "/bar-restaurant",
  },
  {
    label: "Astrology",
    path: "/astrology",
  },
];

// Identify the active business using the current URL.

export const getNavbarConfig = (pathname) => {
  if (pathname.startsWith("/jewellery")) {
    return navbarConfig.jewellery;
  }

  if (pathname.startsWith("/bank")) {
    return navbarConfig.bank;
  }

  if (pathname.startsWith("/bar-restaurant")) {
    return navbarConfig.restaurant;
  }

  if (pathname.startsWith("/astrology")) {
    return navbarConfig.astrology;
  }

  return navbarConfig.home;
};
