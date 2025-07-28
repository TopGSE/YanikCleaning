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
          <FaShieldAlt size={38} color="#028090" />
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
                <input
                  type="checkbox"
                  checked
                  disabled
                  style={{ display: "none" }}
                />
                <span className="toggle-slider essential">
                  <span className="toggle-knob" />
                </span>
                Noodzakelijke cookies{" "}
                <span className="cookie-toggle-desc">(Altijd actief)</span>
              </label>
              <label className="cookie-toggle">
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
                Statistische cookies
              </label>
              <label className="cookie-toggle">
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
                Marketing cookies
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
        .cookie-decline {
          background: #fff;
          color: #e74c3c;
          border: 1px solid #e74c3c;
        }
        .cookie-decline:hover {
          background: #e74c3c;
          color: #fff;
        }
        .cookie-overlay-consent {
          position: fixed;
          inset: 0;
          background: rgba(24, 49, 83, 0.82);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cookie-overlay-card {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px #18315333;
          padding: 2.7rem 2.2rem 2.2rem 2.2rem;
          max-width: 95vw;
          width: 370px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slideUp 0.6s cubic-bezier(.23,1.01,.32,1) both;
        }
        @keyframes slideUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .cookie-icon {
          margin-bottom: 1.1rem;
        }
        .cookie-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #183153;
          margin-bottom: 1.1rem;
        }
        .cookie-desc {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 1.5rem;
        }
        .cookie-link {
          color: #028090;
          text-decoration: underline;
        }
        .cookie-btn-group {
          display: flex;
          gap: 0.7rem;
          margin-bottom: 0.7rem;
        }
        .cookie-btn {
          margin: 0.5rem 0.3rem;
          padding: 0.7rem 1.6rem;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px #02809022;
          transition: background 0.2s, color 0.2s;
        }
        .cookie-accept {
          background: linear-gradient(90deg, #00a896 60%, #028090 100%);
          color: #fff;
        }
        .cookie-accept:hover {
          background: linear-gradient(90deg, #028090 60%, #00a896 100%);
        }
        .cookie-essential {
          background: #fff;
          color: #028090;
          border: 1px solid #00a896;
        }
        .cookie-essential:hover {
          background: #028090;
          color: #fff;
        }
        .cookie-customize {
          background: #f7f7f7;
          color: #444;
          border: 1px solid #ddd;
          margin-bottom: 0.7rem;
        }
        .cookie-customize:hover {
          background: #02809022;
        }
        .cookie-customize-panel {
          background: #f7f7f7;
          border-radius: 1rem;
          box-shadow: 0 2px 8px #18315322;
          padding: 1.2rem;
          margin-top: 1.2rem;
          text-align: left;
          font-size: 0.98rem;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          pointer-events: none;
          transition: opacity 0.45s cubic-bezier(.23,1.01,.32,1), transform 0.45s cubic-bezier(.23,1.01,.32,1);
        }
        .cookie-customize-panel.slide-in {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .cookie-toggle-group {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-bottom: 1.1rem;
        }
        .cookie-toggle {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 1rem;
        }
        .toggle-slider {
          display: inline-block;
          width: 38px;
          height: 22px;
          background: #ddd;
          border-radius: 999px;
          position: relative;
          margin-right: 0.5rem;
          transition: background 0.25s;
          box-shadow: 0 1px 4px #18315322;
        }
        .toggle-slider.essential {
          background: #028090;
        }
        .toggle-slider.active {
          background: linear-gradient(90deg, #00a896 60%, #028090 100%);
        }
        .toggle-knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 6px #18315333;
          transition: left 0.25s cubic-bezier(.23,1.01,.32,1), background 0.2s;
          border: 2px solid #fff;
        }
        .toggle-slider.active .toggle-knob {
          left: 18px;
          background: #fff;
        }
        .toggle-slider.essential .toggle-knob {
          background: #028090;
          border: 2px solid #fff;
        }
        .cookie-toggle-desc {
          font-size: 0.92em;
          color: #888;
        }
        .cookie-save {
          background: linear-gradient(90deg, #00a896 60%, #028090 100%);
          color: #fff;
        }
        .cookie-save:hover {
          background: linear-gradient(90deg, #028090 60%, #00a896 100%);
        }
        @media (max-width: 600px) {
          .cookie-overlay-card {
            width: 98vw;
            padding: 1.2rem 0.5rem 1.1rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsentOverlay;
