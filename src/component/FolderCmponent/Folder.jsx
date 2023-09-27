import React, { useState, useRef } from "react";
import "./folder.css";
import People from "../../assets/people.png";
import Next from "../../assets/next.png";
import Prev from "../../assets/prev.png";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

import {
  Pagination,
  Navigation,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";

function Slide() {
  const swiper = useRef(null);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        freeMode={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={"0"}
        direction="horizontal"
        speed={1000}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        // keyboard={{
        //   enabled: true,
        // }}
        // mousewheel={{
        //   thresholdDelta: 0,
        // }}
        initialSlide={"0"}
        // on={{
        //   click(event) {
        //     swiper.slideTo(this.clickedIndex);
        //   },
        //   // slideChange: () => handleSlideChange(swiper.current.swiper),
        // }}
        navigation={{
          prevEl: ".slider_prev",
          nextEl: ".slider_next",
        }}
        breakpoints={{
          1024: {
            spaceBetween: 0,
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
          },
          1440: {
            spaceBetween: -120,
            slidesPerView: 2,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
          },
        }}
        modules={[Navigation, EffectCoverflow]}
      >
        {[1, 2, 3].map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="folder_slide">
                <h4>
                  5.0 <Rating name="simple-controlled" value={5} />
                </h4>
                <p>
                  Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed
                  ridiculus iaculis eget egestas blandit euismod. Ligula
                  senectus egestas cras risus sodales commodo. Enim nec neque
                  sodales quis sit massa posuere. Id eget ultrices tempus sit id
                  donec feugiat. Congue aliquet tristique egestas dictum
                  tincidunt ac. Odio varius sit dignissim justo. Dui sapien
                  aliquet aliquam quis et tellus velit bibendum. Quis pretium
                  vitae suspendisse at. Iaculis eu convallis egestas a mattis
                  viverra. Id leo sollicitudin matti
                </p>
                <div className="folder_people">
                  <img src={People} alt="" />
                  <div className="folder_people_text">
                    <h2>Андрей Соломонов</h2>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

function Folder() {
  return (
    <div id="folder">
      <div className="container">
        <div className="folder">
          <div className="folder_left">
            <h2>Что говорят наши студенты</h2>
            <div className="folder_left_text">
              <h3>4.9 </h3>
              <p>
                Chances are you will be 98% satisfied with the result/ 4.9 is
                our average
              </p>
            </div>
            <div className="folder_button1">
              <button className="slider_next">
                <img src={Next} alt="" />
              </button>
              <button className="slider_prev">
                <img src={Prev} alt="" />
              </button>
            </div>
          </div>
          <div className="folder_rigth">
            <Slide />
            <div className="folder_button">
              <button className="slider_next">
                <img src={Next} alt="" />
              </button>
              <button className="slider_prev">
                <img src={Prev} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
