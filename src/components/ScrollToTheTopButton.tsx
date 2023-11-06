import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showBackToTop && (
        <button
          className="btn btn-light rounded-circle"
          style={{
            position: "fixed",
            bottom: "5.2rem",
            right: "2rem",
            zIndex: 1000,
            color: "purple",
          }}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up"> Back to Top</i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
