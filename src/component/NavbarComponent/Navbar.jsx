import React, { useState } from "react";
import Logo from "../../assets/ORACLEDIGITAL.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";

function Navbar() {
  const [burger, setBurger] = useState(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav>
            <img src={Logo} alt="" />
            <ul id="navbar" className={burger ? "#navbar active" : "#navbar"}>
              <li>
                <a className="active" href="#">
                  Главная
                </a>
              </li>
              <li>
                <a href="#">O компании</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
          </nav>
          <div id="mobile">
            <button onClick={() => setBurger(!burger)} className="navbar_btn">
              {burger ? (
                <RiCloseLine className="button_logo" />
              ) : (
                <RiMenu3Line className="button_logo" />
              )}
            </button>
          </div>
          <a className="header_btn" href="#">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
