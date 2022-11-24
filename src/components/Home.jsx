import { Typewriter } from "react-simple-typewriter";
import ParticleBubble from "../particles/ParticleBubble";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ParticleBubble />
          <div
            className="row min-vh-100 d-flex flex-column justify-content-center align-items-center"
            // style={{ "backgroundColor": "#232741" }}
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
                style={{ "backgroundColor": "#FF302F" }}
                className="btn btn-lg col-md-12"
              >
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
