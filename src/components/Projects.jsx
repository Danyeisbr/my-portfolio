import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../stylesheets/ImagesSlider.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row min-vh-100 align-items-start justify-content-center "
            //style={{ backgroundColor: "#635d71" }}
          >
            <div className="container">
              <div className="title_wrapper">
                {/* <div className="reactLogo">
                  Imagen aqui
                </div> */}
                <div className="title_">
                  <h2>Portfolio</h2>
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
                  imagen uno
                  <img src={require(`../images/1.jpg`)} alt="one" />
                </SwiperSlide>
                <SwiperSlide>
                  imagen dos
                  <img src={require(`../images/2.jpg`)} alt="two" />
                </SwiperSlide>
                <SwiperSlide>
                  imagen tres
                  <img src={require(`../images/3.jpg`)} alt="three" />
                </SwiperSlide>
                <SwiperSlide>
                  imagen cuatro
                  <img src={require(`../images/4.jpg`)} alt="four" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
