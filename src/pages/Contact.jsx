import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaServicestack,
} from "react-icons/fa";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-wrapper" style={{ justifyContent: "center" }}>
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Stuur ons een bericht</h2>
                <p>
                  Vul het onderstaande formulier in en wij nemen binnen 24 uur
                  contact met u op met een offerte op maat.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="label-icon" />
                      Volledige naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jan Jansen"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="label-icon" />
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jan@voorbeeld.com"
                      required
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
                      placeholder="06 12345678"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">
                      <FaServicestack className="label-icon" />
                      Soort dienst
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Kies een dienst</option>
                      <option value="office">Kantoor schoonmaak</option>
                      <option value="commercial">Commerciële schoonmaak</option>
                      <option value="Oprit">Oprit Reiniging</option>
                      <option value="medical">
                        Medische faciliteit schoonmaak
                      </option>
                      <option value="Tuin">Algemene Tuinonderhoud</option>
                      <option value="industrial">Industriële schoonmaak</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Vertel ons over uw schoonmaakbehoeften, oppervlakte, frequentie en eventuele specifieke wensen..."
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  <span>Verstuur bericht</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
