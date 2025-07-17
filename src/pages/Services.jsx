import ServiceCard from "../components/ServiceCard";
import {
  FaBuilding,
  FaHome,
  FaStore,
  FaHospital,
  FaSchool,
  FaIndustry,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      id: 1,
      title: "Office Cleaning",
      description:
        "Daily, weekly, or monthly cleaning tailored to your business needs.",
      price: "$150+",
      icon: <FaBuilding />,
      image: "/images/vecteezy-foto-3.jpg",
      details: [
        "Dusting and wiping all surfaces",
        "Vacuuming and mopping floors",
        "Sanitizing high-touch areas",
        "Emptying trash and recycling",
        "Restroom cleaning and restocking",
      ],
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Complete cleaning solutions for retail spaces, restaurants, and more.",
      price: "$200+",
      icon: <FaStore />,
      image: "/images/vecteezy-foto-4.jpg",
      details: [
        "Floor care and maintenance",
        "Window and glass cleaning",
        "Kitchen and food service area cleaning",
        "High-dusting and light fixture cleaning",
        "Specialized surface cleaning",
      ],
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description:
        "Thorough cleaning for move-ins, move-outs, or seasonal refreshes.",
      price: "$300+",
      icon: <FaHome />,
      image: "/images/vecteezy-foto-1.jpg",
      details: [
        "Detailed cleaning of all areas",
        "Grout and tile cleaning",
        "Appliance cleaning inside and out",
        "Baseboard and trim cleaning",
        "Behind and under furniture cleaning",
      ],
    },
    {
      id: 4,
      title: "Medical Facility Cleaning",
      description:
        "Specialized cleaning for clinics, dental offices, and medical centers.",
      price: "$250+",
      icon: <FaHospital />,
      image: "/images/vecteezy-foto-6.jpg",
      details: [
        "HIPAA-compliant procedures",
        "Medical waste disposal",
        "High-level disinfection",
        "Biohazard cleaning protocols",
        "Strict compliance with health regulations",
      ],
    },
    {
      id: 5,
      title: "Educational Facility Cleaning",
      description: "Safe and thorough cleaning for schools and universities.",
      price: "$180+",
      icon: <FaSchool />,
      image: "/images/vecteezy-foto-5.jpg",
      details: [
        "Classroom cleaning and sanitizing",
        "Locker room and gym cleaning",
        "Cafeteria and food service area cleaning",
        "Restroom deep cleaning",
        "Special attention to high-touch areas",
      ],
    },
    {
      id: 6,
      title: "Industrial Cleaning",
      description:
        "Heavy-duty cleaning for warehouses and manufacturing facilities.",
      price: "$350+",
      icon: <FaIndustry />,
      image: "/images/vecteezy-foto-2.jpg",
      details: [
        "Equipment and machinery cleaning",
        "High bay and floor cleaning",
        "Dust and debris removal",
        "Pressure washing services",
        "Specialized industrial cleaning solutions",
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/images/services-hero.jpg)" }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Tailored cleaning solutions for every business need
          </p>
        </div>
      </section>

      {/* All Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Comprehensive Cleaning Services</h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            We offer a wide range of professional cleaning services to keep your
            business spotless
          </p>

          <div className="services-container">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section
        className="section process"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            How we ensure your space is perfectly cleaned every time
          </p>

          <div className="process-steps">
            {/* Process steps would go here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section cta"
        style={{
          background:
            "linear-gradient(135deg, var(--primary), var(--primary-dark))",
          color: "white",
        }}
      >
        <div className="container">
          <h2 className="section-title">Ready for a Spotless Space?</h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "2rem", opacity: 0.9 }}
          >
            Contact us today to discuss your cleaning needs and get a free quote
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href="/contact"
              className="btn"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
