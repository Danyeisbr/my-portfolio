import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <div className="col-md-12">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom border-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <h4>
              {" "}
              <strong style={{ color: "#FF302F" }}> Dan</strong>yeis
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home"
                >
                  <h5>Home</h5>
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <h5>About</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <h5>Skills</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <h5>Services</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  <h5>Portfolio</h5>
                </a>
              </li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex">
              <button
                type="button"
                className="btn col-md-12"
                style={{ backgroundColor: "#FF302F" }}
              >
                <a className="nav-link" href="#contact">
                  Contact Me!
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
