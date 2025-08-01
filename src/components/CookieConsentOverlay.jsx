import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { setCookie, getCookie } from "../utils/cookieUtils";
import { FaShieldAlt } from "react-icons/fa";

const COOKIE_KEY = "cookiePrefs";

const CookieConsentOverlay = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [categories, setCategories] = useState({
    essential: true,
    statistics: false,
    marketing: false,
  });
  const [privacyDismissed, setPrivacyDismissed] = useState(false);

  useEffect(() => {
    const prefLocal = localStorage.getItem(COOKIE_KEY);
    const prefCookie = getCookie(COOKIE_KEY);
    if (location.pathname === "/privacy") {
      setVisible(false);
      setPrivacyDismissed(true);
      return;
    }
    // If user leaves /privacy and hasn't chosen, show overlay again
    if (!prefLocal && !prefCookie && privacyDismissed) {
      setVisible(true);
      setPrivacyDismissed(false);
      return;
    }
    // Initial show if no choice and not on privacy page
    if (!prefLocal && !prefCookie && location.pathname !== "/privacy") {
      setVisible(true);
    }

    // Listen for footer event to open consent overlay
    const openConsent = () => setVisible(true);
    window.addEventListener("openCookieConsent", openConsent);
    return () => window.removeEventListener("openCookieConsent", openConsent);
  }, [location, privacyDismissed]);

  const handleAccept = () => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({
        essential: true,
        statistics: true,
        marketing: true,
        status: "accepted",
      })
    );
    setCookie(COOKIE_KEY, "accepted", 180);
    setVisible(false);
  };

  // Decline all non-essential cookies (Weigeren)
  const handleDecline = () => {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({
        essential: true,
        statistics: false,
        marketing: false,
        status: "declined",
      })
    );
    setCookie(COOKIE_KEY, "declined", 180);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-overlay-consent"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie toestemming"
      tabIndex={-1}
    >
      <div className="cookie-overlay-card">
        <div className="cookie-icon">
          <FaShieldAlt size={24} color="#ffffff" />
        </div>
        <h2 className="cookie-title">Wij respecteren uw privacy</h2>
        <p className="cookie-desc">
          Deze website gebruikt cookies om uw ervaring te verbeteren,
          statistieken te verzamelen en relevante content te tonen. U kunt
          kiezen welke cookies u toestaat. Lees ons{" "}
          <Link to="/privacy" className="cookie-link">
            privacybeleid
          </Link>{" "}
          voor meer informatie.
        </p>
        <div className="cookie-btn-group">
          <button
            className="cookie-btn cookie-accept"
            onClick={handleAccept}
            aria-label="Accepteer alle cookies"
          >
            Accepteer
          </button>
          <button
            className="cookie-btn cookie-decline"
            onClick={handleDecline}
            aria-label="Weigeren"
          >
            Weigeren
          </button>
        </div>
        <button
          className="cookie-btn cookie-customize"
          onClick={() => setShowCustomize((v) => !v)}
          aria-label="Aanpassen"
        >
          Aanpassen
        </button>
        {showCustomize && (
          <div
            className={`cookie-customize-panel${
              showCustomize ? " slide-in" : ""
            }`}
          >
            <h3>Cookie-instellingen</h3>
            <div className="cookie-toggle-group">
              <label className="cookie-toggle">
                <div className="cookie-toggle-content">
                  <div className="cookie-toggle-title">
                    Noodzakelijke cookies
                  </div>
                  <div className="cookie-toggle-desc">
                    Deze cookies zijn nodig voor de basisfunctionaliteit van de
                    website
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  style={{ display: "none" }}
                />
                <span className="toggle-slider essential">
                  <span className="toggle-knob" />
                </span>
              </label>
              <label className="cookie-toggle">
                <div className="cookie-toggle-content">
                  <div className="cookie-toggle-title">
                    Statistische cookies
                  </div>
                  <div className="cookie-toggle-desc">
                    Helpen ons begrijpen hoe bezoekers de website gebruiken
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={categories.statistics}
                  onChange={(e) =>
                    setCategories((c) => ({
                      ...c,
                      statistics: e.target.checked,
                    }))
                  }
                  style={{ display: "none" }}
                />
                <span
                  className={`toggle-slider${
                    categories.statistics ? " active" : ""
                  }`}
                >
                  <span className="toggle-knob" />
                </span>
              </label>
              <label className="cookie-toggle">
                <div className="cookie-toggle-content">
                  <div className="cookie-toggle-title">Marketing cookies</div>
                  <div className="cookie-toggle-desc">
                    Gebruikt voor gepersonaliseerde advertenties en marketing
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={categories.marketing}
                  onChange={(e) =>
                    setCategories((c) => ({
                      ...c,
                      marketing: e.target.checked,
                    }))
                  }
                  style={{ display: "none" }}
                />
                <span
                  className={`toggle-slider${
                    categories.marketing ? " active" : ""
                  }`}
                >
                  <span className="toggle-knob" />
                </span>
              </label>
            </div>
            <button
              className="cookie-btn cookie-save"
              onClick={() => {
                localStorage.setItem(
                  COOKIE_KEY,
                  JSON.stringify({
                    essential: true,
                    statistics: categories.statistics,
                    marketing: categories.marketing,
                    status: "custom",
                  })
                );
                setCookie(COOKIE_KEY, "custom", 180);
                setVisible(false);
              }}
              aria-label="Voorkeuren opslaan"
            >
              Voorkeuren opslaan
            </button>
          </div>
        )}
      </div>
      <style>{`
        .cookie-overlay-consent {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .cookie-overlay-card {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid #e0e0e0;
          padding: 0;
          max-width: 480px;
          width: 100%;
          position: relative;
          animation: fadeInScale 0.3s ease-out both;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        @keyframes fadeInScale {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .cookie-icon {
          position: absolute;
          top: -12px;
          left: 24px;
          width: 24px;
          height: 24px;
          background: #1e90ff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(30, 144, 255, 0.3);
        }
        
        .cookie-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin: 32px 24px 12px 24px;
          text-align: left;
          line-height: 1.3;
        }
        
        .cookie-desc {
          font-size: 14px;
          line-height: 1.5;
          color: #5a6c7d;
          margin: 0 24px 24px 24px;
          text-align: left;
        }
        
        .cookie-link {
          color: #1e90ff;
          text-decoration: none;
          font-weight: 500;
        }
        
        .cookie-link:hover {
          text-decoration: underline;
        }
        
        .cookie-btn-group {
          display: flex;
          gap: 8px;
          padding: 0 24px;
          margin-bottom: 16px;
        }
        
        .cookie-btn {
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
          text-align: center;
        }
        
        .cookie-accept {
          background: #1e90ff;
          border-color: #1e90ff;
          color: #ffffff;
        }
        
        .cookie-accept:hover {
          background: #1c7ed6;
          border-color: #1c7ed6;
        }
        
        .cookie-decline {
          background: #ffffff;
          border-color: #d1d5db;
          color: #5a6c7d;
        }
        
        .cookie-decline:hover {
          background: #f8f9fa;
          border-color: #9ca3af;
        }
        
        .cookie-customize {
          background: transparent;
          color: #1e90ff;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 24px 16px 24px;
          margin: 0;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        
        .cookie-customize:hover {
          color: #1c7ed6;
        }
        
        .cookie-customize-panel {
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
          padding: 20px 24px 24px 24px;
          margin-top: 0;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .cookie-customize-panel.slide-in {
          opacity: 1;
          max-height: 400px;
          pointer-events: auto;
        }
        
        .cookie-customize-panel h3 {
          font-size: 16px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 16px 0;
        }
        
        .cookie-toggle-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .cookie-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          font-size: 14px;
          color: #2c3e50;
          cursor: pointer;
          border-bottom: 1px solid #e9ecef;
        }
        
        .cookie-toggle:last-child {
          border-bottom: none;
        }
        
        .cookie-toggle-content {
          flex: 1;
        }
        
        .cookie-toggle-title {
          font-weight: 500;
          margin-bottom: 2px;
        }
        
        .cookie-toggle-desc {
          font-size: 12px;
          color: #6c757d;
          line-height: 1.3;
        }
        
        .toggle-slider {
          display: inline-block;
          width: 40px;
          height: 20px;
          background: #dee2e6;
          border-radius: 10px;
          position: relative;
          transition: background 0.2s ease;
          flex-shrink: 0;
          margin-left: 12px;
        }
        
        .toggle-slider.essential {
          background: #1e90ff;
        }
        
        .toggle-slider.active {
          background: #1e90ff;
        }
        
        .toggle-knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          transition: left 0.2s ease;
        }
        
        .toggle-slider.active .toggle-knob,
        .toggle-slider.essential .toggle-knob {
          left: 22px;
        }
        
        .cookie-save {
          background: #1e90ff;
          border: 1px solid #1e90ff;
          color: #ffffff;
          width: 100%;
          padding: 10px 16px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .cookie-save:hover {
          background: #1c7ed6;
          border-color: #1c7ed6;
        }
        
        @media (max-width: 768px) {
          .cookie-overlay-card {
            margin: 16px;
            max-width: 100%;
          }
          
          .cookie-btn-group {
            flex-direction: column;
          }
          
          .cookie-btn {
            flex: none;
          }
        }
        
        @media (max-width: 480px) {
          .cookie-title {
            font-size: 16px;
            margin: 28px 20px 12px 20px;
          }
          
          .cookie-desc {
            font-size: 13px;
            margin: 0 20px 20px 20px;
          }
          
          .cookie-btn-group {
            padding: 0 20px;
          }
          
          .cookie-customize {
            padding: 8px 20px 16px 20px;
          }
          
          .cookie-customize-panel {
            padding: 16px 20px 20px 20px;
          }
          
          .cookie-icon {
            left: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsentOverlay;
