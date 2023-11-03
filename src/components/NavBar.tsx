import React from "react";
import img from "../assets/images/logo dvn.webp";
import { motion } from "framer-motion";
import { Hover } from "./Hover";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark opacity-75  ">
      <div className="container-fluid ">
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
        <Hover>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Hover>
        <div
          className="collapse navbar-collapse nav justify-content-end "
          id="navbarNav"
        >
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
                </a>{" "}
              </Hover>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
