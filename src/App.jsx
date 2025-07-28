import { useState, useEffect } from "react";
// Utility to check consent
function getConsentPrefs() {
  try {
    const local = localStorage.getItem("cookiePrefs");
    if (local) return JSON.parse(local);
    const match = document.cookie.match(/cookiePrefs=([^;]+)/);
    if (match) {
      // Only status string in cookie, not full prefs
      return { status: match[1] };
    }
  } catch {}
  return null;
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PromoFab from "./components/PromoFab";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieConsentOverlay from "./components/CookieConsentOverlay";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import IntroAnimation from "./components/IntroAnimation";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroFinish = () => setShowIntro(false);

  // Only load analytics/marketing scripts if consent is given
  useEffect(() => {
    const prefs = getConsentPrefs();
    if (!prefs) return; // No consent yet
    // Example: Google Analytics (statistics)
    if (prefs.statistics) {
      if (!window.GA_INITIALIZED) {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
        script.async = true;
        document.head.appendChild(script);
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          window.gtag = gtag;
          gtag("js", new Date());
          gtag("config", "G-XXXXXXXXXX");
          window.GA_INITIALIZED = true;
        };
      }
    }
    // Example: Marketing script (replace with your own)
    if (prefs.marketing) {
      // ...load marketing scripts here...
    }
  }, [showIntro]);

  return (
    <Router>
      <div className="app">
        {showIntro && <IntroAnimation onFinish={handleIntroFinish} />}
        <PromoFab />
        {!showIntro && <CookieConsentOverlay />}
        <div
          className={`site-content${
            showIntro ? " site-fade-out" : " site-fade-in"
          }`}
        >
          <Navbar />
          <ScrollToTopOnNavigate />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
