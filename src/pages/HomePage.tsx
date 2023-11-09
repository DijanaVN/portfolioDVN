import React, { useRef } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import About from "../components/About";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";
import Projects from "./../components/Projects";
import { TypingAnimation } from "./../components/TypingMotion";
import useInViewport from "../hooks/useInViewport";
import Contact from "../components/Contact";
import CV from "./PreITExperienceCV";

const HomePage = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const inViewportAbout = useInViewport(aboutRef);
  const inViewportProjects = useInViewport(projectsRef);
  const inViewportContact = useInViewport(contactRef);

  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div
      className="container-fluid p-0  ms-0 me-0 mt-2 "
      style={backgroundStyle}
    >
      <div>
        <NavBar />
      </div>
      <Main />
      <div className="text-center text-white fonts fs-1 lh-lg" ref={aboutRef}>
        {inViewportAbout && <TypingAnimation text={" ABOUT SECTION"} />}
      </div>
      <About />
      <div
        className="text-center text-white fonts fs-1 lh-lg"
        ref={projectsRef}
      >
        {inViewportProjects && <TypingAnimation text={" PROJECTS"} />}
      </div>
      <div className="m-3">
        <Projects />
      </div>

      <div
        className="text-center text-white fonts mt-5  fs-1 lh-lg pt-5"
        ref={contactRef}
      >
        {inViewportContact && <TypingAnimation text={" CONTACT ME"} />}
      </div>
      <Contact />

      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
