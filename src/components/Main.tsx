import React from "react";
import img from "../assets/images/704caf0c-b7ad-4d26-8886-b703834efcf6 (1).webp";

const Main = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center ps-5 justify-content-center">
          <h5 className="pt-5 text-white fonts border-bottom">
            Hello there! 👋 My name is <i>Dijana</i>, and I am an enthusiastic{" "}
            <i>React JS developer</i>.
            <p className="mt-4 border-bottom ">
              Although I am at the beginning of my journey into the React world,
              I am a dedicated individual with a strong eagerness to learn new
              skills, develop, and grow.
            </p>
            <p className="mt-4 border-bottom">
              I am actively seeking a company environment that will provide me
              with the opportunity to enhance my abilities and expand my
              knowledge.
            </p>
            <p className="mt-4 border-bottom">
              My ultimate goal is to become an experienced frontend developer,
              with numerous successful projects under my belt.
            </p>
            If you are looking for a highly motivated person dedicated to
            succeeding in React JS, please feel free to contact me.
          </h5>
        </div>
        <div className="col-md-6 d-flex align-items-center  justify-content-center border-bottom">
          <img
            src={img}
            alt="image of Dijana Veljanoska Nikoloska"
            className="img-fluid  "
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
