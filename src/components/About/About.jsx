import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import img from '../../images/photo.png';
const About = ({ about }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer.", "Web Developer."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div ref={about}>
      <div className="row mb-5">
        <div className="col-md-6 mt-5">
          <h6 className="welcomeText mb-3 mt-5">Welcome To My Portfolio</h6>
          <h1 className="welcomeTitle">
            Hi, I'm <span>Honey Ahmed</span>
          </h1>
          <span
            ref={el}
            style={{ color: "white" }}
            className={"typedStyle"}
          ></span>
          <div style={{ color: "#878787" }} className={"text-muted mb-5 mt-3"}>
            I'm Honey, a Front End Engineer based in &#127466;&#127468;. I
            describe myself as a passionate developer who loves coding, open
            source, and the web❤️. Aside from my job, I like to create and
            contribute to new projects. That helps me to learn a ton of new
            stuff, grow as a developer and support other open source projects.
          </div>
          <h6 className="welcomeText mb-3 mt-5 pt-5">Best Skills</h6>

          <div className="d-flex ">
            <div className="skill mt-4 me-2">
              <AiFillHtml5 />
            </div>
            <div className="skill mt-4 me-2">
              <DiCss3 />
            </div>
            <div className="skill mt-4 me-2">
              <FaSass />
            </div>
            <div className="skill mt-4 me-2">
              <FaBootstrap />
            </div>

            <div className="skill mt-4 me-2">
              <SiJquery />
            </div>
            <div className="skill mt-4 me-2">
              <IoLogoJavascript />
            </div>
            <div className="skill mt-4 me-2">
              <FaReact />
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 mt-5">
            <div className="imgBg mt-5">
                <div className="bg-pos">
                <img src={img} alt=""  />

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
