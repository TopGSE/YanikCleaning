import React, { useEffect, useRef, useState } from "react";
import "./IntroAnimation.css";

const LOGO_ICON = null;

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
    // 0-0.5s: particles, bg
    const t1 = setTimeout(() => setShowText(true), 500); // 0.5s: text in
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
        setTimeout(() => setShowLine(true), 300);
        setTimeout(() => setShowSparkle(true), 600);
        setTimeout(() => {
          setOut(true);
          setTimeout(onFinish, 900);
        }, 1200);
      }
    }
    const t2 = setTimeout(() => typeNext(), 700); // Start typewriter after text appears
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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
        <div
          className="ultra-logo-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Text */}
          <div
            className="ultra-logo-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              className="ultra-yanik"
              style={{
                opacity: showText ? 1 : 0,
                fontSize: "2.6rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              {COMPANY.split("").map((l, i) => (
                <span
                  key={i}
                  className={`yanik-letter${typed > i ? " letter-in" : ""}`}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {l}
                  {/* Shine overlay */}
                  {typed > i && (
                    <span
                      className={`shine-sweep${
                        typed - 1 === i ? " shine-animate" : ""
                      }`}
                    ></span>
                  )}
                </span>
              ))}
            </span>
            {/* Gold line sweep centered between YANIK and CLEANING */}
            <span
              className={`ultra-gold-line${showLine ? " line-in" : ""}`}
              style={{
                margin: "0.7rem auto",
                display: "block",
                width: "80px",
                height: "4px",
              }}
            />
            <span
              className={`ultra-cleaning${showSub ? " cleaning-in" : ""}`}
              style={{
                fontSize: "1.6rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              {SUB}
            </span>
          </div>
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
