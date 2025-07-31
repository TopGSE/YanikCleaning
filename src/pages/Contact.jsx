import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaServicestack,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const SERVICE_ID = "service_9hcx80i"; // Updated with your EmailJS service ID
const TEMPLATE_ID = "template_wvlg1sm"; // Updated with your EmailJS template ID
const USER_ID = "WQUCY_JOBfyNDudpa"; // Updated with your EmailJS public key (user ID)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: "Yanik Cleaning",
          from_email: "cleaningyanak@gmail.com",
          reply_to: "cleaningyanak@gmail.com",
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        (result) => {
          setSuccess(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          setSuccess(false);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>24/7 Beschikbaar</span>
            </div>

            <h1 className="hero-title">
              Vraag uw <span className="highlight">gratis offerte</span> aan
            </h1>

            <p className="hero-subtitle">
              Professionele schoonmaakdiensten op maat. Binnen 24 uur reactie
              gegarandeerd.
            </p>

            <div className="hero-features">
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Gratis offerte</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>Binnen 24 uur reactie</span>
              </div>
              <div className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>100% vrijblijvend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards removed as requested */}

      {/* Main Contact Form */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Aanvraag offerte</h2>
                <p>
                  Vul onderstaand formulier in en ontvang binnen 24 uur een
                  persoonlijke offerte op maat voor uw schoonmaakbehoeften.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="label-icon" />
                      Volledige naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Uw volledige naam"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="label-icon" />
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="uw.email@voorbeeld.be"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone className="label-icon" />
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+32 4XX XX XX XX"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <FaServicestack className="label-icon" />
                      Type dienst
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Kies uw dienst</option>
                      <option value="kantoor">Kantoorschoonmaak</option>
                      <option value="commercieel">
                        Commerciële schoonmaak
                      </option>
                      <option value="oprit">Oprit & terras reiniging</option>
                      <option value="medisch">Medische faciliteiten</option>
                      <option value="tuin">Tuinonderhoud</option>
                      <option value="industrieel">
                        Industriële schoonmaak
                      </option>
                      <option value="anders">
                        Anders (vermeld in bericht)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Vertel ons over uw project</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschrijf uw schoonmaakbehoeften: oppervlakte, frequentie, specifieke wensen, timeline, budget indicatie..."
                    required
                    className="form-textarea"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${sending ? "sending" : ""}`}
                  disabled={sending}
                >
                  <div className="btn-content">
                    {sending ? (
                      <>
                        <div className="btn-spinner"></div>
                        <span>Versturen...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        <span>Verstuur aanvraag</span>
                      </>
                    )}
                  </div>
                  <div className="btn-glow"></div>
                </button>

                {/* Success/Error Messages */}
                {success === true && (
                  <div className="alert alert-success">
                    <FaCheckCircle className="alert-icon" />
                    <div>
                      <strong>Bedankt voor uw aanvraag!</strong>
                      <p>We nemen binnen 2 uur contact met u op.</p>
                    </div>
                  </div>
                )}

                {success === false && (
                  <div className="alert alert-error">
                    <div>
                      <strong>Er ging iets mis</strong>
                      <p>Probeer het opnieuw of neem direct contact op.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="contact-sidebar">
              <div className="sidebar-card">
                <h3>Waarom Yanik Cleaning?</h3>
                <ul className="benefits-list">
                  <li>
                    <FaCheckCircle className="benefit-icon" />
                    Ervaren professionals
                  </li>
                  <li>
                    <FaCheckCircle className="benefit-icon" />
                    Milieuvriendelijke producten
                  </li>
                  <li>
                    <FaCheckCircle className="benefit-icon" />
                    Flexibele planning
                  </li>
                  <li>
                    <FaCheckCircle className="benefit-icon" />
                    Verzekerd & gecertificeerd
                  </li>
                  <li>
                    <FaCheckCircle className="benefit-icon" />
                    Transparante prijsstelling
                  </li>
                </ul>
              </div>

              <div className="sidebar-card quote-card">
                <div className="quote-content">
                  <h3>Snelle service</h3>
                  <p>
                    "Uitstekende service en zeer professioneel. Onze kantoren
                    zijn altijd perfect schoon!"
                  </p>
                  <div className="quote-author">
                    <strong>— Sarah M., Gent</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
