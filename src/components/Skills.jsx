import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="skills"
            className="row min-vh-100 d-flex align-items-center justify-content-center"
            //style={{ "backgroundColor": "#1d1d1d"}}
          >
            <div className="col-md-5">
              <div
                className="card mb-3"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h3 className="card-header text-center">Skills</h3>
                <div className="card-body">
                  <h6 className="card-text">Front-end</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="card-text">Back-end</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="card-text">ReactJS</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="card-text">JavaScript</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <br />
                  <p>
                    The main area of my experience now is front-end development,
                    HTML5, CSS3, JavaScript, Bootstrap, React, TailwindCss,
                    Material-UI, and Redux, building small and simple web apps,
                    features, and coding interactive layouts. 
                  </p>
                </div>
                <div className="card-footer text-muted text-center">
                  <p>
                    Visit my{" "}
                    <a
                      className="text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/in/danyeis-bravo-ramirez-204238243/"
                      rel="noreferrer"
                    >
                      LinkedIn{" "}
                    </a>
                    profile for more details or just{" "}
                    <a href="#contact" className="text-decoration-none">
                      contact{" "}
                    </a>
                    me.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="card mb-3"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h3 className="card-header text-center"> Experience </h3>
                <div className="card-body">
                  <p className="card-text text-center">
                    Since beginning my journey as a technologist in software
                    analysis and development, nearly 6 years ago, I created a
                    web application for a company that needed to have more
                    control in their production area, collaborating with
                    talented people to create this web app for both business and
                    consumer use. I created a successful responsive website that
                    was fast, easy to use, and built with best practices.{" "}
                  </p>
                  <p className="card-text text-center">
                    I also have a brief knowledge of back-end development with
                    popular tools such as NextJS, Node JS, Express, PostgreSQL,
                    Sequalize, MySQL, SQL Server, and PHP. Currently, I have
                    been doing some work with open-source CMS like WordPress,
                    Odoo, and others.
                  </p>
                </div>
                  
                <div className="card-footer"> <button
                    type="button"
                    className="btn btn-lg col-md-12"
                    style={{ backgroundColor: "#FF302F" }}
                  >
                    <a className="nav-link" href="#contact">
                      Let's talk about your project!
                    </a>
                  </button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
