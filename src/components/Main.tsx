import React, { useState } from "react";
import img from "../assets/images/dijanavn (1).webp";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center ps-5 justify-content-center">
          <div className="pt-5 text-white fonts ">
            <Reveal>
              <p className="mt-4 border-bottom ">
                Hello there! 👋 My name is <i>Dijana</i>, and I am an
                enthusiastic <i>React JS developer</i>.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 border-bottom ">
                Although I am at the beginning of my journey into the React
                world, I am a dedicated individual with a strong eagerness to
                learn new skills, develop, and grow.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 border-bottom">
                I am actively seeking a company environment that will provide me
                with the opportunity to enhance my abilities and expand my
                knowledge.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 border-bottom">
                My ultimate goal is to become an experienced frontend developer,
                with numerous successful projects under my belt.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 border-bottom ">
                If you are looking for a highly motivated person dedicated to
                succeeding in React JS, please feel free to contact me.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
          className="col-md-6 d-flex align-items-center  justify-content-center border-bottom"
        >
          <img
            src={img}
            alt="image of Dijana Veljanoska Nikoloska"
            className="img-fluid imgopacity "
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Main;
