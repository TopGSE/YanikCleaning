import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaHome,
  FaStore,
  FaHospital,
  FaSchool,
  FaIndustry,
} from "react-icons/fa";
import "./ServicesAdvancedTyped.css";

const Services = () => {
  const allServices = [
    {
      id: 1,
      title: "Kantoorschoonmaak",
      description:
        "Dagelijkse, wekelijkse of maandelijkse schoonmaak op maat voor uw bedrijf.",
      price: "$150+",
      icon: <FaBuilding />,
      image: "/images/vecteezy-foto-3.jpg",
      details: [
        "Stoffen en afnemen van alle oppervlakken",
        "Stofzuigen en dweilen van vloeren",
        "Desinfecteren van contactpunten",
        "Vuilnis en recycling legen",
        "Sanitair schoonmaken en bijvullen",
      ],
    },
    {
      id: 2,
      title: "Commerciële Schoonmaak",
      description:
        "Complete schoonmaakoplossingen voor winkels, restaurants en meer.",
      price: "$200+",
      icon: <FaStore />,
      image: "/images/vecteezy-foto-4.jpg",
      details: [
        "Vloeronderhoud en reiniging",
        "Ramen en glaswerk schoonmaken",
        "Keuken en horeca schoonmaak",
        "Hoog stof afnemen en armaturen reinigen",
        "Gespecialiseerde oppervlaktereiniging",
      ],
    },
    {
      id: 3,
      title: "Oprit Reiniging",
      description:
        "Professionele reiniging van uw oprit, terras of parkeerplaats voor een frisse uitstraling.",
      price: "$220+",
      icon: <FaHome />,
      image: "/images/vecteezy-foto-7.jpeg",
      details: [
        "Hogedrukreiniging van opritten en terrassen",
        "Verwijderen van mos, algen en vuil",
        "Reinigen van klinkers, tegels en beton",
        "Milieuvriendelijke reinigingsmiddelen",
        "Herstel van originele kleur en uitstraling",
      ],
    },
    {
      id: 4,
      title: "Medische Faciliteit Reiniging",
      description:
        "Gespecialiseerde schoonmaak voor klinieken, tandartspraktijken en medische centra.",
      price: "$250+",
      icon: <FaHospital />,
      image: "/images/vecteezy-foto-6.jpg",
      details: [
        "Privacy- en veiligheidsprotocollen",
        "Medisch afval afvoeren",
        "Desinfectie op hoog niveau",
        "Biohazard schoonmaakprotocollen",
        "Strikte naleving van gezondheidsregels",
      ],
    },
    {
      id: 5,
      title: "Algemene Tuinonderhoud",
      description:
        "Grondige schoonmaak van uw tuin inclusief snoeien, grasmaaien en onderhoud.",
      price: "$180+",
      icon: <FaSchool />,
      image: "/images/vecteezy-foto-8.jpg",
      details: [
        "Gras maaien en onkruid wieden",
        "Snoeien van hagen en struiken",
        "Bladeren harken en verwijderen",
        "Schoonmaken van tuinmeubilair",
        "Onderhoud van bloembedden en borders",
      ],
    },
    {
      id: 6,
      title: "Industriële Reiniging",
      description: "Zware schoonmaak voor magazijnen en productieomgevingen.",
      price: "$350+",
      icon: <FaIndustry />,
      image: "/images/vecteezy-foto-2.jpg",
      details: [
        "Reiniging van machines en apparatuur",
        "Hoogwerkers en vloeren reinigen",
        "Stof en vuil verwijderen",
        "Hogedrukreiniging",
        "Gespecialiseerde industriële oplossingen",
      ],
    },
  ];

  return (
    <div className="services-page">
      {/* Minimalist Hero Section */}
      <section className="minimalist-hero">
        <div className="hero-background-minimal">
          <img
            src="/images/vecteezy-foto-4.jpg"
            alt="Background"
            className="hero-bg-minimal"
          />
        </div>

        <div className="hero-content-minimal">
          <div className="hero-text-block">
            <div className="hero-label">Premium Schoonmaakdiensten</div>

            <h1 className="hero-title-minimal">Onze Diensten</h1>

            <p className="hero-subtitle-minimal">
              Schoonmaakoplossingen op maat voor elk bedrijf
            </p>

            <div className="hero-buttons-minimal">
              <a href="#services" className="btn-minimal primary">
                Bekijk diensten
              </a>
              <Link to="/contact" className="btn-minimal secondary">
                Offerte aanvragen
              </Link>
            </div>
          </div>

          <div className="hero-image-section">
            <div className="hero-accent-dot"></div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Uitgebreide Schoonmaakdiensten</h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            Wij bieden een breed scala aan professionele schoonmaakdiensten om
            uw bedrijf vlekkeloos te houden
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
          <h2 className="section-title">Ons Proces</h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            Hoe wij zorgen voor een perfect schoon resultaat, elke keer weer
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
          <h2 className="section-title">
            Klaar voor een brandschone werkplek?
          </h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", marginBottom: "2rem", opacity: 0.9 }}
          >
            Neem vandaag nog contact met ons op voor een gratis offerte of
            advies
          </p>
          <div style={{ textAlign: "center" }}>
            <Link
              to="/contact"
              className="btn"
              style={{
                backgroundColor: "white",
                color: "var(--primary)",
                textDecoration: "none",
              }}
            >
              Vraag gratis offerte aan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
