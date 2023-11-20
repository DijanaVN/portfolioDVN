import React from "react";

interface ProjectProp {
  title: string;
  img: string;
  description?: string;
  siteLink: string;
  githubLink: string;
  color: string;
}
const ProjectCard = ({
  title,
  img,
  description,
  siteLink,
  githubLink,
  color,
}: ProjectProp) => (
  <div className="col mt-xxl-5 ">
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className={`card h-100 text-bg-light p-2 text-black`}
    >
      <div className="p-2 h-100">
        <img
          src={img}
          className="card-img-top  object-fit-cover "
          alt={`image of ${title}`}
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-font-size fw-bold pb-4">{title}</h5>
        <p className="card-text  text-font-size-btn pb-4">{description}</p>
        <div className="d-flex justify-content-between ps-xl-5 pe-xl-5">
          <a
            href={siteLink}
            className={`btn btn-${color} text-font-size-btn fw-semibold`}
            target="_blank"
          >
            {`${title.split("-")[0]}-Site`}
          </a>
          <a
            href={githubLink}
            className={`btn btn-${color} text-font-size-btn fw-semibold`}
            target="_blank"
          >
            GitHub-Link
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
