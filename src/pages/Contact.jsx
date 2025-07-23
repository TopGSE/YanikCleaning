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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
