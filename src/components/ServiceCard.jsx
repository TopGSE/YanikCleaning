import { useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, detailed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-img">
        <img src={service.image} alt={service.title} loading="lazy" />
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
          <Link to="/contact" className="btn btn-small">
            Vraag offerte
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
