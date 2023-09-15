import React, { useState } from "react";
import Logo from "../../assets/ORACLEDIGITAL.png";
import Burger from "../../assets/burger.png";
import "./header.css";

function Header() {
  const [burger, setBurger] = useState(false);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_nav">
            <img src={Logo} alt="" />
            <div className={burger ? "header_burger" : "header_menu"}>
              <a href="#">Главная</a>
              <a href="#">O компании</a>
              <a href="#">Услуги</a>
              <a href="#">Контакты</a>
              <button className="header_burger_btn">Get started</button>
            </div>
          </div>
          <button className="haeder_btn">Get started</button>
          <button onClick={() => setBurger(!burger)} className="burger">
            <img src={Burger} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
