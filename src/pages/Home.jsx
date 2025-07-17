import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaShieldAlt, FaLeaf } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Kantoorschoonmaak",
      description:
        "Dagelijkse, wekelijkse of maandelijkse schoonmaak op maat voor uw bedrijf.",
      price: "vanaf €150",
      image: "/images/office-cleaning.jpg",
    },
    {
      id: 2,
      title: "Commerciële Schoonmaak",
      description:
        "Complete schoonmaakoplossingen voor winkels, restaurants en meer.",
      price: "vanaf €200",
      image: "/images/commercial-cleaning.jpg",
    },
    {
      id: 3,
      title: "Dieptereiniging",
      description:
        "Grondige schoonmaak voor verhuizingen, opleveringen of seizoenswerk.",
      price: "vanaf €300",
      image: "/images/deep-cleaning.jpg",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src="/public/videos/office-cleaning-video-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Professionele Schoonmaakdiensten</h1>
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

      {/* About Section */}
      <section
        className="section about"
        style={{
          background: "linear-gradient(120deg, #f7f9fb 60%, #e0f3ff 100%)",
          padding: "3rem 0",
          borderRadius: "2rem",
          margin: "2rem 0",
          boxShadow: "0 2px 16px 0 #1e90ff11",
          animation: "fadeIn 1.5s",
        }}
      >
        <div
          className="container about-container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="about-img"
            style={{
              flex: "0 0 340px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/full-shot-people-cleaning-office.jpg"
              alt="Yanik Cleaning Team"
              style={{
                width: "320px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "1.5rem",
                boxShadow: "0 2px 16px 0 #1e90ff22",
                animation: "floatImg 3s infinite ease-in-out",
              }}
            />
          </div>
          <div
            className="about-content"
            style={{
              flex: 1,
              minWidth: "260px",
              background: "#fff",
              borderRadius: "1.5rem",
              boxShadow: "0 2px 16px 0 #1e90ff11",
              padding: "2rem 2.5rem",
              animation: "fadeInUp 1.2s",
            }}
          >
            <h2
              className="section-title"
              style={{
                color: "#1e90ff",
                fontWeight: 700,
                fontSize: "2rem",
                marginBottom: "1.2rem",
              }}
            >
              Waarom kiezen voor Yanik Cleaning?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "2rem",
                color: "#333",
              }}
            >
              Met meer dan 10 jaar ervaring leveren wij topkwaliteit schoonmaak
              met milieuvriendelijke producten en moderne apparatuur. Ons
              getrainde team zorgt altijd voor een brandschone ruimte tot in elk
              detail.
            </p>
            <div
              className="about-features"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div
                className="feature-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#f7f9fb",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxShadow: "0 2px 8px 0 #1e90ff08",
                  transition: "box-shadow 0.2s",
                }}
              >
                <FaCheck
                  className="feature-icon"
                  style={{ color: "#1e90ff", fontSize: "2rem" }}
                />
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600 }}>
                    100% Tevredenheid
                  </h4>
                  <p style={{ margin: 0, color: "#555" }}>
                    Wij garanderen uw tevredenheid over onze diensten.
                  </p>
                </div>
              </div>
              <div
                className="feature-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#f7f9fb",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxShadow: "0 2px 8px 0 #1e90ff08",
                  transition: "box-shadow 0.2s",
                }}
              >
                <FaClock
                  className="feature-icon"
                  style={{ color: "#1e90ff", fontSize: "2rem" }}
                />
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600 }}>
                    Flexibele Planning
                  </h4>
                  <p style={{ margin: 0, color: "#555" }}>
                    24/7 beschikbaar, altijd passend bij uw wensen.
                  </p>
                </div>
              </div>
              <div
                className="feature-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#f7f9fb",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxShadow: "0 2px 8px 0 #1e90ff08",
                  transition: "box-shadow 0.2s",
                }}
              >
                <FaShieldAlt
                  className="feature-icon"
                  style={{ color: "#1e90ff", fontSize: "2rem" }}
                />
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600 }}>
                    Volledig Verzekerd
                  </h4>
                  <p style={{ margin: 0, color: "#555" }}>
                    Wij zijn volledig verzekerd voor uw gemoedsrust.
                  </p>
                </div>
              </div>
              <div
                className="feature-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#f7f9fb",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxShadow: "0 2px 8px 0 #1e90ff08",
                  transition: "box-shadow 0.2s",
                }}
              >
                <FaLeaf
                  className="feature-icon"
                  style={{ color: "#1e90ff", fontSize: "2rem" }}
                />
                <div>
                  <h4 style={{ margin: 0, fontWeight: 600 }}>
                    Milieuvriendelijk
                  </h4>
                  <p style={{ margin: 0, color: "#555" }}>
                    Wij gebruiken groene producten die veilig zijn voor uw
                    omgeving.
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

      {/* Testimonials Section */}
      <section
        className="section testimonials"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="section-title">Wat Onze Klanten Zeggen</h2>
          <div className="testimonials-container">
            {/* Hier komen de testimonials */}
          </div>
        </div>
      </section>
      <section
        className="section testimonials"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="section-title">Wat Onze Klanten Zeggen</h2>
          <div className="testimonials-container">
            {/* Hier komen de testimonials */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
