import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, detailed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-img">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-content">
        <div className="service-icon">{service.icon || <span>✨</span>}</div>
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
          <span className="service-price">{service.price}</span>
          <Link to="/contact" className="btn btn-small">
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
