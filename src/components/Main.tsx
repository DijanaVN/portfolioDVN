import React from "react";
import img2 from "../assets/images/b0567f75-b815-4863-bdaf-657da1069d9c.webp";
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
    opacity: 1,
  };
  const iconStyle = {
    margin: "10px",
    fontSize: 30,
  };

  return (
    <div className="container-fluid " style={mainStyle}>
      <div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="3000"
          style={iconStyle}
        >
          <a
            href="https://github.com/DijanaVN?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub color="yellow" />
          </a>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="2000"
          style={iconStyle}
        >
          <a
            href="https://www.linkedin.com/in/dijana-veljanoska-nikoloska-05679487/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="yellow" />
          </a>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          style={iconStyle}
        >
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
