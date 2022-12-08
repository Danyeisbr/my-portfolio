import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import '../stylesheets/Icons.css';

function About() {
  useEffect(() => {
    AOS.init({
      delay: 700,
      duration: 1000,
    });
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="about"
            className="row min-vh-100 align-items-center justify-content-center "
            //style={{ "backgroundColor": "#635d71" }}
          >
            <div className="col-md-3">
              <div className="card mt-3 mb-3" data-aos="fade-up">
                <h3 className="card-header text-center"> Front-End </h3>
                <div className="card-body bg-light">
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <AiFillHtml5 size="5rem" color="#e44d26" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <DiCss3 size="5rem" color="#156eb0" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiJavascript size="5rem" color="#f3cf01" className="icon"/>
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <FaBootstrap size="5rem" color="#7a11f7" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <FaReact size="5rem" color="green" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiTailwindcss size="5rem" color="purple" className="icon"/>
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <SiMaterialui size="5rem" color="#0071e3" className="icon" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiRedux size="5rem" color="#593d88" className="icon"/>
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-text">
                    Front-end: HTML5, CSS3, JavaScript, Bootstrap, React,
                    Tailwind, Material-UI, Redux, Visual Studio Code.
                  </h5>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" data-aos="fade-up">
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
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <h5 className="card-text d-inline">
                          <SiVisualstudiocode size="5rem" color="#038bcf" className="icon"/>
                        </h5>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <h5 className="card-text d-inline">
                          <BsGithub size="5rem" color="black" className="icon"/>
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
                    className="btn btn-lg col-md-12"
                    style={{ backgroundColor: "#FF302F" }}
                  ><a className="nav-link" href="#contact">
                    Let's make something special!</a>
                  </button>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mt-3 mb-3" data-aos="fade-up">
                <h3 className="card-header text-center"> Back-End </h3>
                <div className="card-body bg-light">
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <TbBrandNextjs size="5rem" color="black" className="icon" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <FaNodeJs size="5rem" color="#026e00" className="icon" />
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiExpress size="5rem" color="black" className="icon"/>
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <SiPostgresql size="5rem" color="#31648c" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiSequelize size="5rem" color="#3c76c3" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <GrMysql size="5rem" color="#037790" className="icon"/>
                    </h5>
                    <br />
                    <br />
                  </div>
                  <div className="row col-md-12 d-inline">
                    <h5 className="card-text d-inline">
                      <SiMicrosoftsqlserver size="5rem" color="#d84f4d" className="icon"/>
                    </h5>
                    <h5 className="card-text d-inline">
                      <SiPhp size="5rem" color="gray" className="icon"/>
                    </h5>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-text">
                    Back-end: NextJS, Node JS, Express, PostgreSQL, Sequalize,
                    MySQL, SQL Server, PHP.
                  </h5>
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
