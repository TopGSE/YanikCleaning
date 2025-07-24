import React, { useEffect, useState } from "react";
import { FaUsers, FaAward, FaChartLine, FaHandsHelping } from "react-icons/fa";
import "./About.css";

// Animated vertical text component for hero subtitle
function AnimatedVerticalText({ words, duration = 2000 }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [index, words.length, duration]);
  return (
    <div className="animated-text-container">
      {words.map((word, i) => (
        <div key={i} className={`animated-word${i === index ? " active" : ""}`}>
          {word}
        </div>
      ))}
      <style>{`
        .animated-text-container {
          height: 2.1em;
          overflow: hidden;
          position: relative;
          min-width: 180px;
        }
        .animated-word {
          position: absolute;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.4s, transform 0.6s cubic-bezier(.4,1.6,.4,1);
          font-size: 1.15rem;
          color: #666;
          font-weight: 500;
          line-height: 1.2;
        }
        .animated-word.active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s, transform 0.6s cubic-bezier(.4,1.6,.4,1);
        }
      `}</style>
    </div>
  );
}

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: "250+", label: "Happy Clients" },
    { icon: <FaAward />, number: "10+", label: "Years Experience" },
    { icon: <FaChartLine />, number: "98%", label: "Satisfaction Rate" },
    { icon: <FaHandsHelping />, number: "50+", label: "Team Members" },
  ];

  return (
    <div className="about-page">
      {/* Minimalist Hero Section */}
      <section className="minimalist-hero about-hero">
        <div className="hero-background-minimal">
          <img
            src="/images/vecteezy-foto-2.jpg"
            alt="Over Yanik Cleaning Hero"
            className="hero-bg-minimal"
          />
        </div>

        <div className="hero-content-minimal">
          <div className="hero-text-block">
            <div className="hero-label">Over Ons Bedrijf</div>

            <h1 className="hero-title-minimal">Over Yanik Cleaning</h1>

            <div className="hero-subtitle-minimal">
              <AnimatedVerticalText
                words={[
                  "BETROUWBAAR.",
                  "DUURZAAM.",
                  "TOEGEWIJD AAN KWALITEIT.",
                ]}
                duration={1800}
              />
            </div>

            <div className="hero-buttons-minimal">
              <a href="#story" className="btn-minimal primary">
                Ons verhaal
              </a>
              <a href="#team" className="btn-minimal secondary">
                Ontmoet het team
              </a>
            </div>
          </div>

          <div className="hero-image-section">
            <div className="hero-accent-dot"></div>
          </div>
        </div>
      </section>

      {/* Ons verhaal sectie */}
      <section className="section story-section" id="story">
        <div className="container">
          <div className="story-layout">
            {/* Left Side - Content */}
            <div className="story-content">
              <div className="story-badge">
                <span className="story-year">EST. 2023</span>
              </div>

              <h2 className="story-title">
                Ons <span className="highlight">Verhaal</span>
              </h2>

              <p className="story-subtitle">
                Van klein familiebedrijf tot vertrouwde schoonmaakpartner
              </p>

              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">De Start (2023)</h3>
                    <p className="timeline-text">
                      Yanik Cleaning werd opgericht als een klein familiebedrijf
                      met slechts twee teamleden en een passie voor netheid. Wat
                      begon als schoonmaak bij particulieren groeide al snel uit
                      door onze betrouwbaarheid en oog voor detail.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Vandaag</h3>
                    <p className="timeline-text">
                      We bedienen met trots meer dan 20 bedrijven in Gent en
                      omgeving met een team van 10 getrainde professionals.
                      Ondanks onze groei blijven we inzetten op persoonlijke
                      service en milieuvriendelijke werkwijzen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="story-values">
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <span>Duurzaam</span>
                </div>
                <div className="value-item">
                  <div className="value-icon">⭐</div>
                  <span>Kwaliteit</span>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <span>Betrouwbaar</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="story-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="growth-indicator">
                    <span className="growth-text">Groei sinds 2023</span>
                    <div className="growth-chart">
                      <div
                        className="chart-bar"
                        style={{ height: "30%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="chart-bar"
                        style={{ height: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="stats-mini">
                  <div className="mini-stat">
                    <span className="mini-number">2</span>
                    <span className="mini-label">Start teamleden</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-number">10</span>
                    <span className="mini-label">Huidige team</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-number">20+</span>
                    <span className="mini-label">Bedrijven</span>
                  </div>
                </div>

                <div className="decorative-elements">
                  <div className="floating-dot dot-1"></div>
                  <div className="floating-dot dot-2"></div>
                  <div className="floating-dot dot-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistieken Sectie */}
      <section className="section stats">
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
      </section>

      {/* Team Sectie */}
      <section className="section team" id="team">
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
