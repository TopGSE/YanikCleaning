import React, { useEffect, useState, useRef } from "react";

// Hook to detect if an element is in viewport
function useInView(options) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);
  return [ref, inView];
}
// Animated counter for stats
function AnimatedCounter({
  value,
  duration = 1800,
  isPercent = false,
  isPlus = false,
  start = false,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let startVal = 0;
    let end = typeof value === "number" ? value : parseInt(value);
    if (isNaN(end)) end = 0;
    let startTime = null;
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - startVal) + startVal));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCounter);
      } else {
        setCount(end);
      }
    }
    ref.current = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration, start]);
  return (
    <span>
      {count}
      {isPercent && "%"}
      {isPlus && "+"}
    </span>
  );
}
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
    { icon: <FaUsers />, number: 250, label: "Happy Clients", isPlus: true },
    {
      icon: <FaChartLine />,
      number: 98,
      label: "Satisfaction Rate",
      isPercent: true,
    },
    {
      icon: <FaHandsHelping />,
      number: 50,
      label: "Team Members",
      isPlus: true,
    },
  ];

  // Intersection observer for stats section
  const [statsRef, statsInView] = useInView({ threshold: 0.4 });

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

            <h1 className="hero-title-minimal">Yanik Cleaning</h1>

            <div className="hero-subtitle-minimal">
              <AnimatedVerticalText
                words={[
                  "BETROUWBAAR.",
                  "DUURZAAM.",
                  "TOEGEWIJD AAN KWALITEIT.",
                  "FLEXIBEL.",
                  "PROFESSIONEEL.",
                  "KLANTGERICHT.",
                  "ERVAREN TEAM.",
                  "SNELLE SERVICE.",
                  "TRANSPARANT.",
                  "INNOVATIEF.",
                  "LOKAAL BETROKKEN.",
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

      {/* Enhanced Statistieken Sectie */}
      <section className="section stats-section" ref={statsRef}>
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="60%" stopColor="#1e90ff" />
              <stop offset="100%" stopColor="#38b6ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="container">
          <div className="stats-header">
            <div className="stats-badge">
              <span>Onze Prestaties</span>
            </div>
            <h2 className="stats-title">
              Cijfers die <span className="highlight">Spreken</span>
            </h2>
            <p className="stats-subtitle">
              Resultaten waar we trots op zijn en die onze toewijding aan
              excellentie tonen
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon-wrapper">
                  <div className="stat-icon" style={{ color: "transparent" }}>
                    {React.cloneElement(stat.icon, {
                      fill: "url(#blueGradient)",
                    })}
                  </div>
                </div>
                <div className="stat-content">
                  <h3
                    className="stat-number"
                    style={{ color: "#1a1a1a !important" }}
                  >
                    <AnimatedCounter
                      value={stat.number}
                      duration={1800}
                      isPercent={stat.isPercent}
                      isPlus={stat.isPlus}
                      start={statsInView}
                    />
                  </h3>
                  <p
                    className="stat-label"
                    style={{ color: "#555555 !important", fontWeight: "600" }}
                  >
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Sectie */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="team-header">
            <div className="team-badge">
              <span>Ons Team</span>
            </div>
            <h2 className="team-title">
              Ontmoet de <span className="highlight">Professionals</span>
            </h2>
            <p className="team-subtitle">
              Getrainde experts die uw vertrouwen waard zijn en toegewijd zijn
              aan uw tevredenheid
            </p>
          </div>

          <div
            style={{
              maxWidth: "600px",
              margin: "2rem auto 0",
              textAlign: "center",
              fontSize: "1.15rem",
              color: "#222",
              borderRadius: "1.2rem",
              padding: "2.2rem 1.5rem",
            }}
          >
            <p>
              <b>Murat Yanik</b> en <b>Adem Yanik</b> zijn twee broers die samen
              Yanik Cleaning zijn gestart. Met passie, toewijding en een focus
              op kwaliteit bouwen zij aan een betrouwbare schoonmaakpartner voor
              bedrijven en particulieren.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Missie Sectie */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-layout">
            <div className="mission-visual">
              <div className="mission-icon-grid">
                <div className="mission-icon-item">
                  <div className="mission-icon">🌱</div>
                  <span>Duurzaam</span>
                </div>
                <div className="mission-icon-item">
                  <div className="mission-icon">✨</div>
                  <span>Schoon</span>
                </div>
                <div className="mission-icon-item">
                  <div className="mission-icon">💚</div>
                  <span>Gezond</span>
                </div>
                <div className="mission-icon-item">
                  <div className="mission-icon">🎯</div>
                  <span>Precies</span>
                </div>
              </div>
              <div className="mission-decorative">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>

            <div className="mission-content">
              <div className="mission-badge">
                <span>Onze Missie</span>
              </div>
              <h2 className="mission-title">
                Samen voor een{" "}
                <span className="highlight">Schonere Toekomst</span>
              </h2>
              <div className="mission-text">
                <p>
                  Wij bieden uitzonderlijke schoonmaakdiensten die bijdragen aan
                  een gezonde en productieve omgeving voor onze klanten. Daarbij
                  werken we met duurzame methodes die het milieu beschermen.
                </p>
                <p>
                  Wij geloven dat een schone ruimte bijdraagt aan welzijn,
                  gezondheid en werkplezier. Dit is onze belofte aan u en aan
                  toekomstige generaties.
                </p>
              </div>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <span>Kwaliteitsgarantie</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌍</div>
                  <span>Milieuvriendelijk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
