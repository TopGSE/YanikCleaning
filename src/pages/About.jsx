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
      <section
        className="hero"
        style={{ backgroundImage: "url(/images/about-hero.jpg)" }}
      >
        <div className="hero-content">
          <h1 className="hero-title">About Yanik Cleaning</h1>
          <p className="hero-subtitle">
            Professional cleaning services with a personal touch
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              How we became Toronto's trusted cleaning service
            </p>
          </div>

          <div className="about-story">
            <p>
              Founded in 2010, Yanik Cleaning started as a small local business
              with just three team members and a passion for cleanliness. What
              began as residential cleaning services quickly expanded to
              commercial spaces as we earned a reputation for reliability and
              attention to detail.
            </p>
            <p>
              Today, we're proud to serve over 200 businesses across the Greater
              Toronto Area with a team of 50+ trained professionals. Despite our
              growth, we maintain our commitment to personalized service and
              eco-friendly practices.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Professional, trained, and dedicated to your satisfaction
          </p>

          <div className="team-grid">
            {/* Team member cards would go here */}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="section mission"
        style={{ backgroundColor: "#e9f5f4" }}
      >
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p>
              To provide exceptional cleaning services that enhance our clients'
              environments while using sustainable practices that protect our
              planet. We believe a clean space promotes productivity, health,
              and well-being.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
