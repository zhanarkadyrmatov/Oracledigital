import React from "react";
import Btn from "../../assets/btn-link.png";
import "./hero.css";

function HeroComponent() {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
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
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
