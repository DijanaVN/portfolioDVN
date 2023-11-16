import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript, BiLogoCss3 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiOutlineHtml5 } from "react-icons/ai";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/dij.webp";
import img2 from "../assets/images/FB_IMG_1609052446671.webp";
import img3 from "../assets/images/scott-graham-5fNmWej4tAA-unsplash.webp";
import img4 from "../assets/images/gabriel-heinzer-EUzk9BIEq6M-unsplash.webp";
import img5 from "../assets/images/israel-andrade-YI_9SivVt_s-unsplash.webp";
import img6 from "../assets/images/firmbee-com-SpVHcbuKi6E-unsplash.webp";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row m-5 d-flex justify-content-center align-items-center">
        <div
          className=" card mb-3  "
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <div className="row no-gutters">
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img1}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img Dijana Veljanoska Nikoloska"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-8  d-flex justify-content-center align-items-center">
              <div className="card-body ">
                <p className="card-title fs-3 fw-bold text-md">About Me:</p>
                <p className="card-text text-start ps-md-5  mt-3 mb-3 lh-lg fs-6 ">
                  Hello! I'm Dijana, a passionate React developer with a strong
                  commitment to web technologies. I hold certificates in HTML
                  <AiOutlineHtml5 />
                  , CSS <BiLogoCss3 />, JavaScript <TbBrandJavascript />, React{" "}
                  <FaReact />, TypeScript <BiLogoTypescript />, and GitHub{" "}
                  <AiFillGithub />, showcasing my dedication to learning and
                  mastering the essentials of web development.
                </p>
                <div>
                  <Link to={"/certificates"} className="card-link fw-bold">
                    Certificates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="card mb-3"
        >
          <div className="row no-gutters">
            <div className="col-lg-8  d-flex justify-content-center align-items-center">
              <div className="card-body">
                <p className="card-title fs-3 fw-bold">
                  Professional Transition:
                </p>
                <p className="card-text text-start ps-md-5   mt-3 mb-3 lh-lg fs-6 ">
                  With over a decade of experience as a dedicated store manager,
                  I bring a proven track record in operations management, team
                  leadership, and delivering exceptional customer service. My
                  skills in problem-solving, teamwork, and thriving under
                  pressure, coupled with a keen attention to detail, have
                  consistently led to surpassing goals and targets. Eager to
                  apply these strengths in an agile working environment, I am
                  committed to driving success through adaptability and
                  innovation.
                </p>
                <Link className="card-link fw-bold" to={"/cv"}>
                  Explore My Resume
                </Link>
              </div>
            </div>
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img2}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img Dijana Veljanoska Nikoloska Starboard team"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div
          className=" card mb-3"
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <div className="row no-gutters">
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img3}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-8 d-flex justify-content-center align-items-center ">
              <div className="card-body">
                <p className="card-title fs-3 fw-bold">Career Shift:</p>
                <p className="card-text text-start ps-md-5  mt-3 mb-3 lh-lg fs-6">
                  Driven by my enthusiasm for technology and problem-solving, I
                  decided to embark on a new journey in the world of web
                  development. I am deeply passionate about creating seamless
                  and user-friendly web applications. My transition to a React
                  developer reflects my commitment to continuous learning and my
                  eagerness to contribute to innovative projects in the
                  field.I've successfully completed small React projects,
                  showcasing practical application and hands-on experience.
                </p>
                <div>
                  <Link to="/projects" className="card-link fw-bold">
                    Projects link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="card  bg-light mb-3"
        >
          <div className="row no-gutters">
            <div className="col-lg-8  d-flex justify-content-center align-items-center">
              <div className="card-body">
                <p className="card-title fs-3 fw-bold">What I Offer:</p>
                <ul className="list-group list-group-flush ps-md-5  mt-3 mb-3 lh-lg fs-6">
                  <li className="list-group-item">
                    💡 Understanding of HTML, CSS, JavaScript, React, and
                    TypeScript.
                  </li>
                  <li className="list-group-item">
                    🛠️ Understanding in version control systems like Git &
                    GitHub.
                  </li>
                  <li className="list-group-item">
                    🤝 Strong teamwork and collaboration skills honed through
                    years of managing teams.
                  </li>
                  <li className="list-group-item">
                    🌟 Eagerness to learn, adapt, and grow in the ever-evolving
                    tech landscape.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img4}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div
          className=" card mb-3"
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <div className="row no-gutters">
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img5}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-8  d-flex justify-content-center align-items-center">
              <div className="card-body">
                <p className="card-title fs-3 fw-bold">
                  My Ideal Working Environment:
                </p>
                <ul className="list-group list-group-flush ps-md-5  mt-3 mb-3 lh-lg fs-6">
                  <li className="list-group-item">
                    Seeking an innovative, dynamic, and team-oriented company
                    environment.
                  </li>
                  <li className="list-group-item">
                    Aim to leverage expertise in web development to enhance the
                    company's digital presence and contribute to its growth.
                  </li>
                  <li className="list-group-item">
                    Excited about collaborating on impactful projects that align
                    with personal and company objectives.
                  </li>
                  <li className="list-group-item">
                    Value a company that encourages a collaborative culture,
                    respects, values, and invests in ongoing professional
                    development opportunities for its employees.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="row m-5">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="card mb-3"
        >
          <div className="row no-gutters">
            <div className="col-lg-8  d-flex justify-content-center align-items-center">
              <div className="card-body">
                <p className="card-title fs-3 fw-bold">Let's Connect:</p>
                <p className="card-text text-start ps-md-5   mt-3 mb-3 lh-lg fs-6 ">
                  I am open to new challenges and eager to make a meaningful
                  impact. If you are looking for a dedicated and motivated team
                  member or have exciting projects where I can contribute,
                  please feel free to reach out.
                </p>
                <Link to="/contact" className="card-link fw-bold">
                  Contact link
                </Link>
              </div>
            </div>
            <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <img
                src={img6}
                className="card-img img-fluid pt-2 pb-2"
                alt="Card Img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
