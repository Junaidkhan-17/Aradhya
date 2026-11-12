
import React from "react";
import ReactDOM from "react-dom/client";

// MUI
import CssBaseline from "@mui/material/CssBaseline";

// React Helmet
import { HelmetProvider } from "react-helmet-async";

// Application
import App from "./App.jsx";

// Global CSS
import "./index.css";

// Lenis
import "lenis/dist/lenis.css";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
