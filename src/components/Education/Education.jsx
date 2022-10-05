import React from "react";
import { FaSchool, FaProjectDiagram } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { BiDownload } from "react-icons/bi";
import { RiDownloadFill } from "react-icons/ri";
import myResume from "../../assets/MyResume.pdf";
const Education = ({ education }) => {
  return (
    <div ref={education} className={"pt-5"}>
      <h6
        className="welcomeText mb-3 mt-5 fw-bold"
        style={{ color: "#EF98A7" }}
      >
        Education
      </h6>
      <h2 className="welcomeTitle">WHAT I LEARNED</h2>
      <div className="row mt-5 mb-5 d-flex justify-content-center m-auto">
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <FaSchool className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            I graduated from high school called Shoubra El-balad langauge school
            (sels) in 2017.
          </p>
        </div>
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <MdSchool className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            I graduated from faculty of computers and artificial intelligence
            (Computer Science Department) , Benha University in 2021.
          </p>
        </div>
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <FaProjectDiagram className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            My graduation project was "Face-recognition attendance system". Its
            role was to take a photo of students and the tranined model identify
            the faces and recognizes them. The result of this process is an
            excel sheet with names of attendees.
          </p>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex justify-content-center m-auto">
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <TbBooks className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            I took a lot of courses in software development . I took a
            certificate in UI/UX design and Front-end Development with ITI
            (Information Technology Institute) for 3 months internship.
          </p>
        </div>
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <TbBooks className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            I took a Front-end diploma in a training center callled (Route) for
            3 months.
          </p>
        </div>
        <div className="col-md-3 edu pt-5 pb-5 ps-3 pe-3 me-5">
          <div className="d-flex justify-content-center">
            <BiDownload className="eduIcon mb-4" />
          </div>
          <p className="text-muted">
            You can download my resume here !
            <span>
              {/* <a href={myResume} download="MyResume" target="_blank" rel="noreferrer" >
              <FcDownload  />
            </a> */}
              <button
                className="btn btn-outline"
                style={{ color: "white !important" }}
              >
                <a href={myResume} download="MyResume" >
                  <RiDownloadFill className="dwnIcon"/>
                </a>
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
