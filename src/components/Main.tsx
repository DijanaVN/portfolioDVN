import React from "react";
import img2 from "../assets/images/9a34d902-52a7-46e9-af0b-a8dd40868a88.jpg";
import { TypingAnimation } from "./TypingMotion";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Main = () => {
  const mainStyle = {
    background: `url(${img2}) no-repeat center center/cover`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    margin: "3vw 0",
    opacity: 0.7,
  };
  const iconStyle = {
    margin: "10px",
    fontSize: 30, // Add some margin between the icons
  };

  return (
    <div className="container-fluid " style={mainStyle}>
      <div>
        <div style={iconStyle}>
          <a
            href="https://github.com/DijanaVN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub color="yellow" />
          </a>
        </div>
        <div style={iconStyle}>
          <a
            href="https://www.linkedin.com/in/dijana-veljanoska-nikoloska-05679487/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="yellow" />
          </a>
        </div>
        <div style={iconStyle}>
          <a href="mailto:veljanovskadijana@yahoo.com">
            <IoMdMail color="yellow" />
          </a>
        </div>
      </div>
      <div
        className="col-md-6 text-white fonts ms-5 fs-4 lh-lg
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
