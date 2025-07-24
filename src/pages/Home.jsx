import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaShieldAlt, FaLeaf } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

import "./Home.css";

const Home = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Kantoorschoonmaak",
      description:
        "Dagelijkse, wekelijkse of maandelijkse schoonmaak op maat voor uw bedrijf.",
      image: "/images/vecteezy-foto-3.jpg",
    },
    {
      id: 2,
      title: "Oprit Reiniging",
      description:
        "Complete schoonmaakoplossingen voor opritten, parkeerplaatsen en meer.",
      image: "/images/vecteezy-foto-7.jpeg",
    },
    {
      id: 3,
      title: "Algemene Tuinonderhoud",
      description:
        "Grondige schoonmaak van uw tuin inclusief snoeien, grasmaaien en onderhoud.",
      image: "/images/vecteezy-foto-8.jpg",
    },
  ];

  // Typewriter effect for hero-title
  const [typedTitle, setTypedTitle] = React.useState("");
  const fullTitle = "YANIK CLEANING";
  React.useEffect(() => {
    let i = 0;
    let raf;
    setTypedTitle("");
    function typeNext() {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i < fullTitle.length) {
        // Use a slightly variable delay for a more natural effect
        const delay = 60 + Math.random() * 60;
        raf = setTimeout(typeNext, delay);
      }
    }
    typeNext();
    return () => raf && clearTimeout(raf);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          <source
            src="videos/office-cleaning-video-hero (1).mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">
            {typedTitle}
            <span className="typewriter-cursor">|</span>
          </h1>
          <p className="hero-subtitle">Uw ruimte, onze zorg altijd kraaknet!</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn btn-gradient">
              Vraag een gratis offerte aan
            </Link>
            <Link to="/services" className="btn btn-gradient">
              Onze Diensten
            </Link>
          </div>
        </div>
      </section>

      {/* ...about section removed... */}

      {/* Services Preview Section */}
      {/* ...existing code... */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Onze Populaire Diensten</h2>
          <div className="services-container">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/services" className="btn btn-gradient">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
