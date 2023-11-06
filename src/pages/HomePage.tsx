import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import img from "../assets/images/tim-mossholder-_YwD-QZMW8c-unsplash.jpg";
import About from "./About";

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="container-fluid" style={backgroundStyle}>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid ">
        <div className="row  ">
          <Main />
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
