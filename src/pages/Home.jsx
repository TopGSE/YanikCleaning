import React from "react";
import { FaCheck, FaClock, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ServiceCard component with bottom-right CTA button (no page refresh)
const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div
      className="service-card"
      style={{
        position: "relative",
        borderRadius: "1.2rem",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(30,144,255,0.07)",
      }}
    >
      <div className="service-img">
        <img src={service.image} alt={service.title} />
      </div>
      <div
        className="service-content"
        style={{ borderRadius: "0 0 1.2rem 1.2rem" }}
      >
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button
          type="button"
          className="btn btn-gradient btn-offerte"
          style={{
            position: "absolute",
            right: "1.1rem",
            bottom: "1.1rem",
            width: "auto",
            minWidth: 0,
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "999px",
            zIndex: 2,
            boxShadow: "0 2px 8px rgba(30,144,255,0.08)",
          }}
          onClick={() => navigate("/contact")}
        >
          Vraag offerte
        </button>
      </div>
    </div>
  );
};

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
  }, []);

  const [showPromo, setShowPromo] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homepage">
      <style>{`
        .promo-fab {
          position: fixed;
          left: 2.2rem;
          bottom: 2.2rem;
          width: 60px;
          height: 60px;
          background: #1e90ff;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(30, 144, 255, 0.18);
          z-index: 1100;
          cursor: pointer;
          border: 3px solid #fff;
          transition: background 0.2s, box-shadow 0.2s;
          animation: promo-pulse 1.4s infinite;
        }
        @keyframes promo-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.25),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(30, 144, 255, 0.05),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1.08);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.25),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1);
          }
        }
        .promo-fab:hover {
          background: #028090;
          box-shadow: 0 8px 32px rgba(2, 128, 144, 0.18);
        }

        .promo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 48, 80, 0.18);
          backdrop-filter: blur(6px) saturate(1.2);
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s;
        }
        .promo-modal {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(2, 128, 144, 0.18);
          padding: 2.2rem 2.2rem 1.7rem 2.2rem;
          max-width: 95vw;
          width: 370px;
          text-align: center;
          position: relative;
        }
        .promo-modal .promo-discount {
          margin: 0 auto 1.2rem auto;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #1e90ff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.1rem;
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(30, 144, 255, 0.13);
          border: 4px solid #fff;
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
        }
        .promo-modal .promo-text {
          margin-top: 3.5rem;
          font-size: 1.08rem;
          color: #555;
          margin-bottom: 1.2rem;
        }
        .promo-modal .promo-close {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          font-size: 1.5rem;
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2;
          transition: color 0.18s;
        }
        .promo-modal .promo-close:hover {
          color: #028090;
        }

        .hero-promo-banner {
          background: rgba(255, 255, 255, 0.95);
          color: #333;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          width: 320px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
          z-index: 4;
          margin: 0 auto;
          margin-top: 2.5rem;
          animation: fadeIn 0.5s;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-promo-banner .promo-discount {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e90ff;
          color: white;
          border-radius: 4px;
          padding: 0.5rem 1.2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
        }
        .hero-promo-banner .promo-text {
          text-align: center;
          font-size: 0.98rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .promo-fab {
            left: 1rem;
            bottom: 1rem;
            width: 48px;
            height: 48px;
            font-size: 1.1rem;
          }
          .promo-modal {
            width: 95vw;
            padding: 1.2rem 0.5rem 1.1rem 0.5rem;
          }
          .promo-modal .promo-discount {
            width: 60px;
            height: 60px;
            font-size: 1.2rem;
            top: -30px;
          }
          .hero-promo-banner {
            display: none;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Typewriter cursor animation */
        .typewriter-cursor {
          animation: blink 1.5s infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Promo: FAB on mobile, banner in hero on desktop */}
      {/* Promo: FAB on mobile, banner in hero on desktop (below hero buttons) */}
      {isMobile && (
        <>
          <div
            className="promo-fab"
            onClick={() => setShowPromo(true)}
            title="Bekijk promotie"
          >
            -20%
          </div>
          {showPromo && (
            <div
              className="promo-modal-overlay"
              onClick={() => setShowPromo(false)}
            >
              <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="promo-close"
                  onClick={() => setShowPromo(false)}
                  aria-label="Sluiten"
                >
                  &times;
                </button>
                <div className="promo-discount">-20%</div>
                <div className="promo-text">
                  Eerste schoonmaak met 20% korting.
                  <br />
                  <strong>Probeer ons nu!</strong>
                </div>
              </div>
            </div>
          )}
        </>
      )}

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
            <a href="/contact" className="btn btn-gradient">
              Vraag een gratis offerte aan
            </a>
            <a href="/services" className="btn btn-gradient">
              Onze Diensten
            </a>
          </div>
          {/* Desktop promo banner below buttons */}
          {!isMobile && (
            <div className="hero-promo-banner">
              <div className="promo-text">
                Eerste schoonmaak met 20% korting.
                <br />
                <strong>Probeer ons nu!</strong>
              </div>
              <div className="promo-discount" style={{ marginTop: "1.2rem" }}>
                20% KORTING
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Onze Populaire Diensten</h2>
          <div className="services-container">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/services" className="btn btn-gradient">
              Bekijk alle diensten
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
