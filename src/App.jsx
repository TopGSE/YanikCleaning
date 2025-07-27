import { useState } from "react";
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
