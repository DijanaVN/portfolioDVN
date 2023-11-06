import React, { useState } from "react";
import img2 from "../assets/images/9a34d902-52a7-46e9-af0b-a8dd40868a88.jpg";
import { TypingAnimation } from "./TypingMotion";

const Main = () => {
  const mainStyle = {
    background: `url(${img2}) no-repeat center center/cover`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    margin: "5vw 0",
    opacity: 0.7,
  };

  return (
    <div className="container-fluid" style={mainStyle}>
      <div
        className="col-md-6 text-white fonts ms-5
      "
      >
        <TypingAnimation
          text={
            " Hello there! My name is Dijana, and I am an enthusiastic React JS developer."
          }
        ></TypingAnimation>
      </div>
    </div>
  );
};

export default Main;
