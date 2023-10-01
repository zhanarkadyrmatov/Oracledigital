import React, { useRef, useState } from "react";
import "./our.css";
import Pyhton from "../../assets/pyhton.png";
import Btn from "../../assets/btn-link.png";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Front-End",
    groupInfo: "Групповое занятие, группы от 5 до 8 студентов.",
    classInfo: [
      { label: "Количество занятий:", value: "5 зан./нед., (Пн-Пт)" },
      { label: "Форма обучения:", value: "Онлайн" },
      { label: "Время занятия:", value: "120 минут" },
      { label: "Длительность курса:", value: "16 недель" },
    ],
    bonuses:
      "Предоставляем возможность повторить и закрепить любой урок из программы курса",
    price: "15 000с / в месяц",
    discountedPrice: "18 590",
  },
  {
    id: 2,
    title: "Front-End",
    groupInfo: "Групповое занятие, группы от 5 до 8 студентов.",
    classInfo: [
      { label: "Количество занятий:", value: "5 зан./нед., (Пн-Пт)" },
      { label: "Форма обучения:", value: "Онлайн" },
      { label: "Время занятия:", value: "120 минут" },
      { label: "Длительность курса:", value: "16 недель" },
    ],
    bonuses:
      "Предоставляем возможность повторить и закрепить любой урок из программы курса",
    price: "15 000с / в месяц",
    discountedPrice: "18 590",
  },
  {
    id: 3,
    title: "Front-End",
    groupInfo: "Групповое занятие, группы от 5 до 8 студентов.",
    classInfo: [
      { label: "Количество занятий:", value: "5 зан./нед., (Пн-Пт)" },
      { label: "Форма обучения:", value: "Онлайн" },
      { label: "Время занятия:", value: "120 минут" },
      { label: "Длительность курса:", value: "16 недель" },
    ],
    bonuses:
      "Предоставляем возможность повторить и закрепить любой урок из программы курса",
    price: "15 000с / в месяц",
    discountedPrice: "18 590",
  },
  // Add more course objects as needed
];
function OurComponent() {
  return (
    <div className="courses">
      <div className="container">
        <h2 className="title">Наши курсы</h2>
        <div data-aos="zoom-in-up" className="courses_wrapper">
          {[1, 2, 3].map((e) => {
            return (
              <div key={e} className="courses_card">
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
                  Предоставляем возможность повторить и закрепить любой урок из
                  программы курса
                </p>
                <h5>
                  15 000с / в месяц <span>18 590</span>
                </h5>
                <button>
                  Связаться с нами <img src={Btn} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurComponent;
