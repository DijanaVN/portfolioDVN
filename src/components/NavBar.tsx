import React from "react";
import img from "../assets/images/logo dvn.webp";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark opacity-75  ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <img
            src={img}
            className="bd-placeholder-img object-fit-cover border rounded"
            alt="Logo DijanaVN"
            height="75"
          />
        </a>
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
        <div
          className="collapse navbar-collapse nav justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav fs-3 text-white pe-5 fonts2">
            <li className="nav-item pe-5">
              <a className="nav-link " aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item pe-5">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
