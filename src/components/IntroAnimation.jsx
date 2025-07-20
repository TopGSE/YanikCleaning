import React, { useEffect, useRef, useState } from "react";
import "./IntroAnimation.css";

const LOGO_ICON = (
  <svg className="intro-logo-icon" viewBox="0 0 64 64" width="64" height="64">
    {/* Abstract spray bottle: minimalist geometric */}
    <rect x="28" y="18" width="8" height="28" rx="4" fill="url(#chrome)" />
    <rect x="26" y="44" width="12" height="10" rx="4" fill="url(#chrome)" />
    <rect x="30" y="10" width="4" height="10" rx="2" fill="#d4af37" />
    <ellipse cx="32" cy="8" rx="6" ry="3" fill="#c0c0c0" />
    <defs>
      <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="40%" stopColor="#c0c0c0" />
        <stop offset="100%" stopColor="#1a365d" />
      </linearGradient>
    </defs>
  </svg>
);

const COMPANY = "YANIK";
const SUB = "CLEANING";

const IntroAnimation = ({ onFinish }) => {
  const [out, setOut] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);
  const [typed, setTyped] = useState(0);
  const [showSub, setShowSub] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const timeoutRef = useRef();

  // Animation sequence
  useEffect(() => {
    // 0-1s: particles, bg
    const t1 = setTimeout(() => setShowIcon(true), 1000); // 1s: icon in
    const t2 = setTimeout(() => setShowText(true), 2000); // 2s: text in
    // Typewriter effect for YANIK
    let typeIdx = 0;
    let typeTimer;
    function typeNext() {
      if (typeIdx < COMPANY.length) {
        setTyped(typeIdx + 1);
        typeIdx++;
        typeTimer = setTimeout(typeNext, 80);
      } else {
        setShowSub(true);
        setTimeout(() => setShowLine(true), 400);
        setTimeout(() => setShowSparkle(true), 700);
        setTimeout(() => {
          setOut(true);
          setTimeout(onFinish, 900);
        }, 1200);
      }
    }
    const t3 = setTimeout(() => typeNext(), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(typeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`intro-animation ultra-modern${out ? " out-sweep" : ""}`}>
      <div className="intro-bg ultra-bg" />
      <div className="intro-particles">
        {[...Array(18)].map((_, i) => (
          <span key={i} className={`particle particle-${i}`} />
        ))}
      </div>
      <div className="intro-content">
        <div className="ultra-logo-wrapper">
          {/* Icon */}
          <div className={`logo-icon-wrap${showIcon ? " icon-in" : ""}`}>
            {LOGO_ICON}
            <span className="icon-shimmer" />
          </div>
          {/* Text */}
          <div className="ultra-logo-text">
            <span className="ultra-yanik" style={{ opacity: showText ? 1 : 0 }}>
              {COMPANY.split("").map((l, i) => (
                <span
                  key={i}
                  className={`yanik-letter${typed > i ? " letter-in" : ""}`}
                >
                  {l}
                </span>
              ))}
            </span>
            <span className={`ultra-cleaning${showSub ? " cleaning-in" : ""}`}>
              {SUB}
            </span>
          </div>
          {/* Gold line sweep */}
          <span className={`ultra-gold-line${showLine ? " line-in" : ""}`} />
          {/* Final sparkle */}
          <span
            className={`ultra-sparkle${showSparkle ? " sparkle-in" : ""}`}
          />
        </div>
      </div>
      {/* Squeegee sweep transition */}
      <span className={`ultra-sweep${out ? " sweep-in" : ""}`} />
    </div>
  );
};

export default IntroAnimation;
