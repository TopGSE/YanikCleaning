import React from "react";
import {
  FaShieldAlt,
  FaUserShield,
  FaCookie,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const PrivacyPolicy = () => (
  <div className="privacy-policy-container">
    <style>{`
      .privacy-policy-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #f8fdfc 0%, #ffffff 100%);
        padding: 6rem 0 4rem 0;
      }
      
      .privacy-policy-page {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .privacy-hero {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem 0;
        background: #ffffff;
        border-radius: 1.5rem;
        box-shadow: 0 4px 24px rgba(30, 144, 255, 0.08);
        border: 1px solid #f1f5f9;
      }
      
      .privacy-hero-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #1e90ff 0%, #38b6ff 100%);
        border-radius: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem auto;
        box-shadow: 0 8px 25px rgba(30, 144, 255, 0.3);
      }
      
      .privacy-hero-icon svg {
        font-size: 2rem;
        color: #ffffff;
      }
      
      .privacy-hero h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 1rem;
        letter-spacing: -0.025em;
      }
      
      .privacy-hero-subtitle {
        font-size: 1.1rem;
        color: #64748b;
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
      }
      
      .privacy-content {
        display: grid;
        gap: 2rem;
      }
      
      .privacy-section {
        background: #ffffff;
        border-radius: 1.25rem;
        padding: 2.5rem;
        box-shadow: 0 4px 24px rgba(30, 144, 255, 0.06);
        border: 1px solid #f1f5f9;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .privacy-section:hover {
        box-shadow: 0 8px 32px rgba(30, 144, 255, 0.12);
        border-color: rgba(30, 144, 255, 0.15);
      }
      
      .privacy-section-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      
      .privacy-section-icon {
        width: 48px;
        height: 48px;
        background: rgba(30, 144, 255, 0.1);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .privacy-section-icon svg {
        font-size: 1.25rem;
        color: #1e90ff;
      }
      
      .privacy-section h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0;
        line-height: 1.3;
      }
      
      .privacy-section p {
        font-size: 1rem;
        color: #475569;
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }
      
      .privacy-section p:last-child {
        margin-bottom: 0;
      }
      
      .privacy-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .privacy-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #475569;
        line-height: 1.6;
      }
      
      .privacy-list li:last-child {
        margin-bottom: 0;
      }
      
      .privacy-list li::before {
        content: '✓';
        color: #1e90ff;
        font-weight: 600;
        font-size: 0.875rem;
        width: 20px;
        height: 20px;
        background: rgba(30, 144, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 0.125rem;
      }
      
      .privacy-contact {
        background: linear-gradient(135deg, #f8fdfc 0%, #ffffff 100%);
        border: 2px solid rgba(30, 144, 255, 0.1);
      }
      
      .privacy-contact-info {
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      
      .privacy-contact-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        color: #475569;
      }
      
      .privacy-contact-item svg {
        color: #1e90ff;
        font-size: 1.125rem;
      }
      
      .privacy-contact-item a {
        color: #1e90ff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
      }
      
      .privacy-contact-item a:hover {
        color: #1c7ed6;
        text-decoration: underline;
      }
      
      .privacy-highlight {
        background: rgba(30, 144, 255, 0.05);
        border-left: 4px solid #1e90ff;
        padding: 1.5rem;
        border-radius: 0.75rem;
        margin: 1.5rem 0;
      }
      
      .privacy-highlight p {
        margin: 0;
        color: #1e293b;
        font-weight: 500;
      }
      
      @media (max-width: 768px) {
        .privacy-policy-container {
          padding: 5rem 0 3rem 0;
        }
        
        .privacy-policy-page {
          padding: 0 1rem;
        }
        
        .privacy-hero {
          margin-bottom: 3rem;
          padding: 2rem 1.5rem;
        }
        
        .privacy-hero h1 {
          font-size: 2rem;
        }
        
        .privacy-hero-subtitle {
          font-size: 1rem;
        }
        
        .privacy-section {
          padding: 2rem 1.5rem;
        }
        
        .privacy-section h2 {
          font-size: 1.25rem;
        }
        
        .privacy-section-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .privacy-contact-info {
          gap: 0.75rem;
        }
      }
    `}</style>

    <div className="privacy-policy-page">
      <div className="privacy-hero">
        <div className="privacy-hero-icon">
          <FaShieldAlt />
        </div>
        <h1>Privacybeleid</h1>
        <p className="privacy-hero-subtitle">
          Bij Yanik Cleaning nemen wij uw privacy serieus. We leggen transparant
          uit hoe wij uw persoonsgegevens verwerken en beschermen, volledig
          volgens de AVG/GDPR-wetgeving.
        </p>
      </div>

      <div className="privacy-content">
        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaUserShield />
            </div>
            <h2>Welke gegevens verzamelen wij?</h2>
          </div>
          <p>
            We verzamelen alleen de gegevens die noodzakelijk zijn voor onze
            dienstverlening:
          </p>
          <ul className="privacy-list">
            <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
            <li>Adresgegevens voor dienstverlening</li>
            <li>Technische gegevens (IP-adres, browserinformatie)</li>
            <li>Cookie- en gebruiksgegevens voor website-analyse</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaShieldAlt />
            </div>
            <h2>Waarom verzamelen wij deze gegevens?</h2>
          </div>
          <ul className="privacy-list">
            <li>Om contact met u op te nemen en offertes te verstrekken</li>
            <li>Voor het uitvoeren van schoonmaakdiensten</li>
            <li>Voor facturatie en administratie</li>
            <li>Om onze website en dienstverlening te verbeteren</li>
            <li>Om te voldoen aan wettelijke verplichtingen</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaShieldAlt />
            </div>
            <h2>Hoe beschermen wij uw gegevens?</h2>
          </div>
          <ul className="privacy-list">
            <li>
              Wij delen uw gegevens nooit met derden zonder uw toestemming,
              tenzij wettelijk verplicht
            </li>
            <li>Wij gebruiken versleuteling en beveiligde verbindingen</li>
            <li>Toegang tot gegevens is beperkt tot geautoriseerd personeel</li>
          </ul>
        </div>

        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaCookie />
            </div>
            <h2>Cookies en tracking</h2>
          </div>
          <p>
            Onze website gebruikt cookies om uw ervaring te verbeteren en
            statistieken te verzamelen. U kunt uw cookievoorkeuren altijd
            aanpassen via de cookie-instellingen.
          </p>
          <div className="privacy-highlight">
            <p>
              U heeft volledige controle over uw cookievoorkeuren en kunt deze
              op elk moment wijzigen.
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaUserShield />
            </div>
            <h2>Uw rechten</h2>
          </div>
          <p>U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
          <ul className="privacy-list">
            <li>Recht op inzage, correctie en verwijdering van uw gegevens</li>
            <li>Recht op beperking van verwerking</li>
            <li>Recht op overdraagbaarheid van gegevens</li>
            <li>Recht om bezwaar te maken tegen verwerking</li>
            <li>Recht om toestemming in te trekken</li>
          </ul>
          <div className="privacy-highlight">
            <p>
              U kunt uw rechten uitoefenen door contact met ons op te nemen via
              de onderstaande contactgegevens.
            </p>
          </div>
        </div>

        <div className="privacy-section privacy-contact">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaEnvelope />
            </div>
            <h2>Contact & Vragen</h2>
          </div>
          <p>
            Heeft u vragen over dit privacybeleid of wilt u uw rechten
            uitoefenen? Neem dan contact met ons op:
          </p>
          <div className="privacy-contact-info">
            <div className="privacy-contact-item">
              <FaEnvelope />
              <span>
                E-mail:{" "}
                <a href="mailto:cleaningyanak@gmail.com">
                  cleaningyanak@gmail.com
                </a>
              </span>
            </div>
            <div className="privacy-contact-item">
              <FaPhone />
              <span>
                Telefoon: <a href="tel:+32470458644">+32 470 45 86 44</a>
              </span>
            </div>
          </div>
        </div>

        <div className="privacy-section">
          <div className="privacy-section-header">
            <div className="privacy-section-icon">
              <FaShieldAlt />
            </div>
            <h2>Wijzigingen in dit beleid</h2>
          </div>
          <p>
            Dit privacybeleid kan worden bijgewerkt om wijzigingen in onze
            praktijken of wettelijke vereisten weer te geven. De laatste
            wijziging was op <strong>1 augustus 2025</strong>.
          </p>
          <div className="privacy-highlight">
            <p>
              Wij raden u aan deze pagina regelmatig te raadplegen voor
              eventuele updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
