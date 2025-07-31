import { useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, detailed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card-link`}
      tabIndex={0}
      style={{ textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`service-card ${isHovered ? "hovered" : ""}`}>
        <div className="service-img">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {detailed && (
            <div className="service-details">
              <h4>Service Includes:</h4>
              <ul>
                {service.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="service-footer">
            <Link
              to="/contact#main-contact-section"
              className="btn btn-small"
              style={{ borderRadius: "10px" }}
            >
              Vraag offerte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
