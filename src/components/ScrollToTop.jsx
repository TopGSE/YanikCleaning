import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top-btn${visible ? " visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll naar boven"
    >
      <span className="scroll-to-top-circle">
        <FaArrowUp className="scroll-to-top-arrow" />
      </span>
    </button>
  );
};

export default ScrollToTop;
