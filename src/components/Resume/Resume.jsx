import React from "react";

const Resume = ({ resume }) => {
  return (
    <div ref={resume} className={"mb-5"}>
      <h6
        className="welcomeText mb-3 mt-5 fw-bold"
        style={{ color: "#EF98A7" }}
      >
        Resume
      </h6>
      <h2 className="welcomeTitle">SKILLS & EXPERIENCE</h2>
      <div className="row gx-5 d-flex m-auto justify-content-center">
        <div className="col-md-6 ">
          <h6
            className="welcomeText mb-2 mt-5 fw-bold"
            style={{ color: "white" }}
          >
            Features
          </h6>
          <h2
            className="welcomeTitle mt-3"
            style={{ color: "#807094", fontWeight: "700" }}
          >
            MY SKILLS{" "}
          </h2>

          <div className="mt-4">
            <div className="d-flex   mt-3 ">
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white", width: "90%" }}
              >
                HTML/HTML5
              </h5>
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white" }}
              >
                90%
              </h5>
            </div>
            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="d-flex    mt-3 ">
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white", width: "80%" }}
              >
                CSS/CSS3
              </h5>
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white" }}
              >
                80%
              </h5>
            </div>
            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="d-flex    mt-3">
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white", width: "70%" }}
              >
                SAAS
              </h5>
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white" }}
              >
                70%
              </h5>
            </div>
            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="d-flex    mt-3 ">
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white", width: "85%" }}
              >
                JAVASCRIPT
              </h5>
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white" }}
              >
                85%
              </h5>
            </div>

            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex   mt-3">
              <h5
                className="welcomeText mb-2  fw-bold"
                style={{ color: "white", width: "57%" }}
              >
                JQUERY
              </h5>
              <h5
                className="welcomeText mb-2  fw-bold"
                style={{ color: "white" }}
              >
                60%
              </h5>
            </div>

            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <div className="d-flex  mt-4 ">
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white", width: "90%" }}
              >
                REACT JS
              </h5>
              <h5
                className="welcomeText mb-2 fw-bold"
                style={{ color: "white" }}
              >
                90%
              </h5>
            </div>
            <div class="progress  mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h6
            className="welcomeText mb-2 mt-5 fw-bold"
            style={{ color: "white" }}
          >
            Features
          </h6>
          <h2
            className="welcomeTitle mt-3"
            style={{ color: "#807094", fontWeight: "700" }}
          >
            MY EXPERIENCE{" "}
          </h2>
          <div className="mt-4 ">
            <div className="col-md-12 expBox p-4 ">
              <h6
                className="boxText  fw-bold"
                style={{ color: "white", width: "90%" }}
              >
                Front-end Intern
              </h6>
              <span className="text-muted">From March 2022: May 2022</span>
              <p className="mt-3">
                The internship was in front-end development using Vue.js
                framework in a company called "Algoriza". We did alot of
                projects and I learned from them alot specially integration with
                backend and ui/ux teams.
              </p>
            </div>
            <div className="col-md-12 expBox p-4 mt-4">
              <h6
                className="boxText  fw-bold"
                style={{ color: "white", width: "90%" }}
              >
                Front-end Developer
              </h6>
              <span className="text-muted">From June 2022: Now</span>
              <p className="mt-3">
                I'm working as Front-End Developer with React.js framework . I
                joined company called "Solutions For Information Technology" in
                June 2022. My First project with this company is a Dashboard for
                mobile application called "Atfaluna". Link of dashboard{" "}
                <a
                  href="http://admin.kunozworld.com/"
                  style={{
                    textDecoration: "none",
                    color: "RGB(128, 112, 148)",
                    fontWeight: "bold",
                  }}
                >
                  Admin App
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
