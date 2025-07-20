import "./TrustedBy.css";

const companyLogos = [
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Unilever",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Unilever.svg",
  },
  {
    name: "KPMG",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/KPMG_logo.svg",
  },
  {
    name: "ING",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/ING_Group_N.V._Logo.svg",
  },
  {
    name: "Philips",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Philips_logo_new.svg",
  },
  {
    name: "Rabobank",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Rabobank-Logo.svg",
  },
];

const TrustedBy = () => (
  <section className="trustedby-section">
    <div className="trustedby-logos-outer">
      <div className="trustedby-logos-inner">
        {companyLogos.concat(companyLogos).map((logo, idx) => (
          <div className="trustedby-logo" key={logo.name + idx}>
            <img src={logo.url} alt={logo.name + " logo"} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
