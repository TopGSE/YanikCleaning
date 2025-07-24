import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBroom } from "react-icons/fa";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Over Ons" },
    { path: "/services", label: "Diensten" },
    { path: "/contact", label: "Contact" },
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
          <Link to="/contact" className="navbar__cta-btn">
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

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${
          isMobileMenuOpen ? "navbar__mobile--active" : ""
        }`}
      >
        <div
          className="navbar__mobile-backdrop"
          onClick={closeMobileMenu}
        ></div>
        <div className="navbar__mobile-content">
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-logo">
              <FaBroom />
              <span>Yanik Cleaning</span>
            </div>
          </div>
          <nav className="navbar__mobile-nav">
            <ul className="navbar__mobile-menu">
              {navItems.map((item) => (
                <li key={item.path} className="navbar__mobile-menu-item">
                  <Link
                    to={item.path}
                    className={`navbar__mobile-menu-link ${
                      location.pathname === item.path
                        ? "navbar__mobile-menu-link--active"
                        : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar__mobile-cta">
              <Link
                to="/contact"
                className="navbar__mobile-cta-btn"
                onClick={closeMobileMenu}
              >
                Offerte aanvragen
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
