import { Typewriter } from "react-simple-typewriter";
import ParticleHome from "../particles/ParticleHome";
import "../stylesheets/Section.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ParticleHome />
          <div
            className="row section d-flex flex-column justify-content-center align-items-center"
            // style={{ "background-color": "#232741" }}
          >
            <div className="col-md-4">
              <h1>
                <br />
                Hi, <br />
                I'm <strong style={{ color: "#FF302F" }}>Dan</strong>yeis,{" "}
                <br />
                Full Stack Developer <br />
              </h1>{" "}
              <br />
              <h2 className="text-center">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={20}
                  delaySpeed={2000}
                  words={[
                    "Front End",
                    "Back End",
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Redux",
                    "Bootstrap",
                    "TailwindCss",
                    "Material UI",
                    "Next JS",
                    "Express",
                    "PostgreSQL",
                    "Sequelize",
                  ]}
                />
              </h2>
              <br /> <br />
              <button
                type="button"
                style={{ "background-color": "#FF302F" }}
                className="btn btn-lg col-md-12"
              >
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
