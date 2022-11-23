import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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
                    <BsTelephone />{" "}
                  </h4>
                  <p className="text-center">
                    Phone <br />
                  </p>
                </div>
                <div className="col">
                  <h4 className="text-center">
                    <SiGmail />{" "}
                  </h4>
                  <p className="text-center">
                    Email <br />
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
              <hr />
            </div>
            <div className="col-md-12">
              <div className="d-flex flex-row align-items-center justify-content-around">
                <div className="py-3">
                  <h2 className="h2 text-white">
                    <strong style={{ color: "#FF302F" }}>Dan</strong>yeis
                  </h2>
                </div>
                <div className="py-3">
                  <h5 className="text-muted">
                    &copy; Copyrights. All rights reserved.{" "}
                  </h5>
                </div>
                <div className="py-3">
                  <h4>
                    Created by <strong style={{ color: "#FF302F" }}>Dan</strong>yeis
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