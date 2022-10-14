import { Typewriter } from "react-simple-typewriter";
import ParticleSnow from "./ParticleSnow";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="col-md-12">
      <ParticleSnow />
      <div class="row">
        <div class="col-md-12">
          <div className="info">
            <h1>
              Hi, <br />
              I'm Danyeis, <br />
              Full Stack Developer <br />
            </h1>
            <h2>
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
            <br />
            <br />
            <button type="button" class="btn btn-primary btn-lg col-md-4">
              Contact me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;