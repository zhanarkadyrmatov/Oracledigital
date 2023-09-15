// import React from "react";
// import Pyhton from "../../assets/pyhton.png";
import "./our.css";
// import Btn from "../../assets/btn-link.png";

// function OurComponent() {
//   return (
//     <div id="courses">
//       <div className="container">
//         <h2 className="title">Наши курсы</h2>
//         <div className="courses">
//           <div className="courses_card">
//             <h2>
//               Front-End <span>(HTML, CSS, JavaScript)</span>
//             </h2>
//             <img src={Pyhton} alt="" />
//             <h3>Групповое занятие, группы от 5 до 8 студентов.</h3>
//             <div className="courses_text">
//               <p>
//                 <a>Количество зантий:</a>
//                 <a>Форма обучения:</a>
//               </p>
//               <p>
//                 <span>5 зан./нед., (Пн-Пт)</span>
//                 <span>Онлайн</span>
//               </p>
//             </div>
//             <div className="courses_text">
//               <p>
//                 <a>Время занятия:</a>
//                 <a>Длительность курса</a>
//               </p>
//               <p>
//                 <span>120 минут</span>
//                 <span>16 недель</span>
//               </p>
//             </div>
//             <h6>Бонусы:</h6>
//             <p>
//               Предоставляем возможность повторить и закрепить любой урок из
//               программы курса
//             </p>
//             <h5>
//               15 000с / в месяц <span>18 590</span>
//             </h5>
//             <button>
//               Связаться с нами <img src={Btn} alt="" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurComponent;
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import React from "react";

function OurComponent() {
  return (
    <div>
      <section>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default OurComponent;
