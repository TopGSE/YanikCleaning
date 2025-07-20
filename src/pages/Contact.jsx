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
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Get In Touch</h1>
              <p className="hero-subtitle">
                Ready to transform your space? Let's discuss your cleaning needs
                and create a customized solution for you.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5★</span>
                  <span className="stat-label">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
              <span className="card-subtitle">Mon - Fri, 8AM - 6PM</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>info@yanikcleaning.com</p>
              <span className="card-subtitle">24/7 Response</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>
                123 Clean Street
                <br />
                Toronto, ON M5V 2H1
              </p>
              <span className="card-subtitle">By Appointment</span>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaClock />
              </div>
              <h3>Business Hours</h3>
              <p>
                Mon - Fri: 8:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 3:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you within 24
                  hours with a customized quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="label-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone className="label-icon" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <FaServicestack className="label-icon" />
                      Service Type
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="office">Office Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="medical">Medical Facility Cleaning</option>
                      <option value="school">
                        Educational Facility Cleaning
                      </option>
                      <option value="industrial">Industrial Cleaning</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cleaning needs, square footage, frequency, and any specific requirements..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>

            <div className="contact-sidebar">
              <div className="sidebar-card">
                <h3>Why Choose Us?</h3>
                <ul className="benefits-list">
                  <li>✓ Licensed & Insured</li>
                  <li>✓ Eco-Friendly Products</li>
                  <li>✓ 24/7 Emergency Service</li>
                  <li>✓ Satisfaction Guarantee</li>
                  <li>✓ Experienced Team</li>
                  <li>✓ Competitive Pricing</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3>Free Quote</h3>
                <p>
                  Get an instant estimate for your cleaning needs. No hidden
                  fees, no surprises.
                </p>
                <div className="quote-highlight">
                  <span className="quote-text">Starting from</span>
                  <span className="quote-price">$99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692505416353!2d-79.38924548450267!3d43.64256617912178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
          <div className="map-overlay">
            <div className="map-info">
              <h3>Visit Our Office</h3>
              <p>
                123 Clean Street
                <br />
                Toronto, ON M5V 2H1
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
