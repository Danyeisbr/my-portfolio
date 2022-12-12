import React, { useState, useRef } from "react";
import { BsFillStarFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "./Footer";

function Contact() {
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleSuccess = () => setModal(true);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e93dobe",
        "template_pv7tlep",
        e.target,
        "v_-ltRCoIUpjqy_a4"
      )
      .then(
        (result) => {
          handleSuccess();
          console.log(result.text);
        },
        (error) => {
          alert("Message was not sent");
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="contact"
            className="row min-vh-100 d-flex align-items-end"
            style={{
              backgroundColor: "#212529",
            }}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <div
                className="col-md-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="card">
                  <h2 className="card-header text-center">
                    {" "}
                    <strong>Work Inquiry</strong>
                  </h2>
                  <div className="card-body">
                    <form ref={form} onSubmit={sendEmail}>
                      <fieldset>
                        <div className="form-group">
                          <input
                            className="form-control mt-4"
                            type="text"
                            required
                            name="user_name"
                            id="exampleInputName"
                            aria-describedby="nameHelp"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="user_email"
                            required
                            className="form-control mt-4"
                            //form-control-lg to have the form greater
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your email"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control mt-4"
                            required
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
                        <Modal show={modal} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Message Sent!</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Your message was sent and I will get in touch with
                            you soon!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              Send another message
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;