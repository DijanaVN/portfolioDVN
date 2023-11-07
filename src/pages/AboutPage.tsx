import React from "react";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import About from "./../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const AboutPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid p-md-5 " style={backgroundStyle}>
      <About />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
