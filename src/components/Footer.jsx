import {
  FaBroom,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcMastercard,
  FaMoneyBillWave,
  FaCreditCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">
              <img
                src="/images/Yanik Cleaning Logo.png"
                alt="Yanik Cleaning Logo"
                className="navbar__logo-img"
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  background: "transparent",
                }}
              />
            </div>
            <p>
              Professionele schoonmaakdiensten voor kantoren en bedrijven. Wij
              leveren uitstekende resultaten met milieuvriendelijke producten en
              getrainde professionals.
            </p>
            <div className="footer-payments" style={{ marginTop: "1.2rem" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                  display: "block",
                }}
              >
                Geaccepteerde betaalmethoden:
              </span>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaCreditCard size={28} />
                  Bancontact
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaCcMastercard size={28} />
                  Mastercard
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaMoneyBillWave size={28} />
                  Cash
                </span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Snel naar</h3>
            <ul>
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
              <li>
                <Link to="/contact">Offerte aanvragen</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <div className="contact-item">
              <span>Gent, België</span>
            </div>
            <div className="contact-item">
              <span>0470458644</span>
            </div>
            <div className="contact-item">
              <span>cleaningyanak@gmail.com</span>
            </div>
            <div className="contact-item">
              <span>BTW: BE1008813559</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Yanik Cleaning. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
