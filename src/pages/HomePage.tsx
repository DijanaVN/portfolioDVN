import React from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import About from "../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div
      className="container-fluid p-0  ms-0 me-0 mt-2 mb-2"
      style={backgroundStyle}
    >
      <div>
        <NavBar />
      </div>
      <Main />
      <About />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
