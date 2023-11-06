import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import img from "../assets/images/logo dvn.webp";

const Footer = () => {
  const iconStyle = {
    fontSize: "2rem",
    margin: "10px",
  };

  return (
    <footer className="bg-dark text-white text-center py-1 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          className="bd-placeholder-img object-fit-cover border rounded"
          src={img}
          alt="DijanaVN Logo"
          style={{ width: "50px", height: "50px", margin: "5px" }}
        />
      </div>
      <p className="mb-0">&copy; 2023 DijanaVN. All Rights Reserved.</p>
      <div className="d-flex align-items-center">
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
    </footer>
  );
};

export default Footer;
