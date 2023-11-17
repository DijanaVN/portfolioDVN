import React from "react";
import { Link } from "react-router-dom";

interface AboutProp {
  title: string;
  text?: string;
  list?: string[];
  link?: string;
  img: string;
}

const AboutCard = ({ title, text, list, link, img }: AboutProp) => (
  <div className="row m-5">
    <div
      className="card mb-3"
      data-aos="zoom-out-left"
      data-aos-duration="1500"
    >
      <div className="row no-gutters">
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <img
            src={img}
            className="card-img img-fluid pt-2 pb-2"
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
          <div className="card-body">
            <p className="card-title fs-3 fw-bold">{title}</p>
            {text && (
              <p className="card-text text-start ps-md-5 mt-3 mb-3 lh-lg fs-6">
                {text}
              </p>
            )}
            {list && (
              <ul className="list-group list-group-flush ps-md-5 mt-3 mb-3 lh-lg fs-6">
                {list.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {link && (
              <Link to={link} className="card-link fw-bold">
                {title.includes("Let's Connect")
                  ? "Contact link"
                  : title.includes("About Me")
                  ? "Certificates"
                  : title.includes("Professional Transition")
                  ? "My Resume"
                  : title.includes("Career Shift")
                  ? "My Projects"
                  : ""}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutCard;
