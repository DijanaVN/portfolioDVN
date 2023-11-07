import React from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import About from "../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";
import Projects from "./../components/Projects";
import { TypingAnimation } from "./../components/TypingMotion";
import { motion } from "framer-motion";

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
      <div
        className=" text-center text-white fonts  fs-1 lh-lg
      "
      >
        <TypingAnimation text={" ABOUT SECTION"}></TypingAnimation>
      </div>
      <About />
      <div
        className=" text-center text-white fonts  fs-1 lh-lg
      "
      >
        <TypingAnimation text={" PROJECTS"}></TypingAnimation>
      </div>
      <div className="m-3">
        <Projects />
      </div>
      <div
        className=" text-center text-white fonts ms-5 fs-1 lh-lg
      "
      >
        <TypingAnimation text={" CONTACT"}></TypingAnimation>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
