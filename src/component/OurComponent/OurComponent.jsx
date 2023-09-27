import React, { useRef, useState } from "react";
import "./our.css";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";

import { Pagination, FreeMode, EffectCoverflow } from "swiper/modules";
import Pyhton from "../../assets/pyhton.png";
import Btn from "../../assets/btn-link.png";
function OurComponent() {
  const swiper = useRef(null);

  return (
    <div className="courses">
      <div className="container">
        <h2 className="title">Наши курсы</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={"0"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 0,
          }}
          initialSlide={"2"}
          on={{
            click(event) {
              swiper.slideTo(this.clickedIndex);
            },
          }}
          breakpoints={{
            768: {
              spaceBetween: 40,
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              },
            },
            1024: {
              spaceBetween: -160,
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              },
            },
            1440: {
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              },
            },
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {[1, 2, 3, 4].map((e) => {
            return (
              <SwiperSlide key={e}>
                <div className="courses_card">
                  <h2>
                    Front-End <span>(HTML, CSS, JavaScript)</span>
                  </h2>
                  <div className="courses_image">
                    <img src={Pyhton} alt="" />
                  </div>
                  <h3>Групповое занятие, группы от 5 до 8 студентов.</h3>
                  <div className="courses_text">
                    <p>
                      <a>Количество зантий:</a>
                      <a>Форма обучения:</a>
                    </p>
                    <p>
                      <span>5 зан./нед., (Пн-Пт)</span>
                      <span>Онлайн</span>
                    </p>
                  </div>
                  <div className="courses_text">
                    <p>
                      <a>Время занятия:</a>
                      <a>Длительность курса</a>
                    </p>
                    <p>
                      <span>120 минут</span>
                      <span>16 недель</span>
                    </p>
                  </div>
                  <h6>Бонусы:</h6>
                  <p>
                    Предоставляем возможность повторить и закрепить любой урок
                    из программы курса
                  </p>
                  <h5>
                    15 000с / в месяц <span>18 590</span>
                  </h5>
                  <button>
                    Связаться с нами <img src={Btn} alt="" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default OurComponent;
