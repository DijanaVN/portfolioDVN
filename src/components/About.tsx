import React from "react";
import { useEffect } from "react";
import img1 from "../assets/images/dijana.webp";
import img2 from "../assets/images/FB_IMG_1609052446671.webp";
import img3 from "../assets/images/scott-graham-5fNmWej4tAA-unsplash.webp";
import img4 from "../assets/images/gabriel-heinzer-EUzk9BIEq6M-unsplash.webp";
import img5 from "../assets/images/israel-andrade-YI_9SivVt_s-unsplash.webp";
import img6 from "../assets/images/firmbee-com-SpVHcbuKi6E-unsplash.webp";
import AboutCard from "./AboutCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "About Me:",
      text: "Hello! I'm Dijana, a passionate React developer with a strong commitment to web technologies. I hold certificates in HTML, CSS, JavaScript, React, TypeScript, and GitHub, showcasing my dedication to learning and mastering the essentials of web development.",
      link: "/certificates",
      img: img1,
    },
    {
      title: "Professional Transition:",
      text: "With over a decade of experience as a dedicated store manager, I bring a proven track record in operations management, team leadership, and delivering exceptional customer service. My skills in problem-solving, teamwork, and thriving under pressure, coupled with a keen attention to detail, have consistently led to surpassing goals and targets.",
      link: "/cv",
      img: img2,
    },
    {
      title: "Career Shift:",
      text: "Driven by my enthusiasm for technology and problem-solving, I decided to embark on a new journey in the world of web development. I am deeply passionate about creating seamless and user-friendly web applications. My transition to a React developer reflects my commitment to continuous learning and my eagerness to contribute to innovative projects in the field.",
      link: "/projects",
      img: img3,
    },
    {
      title: "What I Offer:",
      list: [
        "💡 Understanding of HTML, CSS, JavaScript, React, and TypeScript.",
        "🛠️ Understanding in version control systems like Git & GitHub.",
        "🤝 Strong teamwork and collaboration skills honed through years of managing teams.",
        "🌟 Eagerness to learn, adapt, and grow in the ever-evolving tech landscape.",
      ],
      img: img4,
    },
    {
      title: "My Ideal Working Environment:",
      list: [
        "Seeking an innovative, dynamic, and team-oriented company environment.",
        "Aim to leverage expertise in web development to enhance the company's digital presence and contribute to its growth.",
        "Excited about collaborating on impactful projects that align with personal and company objectives.",
        "Value a company that encourages a collaborative culture, respects, values, and invests in ongoing professional development opportunities for its employees.",
      ],
      img: img5,
    },
    {
      title: "Let's Connect:",
      text: "I am open to new challenges and eager to make a meaningful impact. If you are looking for a dedicated and motivated team member or have exciting projects where I can contribute, please feel free to reach out.",
      link: "/contact",
      img: img6,
    },
  ];

  return (
    <>
      {cardData.map((data, index) => (
        <AboutCard key={index} index={index} {...data} />
      ))}
    </>
  );
};

export default About;
