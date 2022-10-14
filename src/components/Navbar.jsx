import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Navbar() {
  return (
    <div className="navbar-aside col-md-1 bg-dark">
      <nav
        className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center fixed-left"
        id="sidebar"
      >
        <div className="text-center p-3">
          <img
            src={require(`../images/foto.jpg`)}
            alt="profile"
            className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"
          />
          <a
            href="/inicio"
            className="navbar-brand mx-0 font-weight-bold  text-nowrap"
          >
            Danyeis
          </a>
        </div>
        <button
          type="button"
          className="navbar-toggler border-0 order-1"
          data-toggle="collapse"
          data-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-last" id="nav">
          <ul className="navbar-nav flex-column w-100 justify-content-center">
            <li className="nav-item">
              <a href="/inicio" className="nav-link active">
                Home
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a href="/skills" className="nav-link">
                Skills
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link">
                Portfolio
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <h5>
                <BsLinkedin />
                {"  "}
                <BsGithub />
                {"  "}
                <SiGmail />
                {"  "}
              </h5>
              <h5>
                <BsInstagram />{" "}
                <BsWhatsapp />{" "}
              </h5>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
