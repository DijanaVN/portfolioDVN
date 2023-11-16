import img from "../assets/images/Gamehub-image.webp";
import img1 from "../assets/images/shop-shopping-site.webp";
import img2 from "../assets/images/Delicious.webp";
import img3 from "../assets/images/Moshify.webp";

const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 ">
      <div className="col mb-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="card h-100 text-bg-warning opacity-75 m-lg-5"
        >
          <img
            src={img}
            className="card-img-top  h-50 object-fit-cover"
            alt="image of Dijana Veljanoska Nikoloska"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fst-italic fs-2 fw-bold">
              Game-Hub-Project
            </h5>
            <p className="card-text fs-4 fw-semibold">
              This project was crafted as part of Mosh Hamedani's React +
              Typescript courses. It represents the culmination of my learning
              journey, covering beginner to intermediate topics in React.
              Through this course, I gained a deep understanding of React and
              Typescript.
            </p>
            <div className="d-flex justify-content-between ps-xl-5 pe-xl-5 fonts ">
              <a
                href="https://game-egeyzvvti-dijanavn.vercel.app/"
                className="btn btn-danger fs-6"
                target="_blank"
              >
                Game-Hub-Site
              </a>
              <a
                href="https://github.com/DijanaVN/game-hub"
                className="btn btn-danger fs-6"
                target="_blank"
              >
                GitHub-Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="card h-100 text-bg-warning opacity-75 m-lg-5"
        >
          <img
            src={img1}
            className="card-img-top  h-50 object-fit-cover"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fst-italic fs-2 fw-bold">
              Shop-Shopping-Site-Project
            </h5>
            <p className="card-text fw-semibold fs-4">
              "This is my second personal project where I implemented a wider
              range of components, delved deeper into React possibilities, and
              gained more hands-on practice. I utilized the Fake Store API to
              fetch data and successfully implemented a payment checkout system
              using Stripe. This project also marked my first experience in
              separating the server and client components. These challenges
              motivated me to explore React libraries further, and my next goal
              is to learn Next.js."
            </p>
            <div className="d-flex justify-content-between ps-xl-5 pe-xl-5 fonts">
              <a
                href="https://shop-shopping-site-uop84c985-dijanavn.vercel.app/"
                className="btn btn-info fs-6"
                target="_blank"
              >
                Shopping-Site
              </a>
              <a
                href="https://github.com/DijanaVN/shop-shopping-site"
                className="btn btn-info fs-6"
                target="_blank"
              >
                GitHub-Link
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col mb-4">
        <div
          data-aos="flip-right"
          data-aos-duration="3000"
          className="card h-100 text-bg-warning opacity-75 m-lg-5"
        >
          <img
            src={img2}
            className="card-img-top  h-50 object-fit-cover"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fst-italic fs-2 fw-bold">
              Delishes-Recipes-Project
            </h5>
            <p className="card-text fw-semibold fs-4">
              After completing the React courses, I started my own project where
              I implemented the knowledge and skills I learned. This project was
              developed using React, Typescript, and Vite, and deployed on
              Vercel. I integrated the Edamam Recipe API to enhance its
              functionality.
            </p>
            <div className="d-flex justify-content-between ps-xl-5 pe-xl-5 fonts">
              <a
                href="https://delishes-recipes-page-50ho7xkub-dijanavn.vercel.app/"
                className="btn btn-success fs-6"
                target="_blank"
              >
                Delishes-Site
              </a>
              <a href="#" className="btn btn-success fs-6" target="_blank">
                GitHub-Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="card h-100 text-bg-warning opacity-75 m-lg-5"
        >
          <img
            src={img3}
            className="card-img-top  h-50 object-fit-cover"
            alt="..."
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fst-italic fs-2 fw-bold">
              Moshify-Project
            </h5>
            <p className="card-text fw-semibold fs-4">
              This project, created during my early learning stages, is a result
              of my participation in Mosh Hamedani's 'The Ultimate HTML5 & CSS3
              Series' course. It showcases my foundational skills in HTML and
              CSS, gained through Mosh's comprehensive lessons and hands-on
              projects."
            </p>{" "}
            <div className="d-flex justify-content-between ps-xl-5 pe-xl-5 fonts">
              <a
                href="https://chipper-medovik-3c1af1.netlify.app/"
                className="btn btn-light fs-6"
                target="_blank"
              >
                Moshify-Site
              </a>
              <a
                href="https://github.com/DijanaVN/moshifyd"
                className="btn btn-light fs-6"
                target="_blank"
              >
                GitHub-Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
