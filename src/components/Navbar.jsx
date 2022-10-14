import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Navbar() {
  return (
    <div className="col-md-12">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Danyeis
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
                <a className="nav-link active" href="/home">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Contact
                </a>
              </li>
              <li className="nav-item">
            </li>
            </ul>
            <form className="d-flex">
            <h4>
                <BsLinkedin />
                {" "}
                <BsGithub />
                {" "}
                <SiGmail />
                {" "}
                <BsInstagram />
                {" "}
                <BsWhatsapp />
                {" "}
              </h4>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
