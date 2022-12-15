import Card from "./Card.jsx";
import { RiComputerFill } from "react-icons/ri";
import { BsFillStopwatchFill } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { FaTools } from "react-icons/fa";

function Services() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div
            id="services"
            className="row min-vh-100 d-flex align-content-center"
          >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
                <Card
                  icon={
                    <RiComputerFill
                      className="icon"
                      color="#fff"
                      size="3rem"
                    />
                  }
                  title="Web Development"
                  body="Design and development from scratch of well-structured web pages, responsive design, attractive color palette with friendly interactions to the client."
                />
                <Card
                  icon={<FaTools className="icon" size="3rem" color="#fff" />}
                  title="Web Maintenance"
                  body="Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, new features, functions, etc."
                />
              </div>
              <div className="col-lg-5 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
                <Card
                  icon={<BsFillStopwatchFill className="icon" color="#fff" size="3rem" />}
                  title="Website Optimization"
                  body="Web positioning through Search Engine Optimization, so that your website be found in the main search results according to your business or brand, both in Google, Bing, or other internet search engines."
                />
                <Card
                  icon={<SiMarketo className="icon" size="3rem" />}
                  title="Social Marketing"
                  body="Design of attractive content for social networks, getting the most out of the social media to boost your brand, product or business."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
