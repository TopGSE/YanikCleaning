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
      price: "vanaf €150",
      image: "/images/vecteezy-foto-3.jpg",
    },
    {
      id: 2,
      title: "Commerciële Schoonmaak",
      description:
        "Complete schoonmaakoplossingen voor winkels, restaurants en meer.",
      price: "vanaf €200",
      image: "/images/vecteezy-foto-4.jpg",
    },
    {
      id: 3,
      title: "Dieptereiniging",
      description:
        "Grondige schoonmaak voor verhuizingen, opleveringen of seizoenswerk.",
      price: "vanaf €300",
      image: "/images/vecteezy-foto-1.jpg",
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
        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src="/videos/office-cleaning-video-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">
            {typedTitle}
            <span className="typewriter-cursor">|</span>
          </h1>
          <p className="hero-subtitle">
            Milieuvriendelijke schoonmaakoplossingen voor kantoren en bedrijven
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn">
              Vraag een gratis offerte aan
            </Link>
            <Link to="/services" className="btn btn-outline">
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
            <Link to="/services" className="btn">
              Bekijk alle diensten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
