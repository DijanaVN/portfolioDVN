import Reveal from "./RevealMotion";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript, BiLogoCss3 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const backgroundColor = { backgroundColor: "#D1C4E9", opacity: 0.7 };
  return (
    <div className="container-fluid pt-5 ps-0 pe-0 pb-2    ">
      <div
        data-aos="zoom-out-left"
        data-aos-duration="3000"
        className="card m-5"
        style={backgroundColor}
      >
        <div className="card-body">
          <h2 className="card-title">About Me:</h2>

          <h6 className="card-text text-center mt-3 mb-3 lh-lg fs-5 ">
            Hello! 👋 I'm Dijana, a passionate beginner React developer with a
            strong commitment in web technologies. I hold certificates in HTML
            <AiOutlineHtml5 />
            , CSS <BiLogoCss3 />, JavaScript <TbBrandJavascript />, React{" "}
            <FaReact />, TypeScript <BiLogoTypescript />, and GitHub{" "}
            <AiFillGithub /> , showcasing my dedication to learning and
            mastering the essentials of web development.
          </h6>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/dijana-veljanoska-nikoloska-05679487/details/certifications/"
            className="card-link "
          >
            Udemi+Sololearn Certificates
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dijana-veljanoska-nikoloska-05679487/details/education/"
            className="card-link "
          >
            Code with Mosh Certificates
          </a>
        </div>
      </div>
      <div className="mb-5">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="3000"
          className="card m-5"
          style={backgroundColor}
        >
          <div className="card-body">
            <h2 className="card-title ">Professional Transition:</h2>

            <h6 className="card-text text-center mt-3 mb-3 lh-lg fs-5">
              I come from a diverse background where I spent over a decade as a
              dedicated store manager. My extensive experience in managing
              operations, leading teams, and delivering exceptional customer
              service has equipped me with valuable skills such as
              problem-solving, teamwork, and attention to detail.
            </h6>

            <Link className="card-link " to={"/cv"}>
              Explore My Pre-IT Experience CV
            </Link>
          </div>
        </div>{" "}
      </div>
      <div
        data-aos="zoom-out-left"
        data-aos-duration="3000"
        className="card m-5"
        style={backgroundColor}
      >
        <div className="card-body">
          <h2 className="card-title">Career Shift:</h2>

          <h6 className="card-text text-center mt-3 mb-3 lh-lg fs-5">
            Driven by my enthusiasm for technology and problem-solving, I
            decided to embark on a new journey in the world of web development.
            I am deeply passionate about creating seamless and user-friendly web
            applications. My transition to a React developer reflects my
            commitment to continuous learning and my eagerness to contribute to
            innovative projects in the field.
          </h6>

          <Link to="/projects" className="card-link">
            Projects link
          </Link>
        </div>
      </div>{" "}
      <div
        data-aos="zoom-out-right"
        data-aos-duration="3000"
        className="card m-5"
        style={backgroundColor}
      >
        <div className="card-body">
          <h2 className="card-title">What I Offer:</h2>
          <ul className="fw-semibold lh-lg fs-5">
            <li>
              💡 Understanding of HTML, CSS, JavaScript, React, and TypeScript.
            </li>

            <li>🛠️ Understandin in version control systems like Git.</li>

            <li>
              🤝 Strong teamwork and collaboration skills honed through years of
              managing teams.
            </li>

            <li>
              🌟 Eagerness to learn, adapt, and grow in the ever-evolving tech
              landscape.
            </li>
          </ul>{" "}
        </div>
      </div>{" "}
      <div
        data-aos="zoom-out-left"
        data-aos-duration="3000"
        className="card m-5"
        style={backgroundColor}
      >
        <div className="card-body">
          <h2 className="card-title">What I'm Looking For:</h2>

          <h6 className="card-text text-center mt-3 mb-3 lh-lg fs-5">
            I am actively seeking a company environment that will provide me
            with the opportunity to enhance my abilities and expand my
            knowledge. i ma seeking to belong in a team which will help me to
            reach my ultimate goal to become an experienced frontend developer,
            with numerous successful projects under my belt.
          </h6>
        </div>
      </div>{" "}
      <div
        data-aos="zoom-out-right"
        data-aos-duration="3000"
        className="card m-5"
        style={backgroundColor}
      >
        <div className="card-body">
          <h2 className="card-title">Let's Connect:</h2>

          <h6 className="card-text text-center mt-3 mb-3 lh-lg fs-5">
            I am open to new challenges and eager to make a meaningful impact.
            If you are looking for a dedicated and motivated team member or have
            exciting projects where I can contribute, please feel free to reach
            out.
          </h6>

          <Link to="/contact" className="card-link">
            Contact link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
