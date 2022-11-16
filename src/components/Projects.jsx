import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "../stylesheets/Section.css";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row section">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation={true}
              autoplay={{ delay: 1500 }}
              effect={"fade"}
              speed={600}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              loop
              centeredSlides={true}
              className="mySwiper"
            >
              <SwiperSlide className="imageSlider">
                <img src={require(`../images/1.jpg`)} alt="one" /> 
              </SwiperSlide>
              <SwiperSlide className="imageSlider">
                <img src={require(`../images/2.jpg`)} alt="two" /> 
              </SwiperSlide>
              <SwiperSlide className="imageSlider">
                <img src={require(`../images/3.jpg`)} alt="three" />
              </SwiperSlide>
              <SwiperSlide className="imageSlider">
                <img src={require(`../images/4.jpg`)} alt="four" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
