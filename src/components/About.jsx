import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import {
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiMicrosoftsqlserver,
  SiPhp,
  SiVisualstudiocode,
  SiJavascript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import "../stylesheets/Icons.css";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div
            id="about"
            className="row min-vh-100 align-items-center justify-content-center"
          >
            <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
              <div
                className="card mt-3 mb-3"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h3 className="card-header text-center"> Front-End </h3>
                <div className="card-body bg-light">
                  <div className="row d-flex justify-content-center">
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <AiFillHtml5
                          size="5rem"
                          color="#e44d26"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <DiCss3 size="5rem" color="#156eb0" className="icon" />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiJavascript
                          size="5rem"
                          color="#f3cf01"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <FaBootstrap
                          size="5rem"
                          color="#7a11f7"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <FaReact size="5rem" color="green" className="icon" />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiTailwindcss
                          size="5rem"
                          color="purple"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiMaterialui
                          size="5rem"
                          color="#0071e3"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiRedux size="5rem" color="#593d88" className="icon" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-center">
                    Front-end: HTML5, CSS3, JavaScript, Bootstrap, React,
                    Tailwind, Material-UI, Redux, Visual Studio Code.
                  </p>
                </div>
                <div className="card-footer text-muted bg-info"> </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
              <div
                className="card"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h3 className="card-header text-center"> About Me </h3>
                <div className="card-body">
                  <div className="card-body">
                    <p className="card-text text-center">
                      I’m a Full Stack Developer located in Colombia. I have a
                      great passion for UI design, and creating intuitive,
                      dynamic user experiences.
                    </p>
                    <p className="card-text text-center">
                      Well-organized person, disciplined, problem solver,
                      reliable and willing to work in a team. Love playing my
                      guitar, making music, outdoor activities, traveling and
                      reading.
                    </p>
                    <p className="card-text text-center">
                      Interested in the entire frontend gamut and working on
                      projects that help me grow professionally.
                    </p>
                  </div>
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <h5 className="m-1">
                          <SiVisualstudiocode
                            size="5rem"
                            color="#038bcf"
                            className="icon"
                          />
                        </h5>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <h5 className="m-1">
                          <BsGithub
                            size="5rem"
                            color="black"
                            className="icon"
                          />
                        </h5>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-lg col-12"
                    style={{ backgroundColor: "#FF302F" }}
                  >
                    <a className="nav-link" href="#contact">
                      Let's make something special!
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
              <div
                className="card mt-3 mb-3"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h3 className="card-header text-center"> Back-End </h3>
                <div className="card-body bg-light">
                  <div className="row d-flex justify-content-center">
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <TbBrandNextjs
                          size="5rem"
                          color="black"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <FaNodeJs
                          size="5rem"
                          color="#026e00"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiExpress size="5rem" color="black" className="icon" />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiPostgresql
                          size="5rem"
                          color="#31648c"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiSequelize
                          size="5rem"
                          color="#3c76c3"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <GrMysql size="5rem" color="#037790" className="icon" />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiMicrosoftsqlserver
                          size="5rem"
                          color="#d84f4d"
                          className="icon"
                        />
                      </h5>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <h5 className="m-1">
                        <SiPhp size="5rem" color="gray" className="icon" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-center">
                    Back-end: NextJS, Node JS, Express, PostgreSQL, Sequalize,
                    MySQL, SQL Server, PHP.
                  </p>
                </div>
                <div className="card-footer text-muted bg-info"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;