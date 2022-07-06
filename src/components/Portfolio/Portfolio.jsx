import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import voting from "../../img/voting.png";
import voice from "../../img/voice.jpg";
import plant1 from "../../img/plant1.jpg";
import hand from "../../img/hand.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={voting} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={voice} alt="" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={plant1} alt="" />
          <div className="awesome">
            <span>Plant disease detection</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hand} alt="" />
          <span>Hand Gestuer recognition</span>
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};

export default Portfolio;
