import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    // <div className="d-flex flex-column h-100">
    <footer
      className="w-100 py-2 flex-shrink-0"
      style={{ background: "#212529" }}
    >
      <div className="container py-4">
        <div className="row">
          {/* <div className="col-lg-4 col-md-6 d-flex flex-column align-items-start justify-content-center"> */}
          <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
            <h5 className="h3 text-white"><strong style={{ color: "#FF302F" }}>Dan</strong>yeis.</h5>
            <p className="text-muted mb-0">
              &copy; Copyrights. All rights reserved.{" "}
            </p>
          </div>
          <div className="col-md-8 d-flex flex-column align-items-end justify-content-center">
            <div className="row col-md-12">
              <div className="col-md-3">
                <h4 className="text-center">
                  <BsTelephone />{" "}
                </h4>
                <p className="text-center">
                  Phone <br />
                  +(57) 300-812-74-97
                </p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <SiGmail />{" "}
                </h4>
                <p className="text-center">
                  Email <br />
                  danyeistj@gmail.com
                </p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <BsLinkedin />{" "}
                </h4>
                <p className="text-center">Linkedin</p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <BsFacebook />{" "}
                </h4>
                <p className="text-center">Facebook</p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <BsGithub />{" "}
                </h4>
                <p className="text-center">Github</p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <BsInstagram />{" "}
                </h4>
                <p className="text-center">Instagram</p>
              </div>
              <div className="col">
                <h4 className="text-center">
                  <BsTwitter />{" "}
                </h4>
                <p className="text-center">Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </div>
  );
}

export default Footer;