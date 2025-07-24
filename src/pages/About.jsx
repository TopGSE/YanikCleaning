import { FaUsers, FaAward, FaChartLine, FaHandsHelping } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: "250+", label: "Happy Clients" },
    { icon: <FaAward />, number: "10+", label: "Years Experience" },
    { icon: <FaChartLine />, number: "98%", label: "Satisfaction Rate" },
    { icon: <FaHandsHelping />, number: "50+", label: "Team Members" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="public/videos/vecteezy_clean-the-floor-using-water-spray_28174846.mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Over Yanik Cleaning</h1>
          <p className="hero-subtitle">
            Betrouwbaar. Duurzaam. Toegewijd aan kwaliteit.
          </p>
        </div>
      </section>

      {/* Ons verhaal sectie */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ons Verhaal</h2>
            <p className="section-subtitle">
              Hoe wij uitgegroeid zijn tot dé betrouwbare schoonmaakpartner in
              Gent
            </p>
          </div>

          <div className="about-story">
            <p>
              Yanik Cleaning werd opgericht in 2023 als een klein familiebedrijf
              met slechts twee teamleden en een passie voor netheid. Wat begon
              als schoonmaak bij particulieren groeide al snel uit tot
              professionele diensten voor bedrijven dankzij onze betrouwbaarheid
              en oog voor detail.
            </p>
            <p>
              Vandaag bedienen we met trots meer dan 20 bedrijven in Gent en
              omgeving met een team van 10 getrainde professionals. Ondanks onze
              groei blijven we inzetten op persoonlijke service en
              milieuvriendelijke werkwijzen.
            </p>
          </div>
        </div>
      </section>

      {/* Statistieken Sectie */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">
                  {stat.label === "Happy Clients"
                    ? "Tevreden Klanten"
                    : stat.label === "Years Experience"
                    ? "Jaar Ervaring"
                    : stat.label === "Satisfaction Rate"
                    ? "Tevredenheid"
                    : stat.label === "Team Members"
                    ? "Teamleden"
                    : stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sectie */}
      <section className="section team">
        <div className="container">
          <h2 className="section-title">Ons Team</h2>
          <p className="section-subtitle">
            Professioneel, getraind en toegewijd aan uw tevredenheid
          </p>

          <div className="team-grid">{/* Teamleden kaarten komen hier */}</div>
        </div>
      </section>

      {/* Missie Sectie */}
      <section
        className="section mission"
        style={{ backgroundColor: "#e9f5f4" }}
      >
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Onze Missie</h2>
            <p>
              Wij bieden uitzonderlijke schoonmaakdiensten die bijdragen aan een
              gezonde en productieve omgeving voor onze klanten. Daarbij werken
              we met duurzame methodes die het milieu beschermen. Wij geloven
              dat een schone ruimte bijdraagt aan welzijn, gezondheid en
              werkplezier.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
