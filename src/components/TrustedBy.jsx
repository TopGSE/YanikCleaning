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
    name: "Apple",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Facebook",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Twitter",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg",
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Uber",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
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
