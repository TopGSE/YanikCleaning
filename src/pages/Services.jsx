import ServiceCard from "../components/ServiceCard";
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
      title: "Dieptereiniging",
      description:
        "Grondige schoonmaak voor verhuizingen, opleveringen of seizoensonderhoud.",
      price: "$300+",
      icon: <FaHome />,
      image: "/images/vecteezy-foto-1.jpg",
      details: [
        "Dieptereiniging van alle ruimtes",
        "Reinigen van voegen en tegels",
        "Apparatuur binnen en buiten reinigen",
        "Plinten en randen schoonmaken",
        "Achter en onder meubels reinigen",
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
      title: "Onderwijsinstelling Reiniging",
      description:
        "Veilige en grondige schoonmaak voor scholen en universiteiten.",
      price: "$180+",
      icon: <FaSchool />,
      image: "/images/vecteezy-foto-5.jpg",
      details: [
        "Klaslokalen schoonmaken en desinfecteren",
        "Kleedkamers en gymzalen reinigen",
        "Kantine en horeca schoonmaak",
        "Sanitair dieptereinigen",
        "Extra aandacht voor contactpunten",
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
      {/* Hero Section */}
      <section
        className="hero services-hero"
        style={{ backgroundImage: "url(/images/vecteezy-foto-4.jpg)" }}
      >
        <div className="hero-content services-hero-content">
          <h1 className="hero-title advanced-typed-title swipe-down">
            Onze Diensten
          </h1>
          <p
            className="hero-subtitle swipe-down"
            style={{
              fontSize: "1.25rem",
              color: "#028090",
              marginBottom: "1.2rem",
              fontWeight: 500,
              animationDelay: "0.35s",
            }}
          >
            Schoonmaakoplossingen op maat voor elk bedrijf
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.2rem",
              marginTop: "1.2rem",
            }}
          >
            <a
              href="#services"
              className="btn btn-gradient swipe-down"
              style={{
                fontWeight: 600,
                fontSize: "1.08rem",
                animationDelay: "0.5s",
              }}
            >
              Bekijk al onze diensten
            </a>
            <a
              href="/contact"
              className="btn swipe-down"
              style={{
                fontWeight: 600,
                fontSize: "1.08rem",
                background: "#028090",
                animationDelay: "0.65s",
              }}
            >
              Vraag offerte aan
            </a>
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
            <a
              href="/contact"
              className="btn"
              style={{ backgroundColor: "white", color: "var(--primary)" }}
            >
              Vraag gratis offerte aan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
