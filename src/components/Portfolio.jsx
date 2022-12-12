import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../stylesheets/ImagesSlider.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            id="portfolio"
            className="row min-vh-100 align-items-center justify-content-center"
          >
            <div
              className="container"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <div className="title_wrapper">
                <div className="title_">
                  <h2>
                    <strong> My Portfolio</strong>
                  </h2>
                </div>
              </div>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h4 className="text-center">Weather App</h4>
                  <p className="text-center">HTML, CSS, React & Bootstrap</p>
                  <a
                    target="_blank"
                    href="https://danyeisbr.github.io/weather-app/"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../images/weather-app.jpg`)}
                      alt="weather"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h4 className="text-center">Tasks App</h4>
                  <p className="text-center">React & Bootstrap</p>
                  <a
                    target="_blank"
                    href="https://danyeisbr.github.io/react-tasks-app/"
                    rel="noreferrer"
                  >
                    <img src={require(`../images/tasks-app.png`)} alt="tasks" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h4 className="text-center">Rick & Morty App</h4>
                  <p className="text-center">Vite, React & Bootstrap</p>
                  <a
                    href="https://danyeisbr.github.io/react-rick-and-morty/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../images/rick-morty-app.png`)}
                      alt="rick-morty"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h4 className="text-center">Calculator App</h4>
                  <p className="text-center">HTML, CSS & React</p>
                  <a
                    href="https://danyeisbr.github.io/calculator-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../images/calculator-app.png`)}
                      alt="calculator"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h4 className="text-center">Turism App</h4>
                  <p className="text-center">HTML, CSS & React</p>
                  <a
                    target="_blank"
                    href="https://danyeisbr.github.io/tourism-app/"
                    rel="noreferrer"
                  >
                    <img
                      src={require(`../images/landscapes-app.jpg`)}
                      alt="landscapes"
                    />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}