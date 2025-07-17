import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/images/contact-hero.jpg)" }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            Get in touch for a free quote or consultation
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2 className="section-title">Contact Information</h2>
              <p>
                We're here to answer any questions you may have about our
                services.
              </p>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@yanikcleaning.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>123 Clean Street, Toronto, ON M5V 2H1</p>
                </div>
              </div>

              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="section-title">Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" className="form-control">
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

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Tell us about your cleaning needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map">
        <iframe
          title="Business Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2692505416353!2d-79.38924548450267!3d43.64256617912178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
