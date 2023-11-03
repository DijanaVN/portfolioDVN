import React, { useState } from "react";
import img from "../assets/images/logo dvn.webp";
import { motion } from "framer-motion";
import { Hover } from "./HoverMotion";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className="navbar fixed-top opacity-75 pe-5 ps-5"
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
        <img
          src={img}
          className="bd-placeholder-img object-fit-cover border rounded"
          alt="Logo DijanaVN"
          height="75"
        />
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
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </Hover>
            </li>
            <li className="nav-item pe-5">
              <Hover>
                <a className="nav-link" href="#">
                  Projects
                </a>
              </Hover>
            </li>
            <li className="nav-item">
              {" "}
              <Hover>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </Hover>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
