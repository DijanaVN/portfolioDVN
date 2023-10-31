import React from "react";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="container-fluid mt-4">
        <div className="row">
          <Aside />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
