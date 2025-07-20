import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
        <div
          className={`site-content${
            showIntro ? " site-fade-out" : " site-fade-in"
          }`}
        >
          <Navbar />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
