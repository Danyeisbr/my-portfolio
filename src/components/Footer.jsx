import "../stylesheets/Footer.css";

function Footer() {
  return (
    <div className="d-flex flex-column h-100">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start justify-content-center">
              <h5 className="h1 text-white">Danyeis.</h5>
              <p className="text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-8 col-md-6 d-flex flex-column align-items-center">
              <h5 className="text-center mb-3">Quick links</h5>
              <div className="row">
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/skills">Skills</a>
                  </li>
                  <li>
                    <a href="/projects">Projects</a>
                  </li>
                  <li>
                    <a href="/contact">Contact me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;