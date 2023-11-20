import React from "react";
import { Link } from "react-router-dom";

interface AboutProp {
  title: string;
  text?: string;
  list?: string[];
  link?: string;
  img: string;
  index: number;
}

const AboutCard = ({ title, text, list, link, img, index }: AboutProp) => (
  <div className="row p-3 p-sm-5 mt-lg-5 text-font-size">
    <div
      className="card mb-3"
      data-aos={index % 2 === 0 ? "zoom-out-right" : "zoom-out-left"}
      data-aos-duration="1500"
    >
      <div className="row no-gutters">
        <div
          className={`col-lg-4 d-flex justify-content-center align-items-center order-lg-${
            index % 2 === 0 ? 1 : 2
          }`}
        >
          <img
            src={img}
            className="card-img img-fluid pt-2 pb-2"
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className={`col-lg-8 d-flex justify-content-center align-items-center order-lg-${
            index % 2 === 0 ? 2 : 1
          }`}
        >
          <div className="card-body">
            <p className="card-title fs-2 fw-bold">{title}</p>
            {text && (
              <p className="card-text text-start ps-md-5 mt-3 mb-3 lh-lg  ">
                {text}
              </p>
            )}
            {list && (
              <ul className="list-group list-group-flush ps-md-5 mt-3 mb-3 lh-lg  ">
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
