import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = ({ contact }) => {
  return (
    <div ref={contact}>
      <h6
        className="welcomeText mb-3 mt-5 fw-bold"
        style={{ color: "#EF98A7" }}
      >
        Contact
      </h6>
      <h2 className="welcomeTitle">HOW TO CONTACT ME</h2>
      <div className="row d-flex justify-content-center m-auto">
        <div className="col-md-6">
          <h2
            className="welcomeTitle mt-3"
            style={{ color: "#807094", fontWeight: "700" }}
          >
            Social Media{" "}
          </h2>

          <div className="mt-4 d-flex  mb-5">
            <div className="socailMedia me-2 fb d-flex justify-content-center align-items-center">
              <a
                href="https://www.facebook.com/Honey.Ahmed.Mohamed"
                target={"_blanck"}
                className="facebook"
              >
                <FaFacebookF className="icon" />
              </a>
            </div>
            <div className="socailMedia tw d-flex me-2  justify-content-center align-items-center">
              <a
                href="https://twitter.com/HoneyAhmedm?fbclid=IwAR2oep9H0BMuwkoOaPKBXC7HSwgBKORaaDlo82Zct_bpYTcIYy3O_OM7d6g"
                target={"_blanck"}
                className="twitter"
              >
                <FaTwitter className="icon" />
              </a>
            </div>

            <div className="socailMedia ws me-2 d-flex justify-content-center align-items-center">
              <a
                href="https://wa.me/+201123327327"
                target={"_blanck"}
                className="whatsapp"
              >
                <FaWhatsapp className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2
            className="welcomeTitle mt-3"
            style={{ color: "#807094", fontWeight: "700" }}
          >
            Professional Accounts{" "}
          </h2>

          <div className="mt-4 d-flex  mb-5">
            <div className="socailMedia me-2 gt d-flex justify-content-center align-items-center">
              <a
                href="https://github.com/honeyahmed"
                target={"_blanck"}
                className="github"
              >
                <FaGithub className="icon" />
              </a>
            </div>
            <div className="socailMedia ln d-flex me-2  justify-content-center align-items-center">
              <a
                href="https://www.linkedin.com/in/honey-ahmed-006801187/"
                target={"_blanck"}
                className="linkedin"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </div>
            <div className="socailMedia gm d-flex me-2 justify-content-center align-items-center">
              <a
                href="mailto:honeyahmed77@gmail.com"
                target={"_blanck"}
                className="google"
              >
                <SiGmail className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
