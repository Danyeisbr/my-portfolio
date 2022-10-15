import "../stylesheets/Section.css";
import "../stylesheets/Maps.css";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row section"
            // style={{ "background-color": "#232741" }}
            style={{"backgroundColor": "#212529",}}
          >
            <div className="col-md-6">
              <div className="card mb-2 mt-3">
                <h3 className="card-header">Contact Me</h3>
                <div className="card-body">
                  <p className="card-text">
                    I’m interested in freelance opportunities – especially
                    ambitious or large projects. However, if you have other
                    request or question, don’t hesitate to use the form.
                  </p>
                  <form>
                    <fieldset>
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputName"
                          className="form-label mt-4"
                        >
                          Name
                        </label>
                        <input
                          type="name"
                          className="form-control"
                          id="exampleInputName"
                          aria-describedby="nameHelp"
                          placeholder="Enter name"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label mt-4"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="exampleInputSubject"
                          className="form-label mt-4"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputSubject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="exampleTextarea"
                          className="form-label mt-4"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                          rows="3"
                        ></textarea>
                      </div>
                      <br />
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-container">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289935.138808182!2d-83.39014687056077!3d4.587751103547316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1665812324757!5m2!1ses-419!2sco"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;