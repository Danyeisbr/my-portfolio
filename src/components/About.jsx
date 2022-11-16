import "../stylesheets/Section.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row section align-items-center justify-content-center bg-light"
            //style={{ "background-color": "#635d71" }}
          >
            <div className="col-md-3">
              <div className="card mt-3 mb-3">
                <h3 className="card-header text-center"> Front-End </h3>
                <div className="card-body bg-light">
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <AiFillHtml5 size="5rem" color="red" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <DiCss3 size="5rem" color="blue" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <DiJavascript1 size="5rem" color="yellow" />
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <FaBootstrap size="5rem" color="purple" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <FaReact size="5rem" color="green" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiTailwindcss size="5rem" color="purple" />
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <SiMaterialui size="5rem" color="blue" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiRedux size="5rem" color="purple" />
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Front-end: HTML5, CSS3, JavaScript, Bootstrap, React, Tailwind, Material-UI, Redux.
                  </p>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3 className="card-header text-center"> About Me </h3>
                <div className="card-body">
                  <div className="card-body">
                    <h5 className="card-text text-center">
                      I’m a Full Stack Developer located in Colombia. I have a
                      great passion for UI design, and creating intuitive,
                      dynamic user experiences.
                    </h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-text text-center">
                      Well-organized person, disciplined, problem solver,
                      reliable and willing to work in a team. Love playing my
                      guitar, making music, outdoor activities, traveling and
                      reading.
                    </h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-text text-center">
                      Interested in the entire frontend gamut and working on
                      projects that help me grow professionally.
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-lg col-md-12"
                    style={{ "background-color": "#FF302F" }}
                  >
                    Let's make something special!
                  </button>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mt-3 mb-3">
                <h3 className="card-header text-center"> Back-End </h3>
                <div className="card-body bg-light">
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <TbBrandNextjs size="5rem" color="red" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <FaNodeJs size="5rem" color="green" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiExpress size="5rem" color="black" />
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <SiPostgresql size="5rem" color="gray" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiSequelize size="5rem" color="blue" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <GrMysql size="5rem" color="green" />
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Back-end: NextJS, Node JS, Express, PostgreSQL, Sequalize, MySQL.
                  </p>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
