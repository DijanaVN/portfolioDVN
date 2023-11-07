import React from "react";
import img from "../assets/images/annie-spratt-6a3nqQ1YwBw-unsplash.jpg";
import Projects from "./../components/Projects";
import ScrollToTopButton from "./../components/ScrollToTheTopButton";

const ProjectsPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div className="card-group p-5 mt-5 " style={backgroundStyle}>
      <Projects />
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectsPage;
