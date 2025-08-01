import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
  FaShieldAlt,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        .modern-footer {
          background: linear-gradient(135deg, #f8fdfc 0%, #ffffff 100%);
          border-top: 1px solid #e2e8f0;
          padding: 4rem 0 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .modern-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #1e90ff, transparent);
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          max-width: 320px;
        }
        
        .footer-brand .logo {
          margin-bottom: 1.5rem;
        }
        
        .footer-brand .logo img {
          height: 52px;
          width: auto;
          object-fit: contain;
        }
        
        .footer-brand .description {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }
        
        .footer-features {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .footer-feature {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #475569;  
          font-size: 0.9rem;
        }
        
        .footer-feature-icon {
          color: #1e90ff;
          font-size: 1rem;
        }
        
        .footer-section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 30px;
          height: 2px;
          background: #1e90ff;
          border-radius: 1px;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-links a:hover {
          color: #1e90ff;
          transform: translateX(4px);
        }
        
        .footer-links a::before {
          content: '';
          width: 4px;
          height: 4px;
          background: #cbd5e1;
          border-radius: 50%;
          transition: all 0.2s ease;
        }
        
        .footer-links a:hover::before {
          background: #1e90ff;
          transform: scale(1.2);
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #475569;
          font-size: 0.95rem;
        }
        
        .contact-item-icon {
          color: #1e90ff;
          font-size: 1rem;
          min-width: 16px;
        }
        
        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .contact-item a:hover {
          color: #1e90ff;
        }
        
        .footer-bottom {
          border-top: 1px solid #e2e8f0;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-bottom-left {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .payment-methods {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
          color: #64748b;
        }
        
        .payment-icon {
          color: #1e90ff;
          font-size: 1.2rem;
        }
        
        .cookie-settings {
          background: none;
          border: none;
          color: #1e90ff;
          text-decoration: underline;
          cursor: pointer;
          font: inherit;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        
        .cookie-settings:hover {
          color: #0f172a;
        }
        
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .modern-footer {
            padding: 3rem 0 1.5rem 0;
          }
          
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .footer-bottom-right {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <footer className="modern-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <img
                  src="/images/Yanik Cleaning Logo.png"
                  alt="Yanik Cleaning Logo"
                />
              </div>
              <p className="description">
                Professionele schoonmaakdiensten voor kantoren en bedrijven.
                Betrouwbaar, milieuvriendelijk en altijd met oog voor detail.
              </p>
              <div className="footer-features">
                <div className="footer-feature">
                  <FaShieldAlt className="footer-feature-icon" />
                  <span>Volledig verzekerd & gecertificeerd</span>
                </div>
                <div className="footer-feature">
                  <FaLeaf className="footer-feature-icon" />
                  <span>Milieuvriendelijke producten</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Navigatie</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">Over ons</Link>
                </li>
                <li>
                  <Link to="/services">Diensten</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/services">Kantoorschoonmaak</Link>
                </li>
                <li>
                  <Link to="/services">Commerciële schoonmaak</Link>
                </li>
                <li>
                  <Link to="/services">Oprit reiniging</Link>
                </li>
                <li>
                  <Link to="/contact#main-contact-section">
                    Offerte aanvragen
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-item-icon" />
                  <span>Gent, België</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-item-icon" />
                  <div>
                    <a href="tel:+32470458644">+32 470 45 86 44</a>
                    <br />
                    <a href="tel:+32489032292">+32 489 03 22 92</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-item-icon" />
                  <a href="mailto:cleaningyanak@gmail.com">
                    cleaningyanak@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                    BTW: BE1008.813.559
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>
                &copy; {new Date().getFullYear()} Yanik Cleaning. Alle rechten
                voorbehouden.
              </p>
            </div>
            <div className="footer-bottom-right">
              <div className="payment-methods">
                <FaCreditCard className="payment-icon" />
                <span>Bancontact • Mastercard • Cash</span>
              </div>
              <button
                type="button"
                className="cookie-settings"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openCookieConsent"))
                }
                aria-label="Cookie-instellingen aanpassen"
              >
                Cookie-instellingen
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
