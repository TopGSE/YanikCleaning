import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaShieldAlt, FaLeaf } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Office Cleaning",
      description:
        "Daily, weekly, or monthly cleaning tailored to your business needs.",
      price: "$150+",
      image: "/images/office-cleaning.jpg",
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Complete cleaning solutions for retail spaces, restaurants, and more.",
      price: "$200+",
      image: "/images/commercial-cleaning.jpg",
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description:
        "Thorough cleaning for move-ins, move-outs, or seasonal refreshes.",
      price: "$300+",
      image: "/images/deep-cleaning.jpg",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/cleaning-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Professional Cleaning Services</h1>
          <p className="hero-subtitle">
            Eco-friendly cleaning solutions for offices and commercial spaces
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="container about-container">
          <div className="about-img">
            <img src="/images/about-cleaning.jpg" alt="Cleaning Team" />
          </div>
          <div className="about-content">
            <h2 className="section-title">Why Choose Yanik Cleaning?</h2>
            <p>
              With over 10 years of experience in the cleaning industry, we
              provide top-quality services using eco-friendly products and
              state-of-the-art equipment. Our trained professionals pay
              attention to every detail to ensure your space is spotless.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <FaCheck className="feature-icon" />
                <div>
                  <h4>100% Satisfaction</h4>
                  <p>We guarantee your satisfaction with our services.</p>
                </div>
              </div>

              <div className="feature-item">
                <FaClock className="feature-icon" />
                <div>
                  <h4>Flexible Scheduling</h4>
                  <p>Available 24/7 to fit your business needs.</p>
                </div>
              </div>

              <div className="feature-item">
                <FaShieldAlt className="feature-icon" />
                <div>
                  <h4>Fully Insured</h4>
                  <p>We're fully insured for your peace of mind.</p>
                </div>
              </div>

              <div className="feature-item">
                <FaLeaf className="feature-icon" />
                <div>
                  <h4>Eco-Friendly</h4>
                  <p>
                    Using green products that are safe for your environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our Popular Services</h2>
          <div className="services-container">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section testimonials"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-container">
            {/* Testimonial cards would go here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
