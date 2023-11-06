import Reveal from "../components/RevealMotion";

const About = () => {
  const backgroundColor = { backgroundColor: "#D1C4E9", opacity: 0.7 };
  return (
    <div className="container-fluid p-5 ">
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">About Me:</h3>
          <Reveal>
            <p className="card-text text-center mt-3 mb-3">
              Hello! 👋 I'm Dijana, a passionate beginner React developer with a
              strong commitment in web technologies. I hold certificates in
              HTML, CSS, JavaScript, React, TypeScript, and Git, showcasing my
              dedication to learning and mastering the essentials of web
              development.
            </p>
          </Reveal>
          <a href="#" className="card-link ">
            Certificates
          </a>
        </div>
      </div>
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">Professional Transition:</h3>
          <Reveal>
            <p className="card-text text-center mt-3 mb-3">
              I come from a diverse background where I spent over a decade as a
              dedicated store manager. My extensive experience in managing
              operations, leading teams, and delivering exceptional customer
              service has equipped me with valuable skills such as
              problem-solving, teamwork, and attention to detail.
            </p>
          </Reveal>
          <a href="#" className="card-link">
            Explore My Pre-IT Experience CV
          </a>
        </div>
      </div>{" "}
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">Career Shift:</h3>
          <Reveal>
            <p className="card-text text-center mt-3 mb-3">
              Driven by my enthusiasm for technology and problem-solving, I
              decided to embark on a new journey in the world of web
              development. I am deeply passionate about creating seamless and
              user-friendly web applications. My transition to a React developer
              reflects my commitment to continuous learning and my eagerness to
              contribute to innovative projects in the field.
            </p>
          </Reveal>
          <a href="#" className="card-link">
            Projects link
          </a>
        </div>
      </div>{" "}
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">What I Offer:</h3>
          <ul>
            <Reveal>
              <li>
                💡 Understanding of HTML, CSS, JavaScript, React, and
                TypeScript.
              </li>
            </Reveal>
            <Reveal>
              <li>🛠️ Understandin in version control systems like Git.</li>
            </Reveal>
            <Reveal>
              <li>
                🤝 Strong teamwork and collaboration skills honed through years
                of managing teams.
              </li>
            </Reveal>
            <Reveal>
              <li>
                🌟 Eagerness to learn, adapt, and grow in the ever-evolving tech
                landscape.
              </li>
            </Reveal>
          </ul>{" "}
        </div>
      </div>{" "}
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">What I'm Looking For:</h3>
          <Reveal>
            <p className="card-text text-center mt-3 mb-3">
              I am actively seeking a company environment that will provide me
              with the opportunity to enhance my abilities and expand my
              knowledge. i ma seeking to belong in a team which will help me to
              reach my ultimate goal to become an experienced frontend
              developer, with numerous successful projects under my belt.
            </p>
          </Reveal>
        </div>
      </div>{" "}
      <div className="card m-5" style={backgroundColor}>
        <div className="card-body">
          <h3 className="card-title">Let's Connect:</h3>
          <Reveal>
            <p className="card-text text-center mt-3 mb-3">
              I am open to new challenges and eager to make a meaningful impact.
              If you are looking for a dedicated and motivated team member or
              have exciting projects where I can contribute, please feel free to
              reach out.
            </p>
          </Reveal>
          <a href="#" className="card-link">
            Contact link
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
