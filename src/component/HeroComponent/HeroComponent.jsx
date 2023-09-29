import React from "react";
import Btn from "../../assets/btn-link.png";
import "./hero.css";
import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <div id="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.9 }}
          className="hero"
        >
          <div className="hero_text">
            <h1>/ПОЛУЧИ</h1>
            <h2>
              РАБОТУ <a href="#">Какой то текст</a>
            </h2>
            <h2>ПРОГРАММИСТОМ В IT</h2>
            <h1>
              <a href="#">
                <span>Связаться с нами</span> <img src={Btn} alt="" />
              </a>
              КОМПАНИИ
            </h1>
            <p>
              Quis fringilla convallis et vitae volutpat at porttitor. Est
              tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
              aliquet in.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroComponent;
