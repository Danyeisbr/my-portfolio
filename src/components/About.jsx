import "../stylesheets/Section.css";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row section align-items-center"
            // style={{ "background-color": "#820000" }}
          >
            <div className="col-md-6">
              <div className="card mt-3 mb-3">
                <h3 className="card-header">Working with...</h3>
                <div className="card-body">
                  <h5 className="card-title">Front-end</h5>
                  <h6 className="card-subtitle text-muted">
                    Support card subtitle
                  </h6>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Back-end</h5>
                  <h6 className="card-subtitle text-muted">
                    Support card subtitle
                  </h6>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-muted"> </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3 mb-3">
                <h3 className="card-header">About Myself</h3>
                <div className="card-body">
                  <p className="card-text">Hi</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    I’m a Front-End Developer located in Colombia. I have a
                    serious passion for UI design, animations and creating
                    intuitive, dynamic user experiences.
                  </li>
                  <li className="list-group-item">
                    Well-organised person, problem solver, independent employee
                    with high attention to detail. Fan of MMA, outdoor
                    activities, TV series and English literature.
                  </li>
                  <li className="list-group-item">
                    A family person and husband of a beautifull wife. Interested
                    in the entire frontend spectrum and working on ambitious
                    projects with positive people.
                  </li>
                </ul>
                <div className="card-body">
                  <a href="/contact" className="card-link">
                    Let's make something special
                  </a>
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
