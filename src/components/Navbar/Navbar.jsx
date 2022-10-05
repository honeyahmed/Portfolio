import React from "react";
import { useRef } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Resume from "../Resume/Resume";
import ScrollToTop from "../ScrollToTop";
const Navbar = () => {
  const about = useRef(null);
  const education = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ScrollToTop />
      <div className="container pt-4 pb-4">
        <ul className="nav justify-content-center ms-3 ">
          <li
            onClick={() => {
              scrollToSection(about);
            }}
            className="navItem"
          >
            About Me
          </li>
          <li
            onClick={() => {
              scrollToSection(education);
            }}
            className="navItem"
          >
            Education
          </li>
          <li
            onClick={() => {
              scrollToSection(resume);
            }}
            className="navItem"
          >
            Resume
          </li>
          <li
            onClick={() => {
              scrollToSection(contact);
            }}
            className="navItem"
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="container">
        <About about={about} />
        <Education education={education} />
        <Resume resume={resume} />
        <Contact contact={contact} />
      </div>
    </div>
  );
};

export default Navbar;
