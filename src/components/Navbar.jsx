import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBroom,
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
  FaTimes,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/about", label: "Over Ons", icon: FaInfoCircle },
    { path: "/services", label: "Diensten", icon: FaConciergeBell },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo Section */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <img
              src="/images/Yanik Cleaning Logo.png"
              alt="Yanik Cleaning Logo"
              className="navbar__logo-img"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          <ul className="navbar__menu">
            {navItems.map((item) => (
              <li key={item.path} className="navbar__menu-item">
                <Link
                  to={item.path}
                  className={`navbar__menu-link ${
                    location.pathname === item.path
                      ? "navbar__menu-link--active"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="navbar__cta">
          <Link to="/contact" className="navbar__cta-btn btn btn-gradient">
            <span>Offerte aanvragen</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar__mobile-toggle ${
            isMobileMenuOpen ? "navbar__mobile-toggle--active" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="navbar__mobile-toggle-line"></span>
          <span className="navbar__mobile-toggle-line"></span>
          <span className="navbar__mobile-toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu - Full Screen Modern Design */}
      <div
        className={`navbar__mobile ${
          isMobileMenuOpen ? "navbar__mobile--active" : ""
        }`}
      >
        <div className="navbar__mobile-overlay">
          {/* Decorative Background Elements */}
          <div className="navbar__mobile-bg-decoration"></div>

          {/* Close Button - Top Right */}
          <button
            className="navbar__mobile-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <span className="navbar__mobile-close-line"></span>
            <span className="navbar__mobile-close-line"></span>
          </button>

          {/* Logo Section */}
          <div className="navbar__mobile-brand">
            <h2 className="navbar__mobile-brand-name">Yanik Cleaning</h2>
            <p className="navbar__mobile-brand-tagline">
              Professionele Schoonmaakdiensten
            </p>
          </div>

          {/* Navigation Menu - Center */}
          <nav className="navbar__mobile-menu-wrapper">
            <ul className="navbar__mobile-menu">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.path}
                    className="navbar__mobile-menu-item"
                    style={{ "--item-index": index }}
                  >
                    <Link
                      to={item.path}
                      className={`navbar__mobile-menu-link ${
                        location.pathname === item.path
                          ? "navbar__mobile-menu-link--active"
                          : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <span className="navbar__mobile-menu-number">
                        0{index + 1}
                      </span>
                      <span className="navbar__mobile-menu-text">
                        {item.label}
                      </span>
                      <span className="navbar__mobile-menu-icon-wrapper">
                        <Icon className="navbar__mobile-menu-icon" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section - CTA & Contact */}
          <div className="navbar__mobile-footer">
            <Link
              to="/contact"
              className="navbar__mobile-cta-btn"
              onClick={closeMobileMenu}
            >
              <span>Gratis Offerte</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div className="navbar__mobile-contact-grid">
              <a
                href="tel:+32123456789"
                className="navbar__mobile-contact-item"
              >
                <FaPhone />
                <span>Bel Nu</span>
              </a>
              <a
                href="mailto:info@yanikcleaning.be"
                className="navbar__mobile-contact-item"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
