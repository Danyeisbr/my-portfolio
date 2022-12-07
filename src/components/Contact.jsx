import { BsFillStarFill } from "react-icons/bs";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="contact"
            className="row d-flex justify-content-center align-items-center"
            style={{
              //backgroundColor: "#212529",
              backgroundImage: `url("https://cdn.dorik.com/5e3f05572ec26d00126dc051/61b87ff1675711001197f12c/images/ZK_Home_Testimonial_bg_Img_3yxs7p8z.jpg")`,
              minHeight: "80vh",
            }}
          >
            <div className="col-md-5">
              <div className="row">
                <div className="col">
                  {/* <h4>
                    <strong style={{ color: "#FF302F" }}>Contact Me</strong>
                  </h4> */}
                  <div className="card">
                    <h2 className="card-header">
                      {" "}
                      <strong>Work Inquiry</strong>
                    </h2>
                    <div className="card-body">
                      <form>
                        <fieldset>
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control mt-4 form-control-lg"
                              id="exampleInputName"
                              aria-describedby="nameHelp"
                              rows="3"
                              placeholder="Your name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control mt-4 form-control-lg"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              rows="3"
                              placeholder="Your email"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control mt-4 form-control-lg"
                              id="exampleTextarea"
                              rows="3"
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                          <br />
                          <div className="d-grid gap-2">
                            <button
                              type="submit"
                              className="btn btn-lg"
                              style={{ backgroundColor: "#FF302F" }}
                            >
                              Get in touch!
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="row d-flex flex-column">
                <div className="col">
                  <h4>
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                  </h4>
                  <p className="text-muted mb-0">
                    5.00 (1300+ Review) from Clients.{" "}
                  </p>
                  <h2>
                    <strong> Clients </strong>
                  </h2>
                </div>
                <div className="col">
                  <h4>
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                    <BsFillStarFill color="#fdd500" />{" "}
                  </h4>
                  <p className="text-muted mb-0">
                    5.00 (700+ Review) on Upwork.{" "}
                  </p>
                  <h2>
                    <strong>Upwork</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
