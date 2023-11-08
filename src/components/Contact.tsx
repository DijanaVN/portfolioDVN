import React from "react";
import { TypingAnimation } from "./TypingMotion";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="container mt-5 pt-5 pb-3  text-white ">
      <h2 data-aos="fade-up" className=" pt-5 ">
        Message Me
      </h2>
      <TypingAnimation text="Feel free to reach out. I'm always open to new opportunities and collaborations."></TypingAnimation>
      <div className="row mt-4 ">
        <div className="col-md-6 pe-5">
          <form
            action="https://formsubmit.co/veljanovskadijana@yahoo.com"
            method="POST"
          >
            {/* Hopeypot */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* show wy own success page */}
            {/* <input type="hidden" name="_next" value="https://"> */}

            <div className="mb-3">
              <label data-aos="zoom-in" htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control bg-light "
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label data-aos="zoom-in" htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <label
                data-aos="zoom-in"
                htmlFor="message"
                className="form-label "
              >
                Message
              </label>
              <textarea
                className="form-control bg-light"
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              data-aos="zoom-in"
              type="submit"
              className="btn btn-primary rounded-pill fonts mt-3"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 text-white ps-5 ">
          <h4 className="mb-4 mt-4">Contact Information</h4>
          <div className="d-flex align-items-center mb-3 contact-item">
            <BsFillPersonFill
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1200"
              color="yellow"
              className="me-2"
            />
            <div className="contact-text">Dijana Veljanoska Nikoloska</div>
          </div>
          <div className="d-flex align-items-center mb-3 contact-item">
            <PiPhoneCallFill
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              color="lightblue"
              className="me-2"
            />
            <div className="contact-text">+389 71 994 724</div>
          </div>{" "}
          <div className="d-flex align-items-center mb-3 contact-item">
            <IoMdMail
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
              color="pink"
              className="me-2"
            />
            <div className="contact-text">
              <a target="_blank" href="mailto:veljanovskadijana@yahoo.com">
                veljanovskadijana@yahoo.com
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center contact-item">
            <FaAddressCard
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
              color="lightgreen"
              className="me-2"
            />
            <div className="contact-text"> Skopje, Macedonia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
