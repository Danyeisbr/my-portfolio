function Footer() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Legend</legend>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readonly=""
                className="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label mt-4">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleSelect1" className="form-label mt-4">
              Example select
            </label>
            <select className="form-select" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label mt-4">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          <fieldset className="form-group">
            <legend className="mt-4">Radio buttons</legend>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                checked=""
              />
              <label className="form-check-label" for="optionsRadios1">
                Option one is this and that—be sure to include why it's great
              </label>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Footer;
