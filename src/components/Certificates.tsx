import { useEffect } from "react";
import img1 from "../assets/images/certificate-of-completion-for-react-18-for-beginners.webp";
import img2 from "../assets/images/1-react-18-for-beginners part 2.webp";
import img3 from "../assets/images/certificate-of-completion-for-object-oriented-programming-in-javascript.webp";
import img4 from "../assets/images/certificate-of-completion-for-javascript-basics.webp";
import img5 from "../assets/images/UC-ffd482eb-be2f-4733-9b99-bc3b98e0ec63.webp";
import img6 from "../assets/images/UC-c3ad728f-3843-4f37-8f04-c4b7d2779df7.webp";
import img7 from "../assets/images/UC-c42d4dc8-37db-44a7-b38b-f458db389f26.webp";
import img8 from "../assets/images/e18db421-8a31-401c-8ca6-5a6fb9164e19.webp";
import img9 from "../assets/images/40ec507c-8edc-44b3-8b04-b6d543a91329.webp";
import img10 from "../assets/images/54e8b293-246c-4096-b9e5-00b8ad82b986.webp";
import img11 from "../assets/images/4cb91d04-4865-4190-8f90-576d3636a0b0.webp";
import img12 from "../assets/images/6358942a-6ce8-471e-b0c0-c504f6eb2b70.webp";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
          <div
            className="col border border-3  "
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img1}
              className="card-img img-fluid pt-2 pb-2 "
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img2}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-2">
          <div
            className="col border border-3"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img3}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img4}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-2">
          <div
            className="col border border-3"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img5}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img6}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-2">
          <div
            className="col border border-3"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img7}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img8}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>{" "}
      <div className="container mt-5">
        <div className="row row-cols-2">
          <div
            className="col border border-3"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img9}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img10}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-2">
          <div
            className="col border border-3"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={img11}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col border border-3" data-aos="zoom-out-left">
            <img
              src={img12}
              className="card-img img-fluid pt-2 pb-2"
              alt="Card Img Dijana Veljanoska Nikoloska"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
