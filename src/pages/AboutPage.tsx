import React from "react";
import img from "../assets/images/tim-mossholder-_YwD-QZMW8c-unsplash.jpg";
import About from "./../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const AboutPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid p-5" style={backgroundStyle}>
      <About />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
