import React from "react";

const PrivacyPolicy = () => (
  <div
    className="privacy-policy-page"
    style={{ maxWidth: 700, margin: "0 auto", padding: "2.5rem 1.2rem" }}
  >
    <style>{`
      .privacy-policy-page {
        background: #fff;
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px #18315322;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        font-family: 'Inter', Arial, sans-serif;
      }
      .privacy-policy-page h1 {
        font-size: 2rem;
        color: #028090;
        margin-bottom: 1.2rem;
        font-weight: 700;
      }
      .privacy-policy-page h2 {
        font-size: 1.2rem;
        color: #183153;
        margin-top: 2.2rem;
        margin-bottom: 0.7rem;
        font-weight: 600;
      }
      .privacy-policy-page p, .privacy-policy-page ul {
        font-size: 1.05rem;
        color: #444;
        margin-bottom: 1.1rem;
        line-height: 1.7;
      }
      .privacy-policy-page ul {
        padding-left: 1.2rem;
      }
      .privacy-policy-page li {
        margin-bottom: 0.5rem;
      }
      @media (max-width: 700px) {
        .privacy-policy-page {
          border-radius: 0.7rem;
          margin-top: 1.2rem;
          margin-bottom: 1.2rem;
        }
      }
    `}</style>
    <h1>Privacybeleid</h1>
    <p>
      Bij Yanik Cleaning nemen wij uw privacy serieus. Op deze pagina leggen wij
      uit hoe wij uw persoonsgegevens verwerken en beschermen, volledig volgens
      de AVG/GDPR-wetgeving.
    </p>
    <h2>Welke gegevens verzamelen wij?</h2>
    <ul>
      <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
      <li>Adresgegevens voor dienstverlening</li>
      <li>Technische gegevens (IP-adres, browserinformatie)</li>
      <li>Cookie- en gebruiksgegevens voor website-analyse</li>
    </ul>
    <h2>Waarom verzamelen wij deze gegevens?</h2>
    <ul>
      <li>Om contact met u op te nemen en offertes te verstrekken</li>
      <li>Voor het uitvoeren van schoonmaakdiensten</li>
      <li>Voor facturatie en administratie</li>
      <li>Om onze website en dienstverlening te verbeteren</li>
      <li>Om te voldoen aan wettelijke verplichtingen</li>
    </ul>
    <h2>Hoe beschermen wij uw gegevens?</h2>
    <ul>
      <li>Uw gegevens worden opgeslagen op beveiligde servers</li>
      <li>
        Wij delen uw gegevens nooit met derden zonder uw toestemming, tenzij
        wettelijk verplicht
      </li>
      <li>Wij gebruiken versleuteling en beveiligde verbindingen</li>
      <li>Toegang tot gegevens is beperkt tot geautoriseerd personeel</li>
    </ul>
    <h2>Cookies en tracking</h2>
    <p>
      Onze website gebruikt cookies om uw ervaring te verbeteren en statistieken
      te verzamelen. U kunt uw cookievoorkeuren altijd aanpassen via de
      cookie-instellingen. Voor meer informatie, zie ons cookiebeleid.
    </p>
    <h2>Uw rechten</h2>
    <ul>
      <li>Recht op inzage, correctie en verwijdering van uw gegevens</li>
      <li>Recht op beperking van verwerking</li>
      <li>Recht op overdraagbaarheid van gegevens</li>
      <li>Recht om bezwaar te maken tegen verwerking</li>
      <li>Recht om toestemming in te trekken</li>
    </ul>
    <p>
      U kunt uw rechten uitoefenen door contact met ons op te nemen via{" "}
      <a href="mailto:info@yanikcleaning.nl">cleaningyanak@gmail.com</a>.
    </p>
    <h2>Contactgegevens</h2>
    <p>
      Yanik Cleaning
      <br />
      E-mail: <a href="mailto:info@yanikcleaning.nl">cleaningyanak@gmail.com</a>
      <br />
      Telefoon: +32 470 45 86 44
    </p>
    <h2>Wijzigingen in dit beleid</h2>
    <p>
      Dit privacybeleid kan worden bijgewerkt. De laatste wijziging was op 27
      juli 2025. Wij raden u aan deze pagina regelmatig te raadplegen.
    </p>
  </div>
);

export default PrivacyPolicy;
