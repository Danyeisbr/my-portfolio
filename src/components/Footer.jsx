import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import "../stylesheets/Icons.css";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#212529" }}
          >
            <div className="col-md-9">
              <hr />
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="text-center">
                    <a
                      target="_blank"
                      href="tel:+573008127497"
                      style={{ color: "white" }}
                      rel="noreferrer"
                    >
                      {/* Con mensaje predefinido
                        <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, Nececito mas informacion!">Envíanos un mensaje de WhatsApp</a> */}
                      <BsTelephone className="icon" />
                    </a>
                  </h4>
                  <p className="text-center">
                    Cellphone <br />
                  </p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=573008127497"
                      style={{ color: "white" }}
                      rel="noreferrer"
                    >
                      {/* Con mensaje predefinido
                        <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, Necesito mas informacion!">Envíanos un mensaje de WhatsApp</a> */}
                      <SiWhatsapp className="icon" />
                    </a>
                  </h4>
                  <p className="text-center">
                    Whatsapp <br />
                  </p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <a
                      href="mailto:danyeistj@gmail.com"
                      style={{ color: "white" }}
                    >
                      <SiGmail className="icon" />{" "}
                    </a>
                  </h4>
                  <p className="text-center">
                    Email <br />
                  </p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/danyeis-bravo-ramirez-204238243/"
                      style={{ color: "white" }}
                      rel="noreferrer"
                    >
                      <BsLinkedin className="icon" />{" "}
                    </a>
                  </h4>
                  <p className="text-center">Linkedin</p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <a
                      target="_blank"
                      href="https://github.com/Danyeisbr"
                      style={{ color: "white" }}
                      rel="noreferrer"
                    >
                      <BsGithub className="icon" />{" "}
                    </a>
                  </h4>
                  <p className="text-center">Github</p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <a
                      style={{ color: "white" }}
                      target="_blank"
                      href="https://www.instagram.com/danye.bravo/"
                      rel="noreferrer"
                    >
                      <BsInstagram className="icon" />{" "}
                    </a>
                  </h4>
                  <p className="text-center">Instagram</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-md-12">
              <div className="d-flex flex-row align-items-center justify-content-around">
                <div className="py-2">
                  <h4>
                    <strong style={{ color: "#FF302F" }}>Dan</strong>yeis
                  </h4>
                </div>
                <div className="py-2">
                  <h5 className="text-muted">
                    &copy; Copyrights. All rights reserved.{" "}
                  </h5>
                </div>
                <div className="py-2">
                  <h4>
                    Created by <strong style={{ color: "#FF302F" }}>Dan</strong>
                    yeis
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
