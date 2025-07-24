import {
  FaBroom,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

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
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Snel naar</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Over ons</a>
              </li>
              <li>
                <a href="/services">Diensten</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/contact">Offerte aanvragen</a>
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
