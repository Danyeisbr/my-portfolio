function Skills() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row min-vh-100 d-flex align-items-center justify-content-around"
            style={{ "backgroundColor": "#1d1d1d" }}
          >
            <div className="col-md-5">
              <div className="card mb-3">
                <h3 className="card-header text-center">Skills</h3>
                <div className="card-body">
                  <h5 className="card-title">Front-end</h5>
                  <h6 className="card-subtitle text-muted">
                    Support card subtitle
                  </h6>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Since beginning my journey as a freelance developer nearly
                    10 years ago, I’ve done remote work for agencies, consulted
                    for startups, and collaborated with talented people to
                    create web products for both business and consumer use. I
                    create successful responsive websites that are fast, easy to
                    use, and built with best practices. The main area of my
                    expertise is front-end development, HTML, CSS, JS, building
                    small and medium web apps, custom plugins, features,
                    animations, and coding interactive layouts. I also have
                    full-stack developer experience with popular open-source CMS
                    like (WordPress, Drupal, Magento, Keystone.js and others).
                  </p>
                  <p>
                    Visit my{" "}
                    <a href="https://www.linkedin.com/in/danyeis-bravo-ramirez-204238243/">
                      LinkedIn{" "}
                    </a>
                    profile for more details or just{" "}
                    <a href="https://danyeisbravo.com/contact">contact </a>me.
                  </p>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card mb-3">
                <h3 className="card-header text-center"> Experience </h3>
                <div className="card-body">
                  <p className="card-text">Front-end</p>
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
                  <p className="card-text">Back-end</p>
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
                  <p className="card-text">ReactJS</p>
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
                  <p className="card-text">JavaScript</p>
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
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    I’m a Front-End Developer located in Colombia. I have a
                    serious passion for UI design, animations and creating
                    intuitive, dynamic user experiences.
                  </li>
                </ul>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-lg col-md-12"
                    style={{ "backgroundColor": "#FF302F" }}
                  >
                    Let's talk about your project!
                  </button>
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

export default Skills;
