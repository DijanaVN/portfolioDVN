import React from "react";
import img2 from "../assets/images/48c7d82e-53f5-4c24-bfb8-fdcbbfb14c50.webp";
import { TypingAnimation } from "./TypingMotion";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Main = () => {
  const mainStyle = {
    background: `url(${img2}) no-repeat center center/cover`,
    height: "60vw",
    display: "flex",
    alignItems: "center",
    opacity: 1,
  };

  const frameStyle = {
    background: "black",
    padding: "1vw",
    borderRadius: "10px",
  };

  const iconStyle = {
    margin: "1vw",
    fontSize: "3vw",
  };

  return (
    <div className="container-fluid" style={frameStyle}>
      <div className="container-fluid" style={mainStyle}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            paddingLeft: "1vw",
            boxShadow: "0.3em 0.3em 1em 1em rgba(0, 0, 0, 0.1)",
          }}
        >
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
        <div className="col-6 text-light fonts ms-md-5 lh-lg  text-wrap main-text">
          <TypingAnimation
            text={
              " Hello there! My name is Dijana, and I am an enthusiastic React JS developer."
            }
          ></TypingAnimation>
        </div>
      </div>
    </div>
  );
};
export default Main;
