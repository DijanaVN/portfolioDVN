import React, { useEffect } from "react";
import img from "../assets/images/CV - Mrs. DijanaVeljanoskaNikoloskaForPortfolio_00001 (1).webp";
import img1 from "../assets/images/CV - Mrs. DijanaVeljanoskaNikoloskaForPortfolio_00002 (2).webp";
import img2 from "../assets/images/CV - Mrs. DijanaVeljanoskaNikoloskaForPortfolio_00003 (1).webp";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img
        className="img-fluid"
        data-aos="zoom-in"
        data-aos-duration="3000"
        src={img}
      />
      <img
        className="img-fluid"
        data-aos="zoom-in"
        data-aos-duration="1000"
        src={img1}
      />
      <img
        className="img-fluid"
        data-aos="zoom-in"
        data-aos-duration="1000"
        src={img2}
      />
    </>
  );
};

export default CV;
