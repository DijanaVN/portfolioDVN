import React, { useState } from "react";
import img from "../assets/images/logo dvn.webp";
import { motion } from "framer-motion";
import { Hover } from "./HoverMotion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className="navbar fixed-top pe-5 ps-5"
      expand="md"
      bg="dark"
      variant="dark"
    >
      <motion.a
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 200, 200, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        className="navbar-brand"
        href="#"
      >
        <Link to={"/"}>
          <img
            src={img}
            className="bd-placeholder-img object-fit-cover border rounded"
            alt="Logo DijanaVN"
            height="75"
          />
        </Link>
      </motion.a>{" "}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={`justify-content-end ${expanded ? "show" : ""}`}
      >
        <Nav className="ml-auto">
          <ul className="navbar-nav fs-3 text-white pe-5 fonts2">
            <li className="nav-item pe-5">
              <Hover>
                <Link to={"/about"} className="nav-link " aria-current="page">
                  About
                </Link>
              </Hover>
            </li>
            <li className="nav-item pe-5">
              <Hover>
                <Link to={"/projects"} className="nav-link">
                  Projects
                </Link>
              </Hover>
            </li>
            <li className="nav-item">
              {" "}
              <Hover>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </Hover>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
