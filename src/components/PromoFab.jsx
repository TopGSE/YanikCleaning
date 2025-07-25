import React from "react";

const PromoFab = () => {
  const [showPromo, setShowPromo] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <>
      <style>{`
        .promo-fab {
          position: fixed;
          left: 1.2rem;
          bottom: 1.2rem;
          width: 56px;
          height: 56px;
          background: #1e90ff;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(30, 144, 255, 0.18);
          z-index: 9999;
          cursor: pointer;
          border: 3px solid #fff;
          transition: background 0.2s, box-shadow 0.2s;
          animation: promo-pulse 1.4s infinite;
        }
        @keyframes promo-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.25),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(30, 144, 255, 0.05),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1.08);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(30, 144, 255, 0.25),
              0 4px 16px rgba(30, 144, 255, 0.18);
            transform: scale(1);
          }
        }
        .promo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 48, 80, 0.18);
          backdrop-filter: blur(6px) saturate(1.2);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s;
        }
        .promo-modal {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(2, 128, 144, 0.18);
          padding: 2.2rem 2.2rem 1.7rem 2.2rem;
          max-width: 95vw;
          width: 370px;
          text-align: center;
          position: relative;
        }
        .promo-modal .promo-discount {
          margin: 0 auto 1.2rem auto;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #1e90ff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.1rem;
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(30, 144, 255, 0.13);
          border: 4px solid #fff;
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
        }
        .promo-modal .promo-text {
          margin-top: 3.5rem;
          font-size: 1.08rem;
          color: #555;
          margin-bottom: 1.2rem;
        }
        .promo-modal .promo-close {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          font-size: 1.5rem;
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2;
          transition: color 0.18s;
        }
        .promo-modal .promo-close:hover {
          color: #028090;
        }
        @media (max-width: 768px) {
          .promo-fab {
            left: 1rem;
            bottom: 1rem;
            width: 48px;
            height: 48px;
            font-size: 1.1rem;
          }
          .promo-modal {
            width: 95vw;
            padding: 1.2rem 0.5rem 1.1rem 0.5rem;
          }
          .promo-modal .promo-discount {
            width: 60px;
            height: 60px;
            font-size: 1.2rem;
            top: -30px;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <div
        className="promo-fab"
        onClick={() => setShowPromo(true)}
        title="Bekijk promotie"
      >
        -20%
      </div>
      {showPromo && (
        <div
          className="promo-modal-overlay"
          onClick={() => setShowPromo(false)}
        >
          <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="promo-close"
              onClick={() => setShowPromo(false)}
              aria-label="Sluiten"
            >
              &times;
            </button>
            <div className="promo-discount">-20%</div>
            <div className="promo-text">
              Eerste schoonmaak met 20% korting.
              <br />
              <strong>Probeer ons nu!</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoFab;
