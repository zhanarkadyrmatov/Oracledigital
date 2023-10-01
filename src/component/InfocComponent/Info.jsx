import React from "react";
import Info1 from "../../assets/info01.png";
import InfoLogo from "../../assets/infologo.png";
import InfoLogo2 from "../../assets/infologo2.png";
import Info3 from "../../assets/info03.png";
import Info4 from "../../assets/info5.png";
import Info2 from "../../assets/info2.png";
import "./info.css";

function Info() {
  return (
    <div id="info">
      <div className="container">
        <div data-aos="fade-down" className="info">
          <h2 className="title">
            Почему стоит задуматься о <br /> карьере в IT?
          </h2>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="info_card"
          >
            <p>
              В IT-сфере очень много перспективных дорожек. От создания сайтов и
              программ до графического дизайна мобильных игр или приложений. Вам
              вовсе не обязательно проводить 24/7 за написанием «сложного» кода
              для того, чтобы быть успешным
            </p>
            <div className="info_img">
              <img className="info_image" src={Info1} alt="" />
              <div className="info_number">
                <div className="info_nomer">
                  <h6 className="info_bold">01</h6>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                </div>
                <img className="info_number_img" src={InfoLogo} alt="" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="info_card_dark"
          >
            <div className="info_img_dark">
              <div className="info_number_dark">
                <div className="info_nomer_dark">
                  <span>01</span>
                  <h6 className="info_bold">02</h6>
                  <span>03</span>
                  <span>04</span>
                </div>
                <img className="info_number_img" src={InfoLogo} alt="" />
              </div>
              <img className="info_image" src={Info3} alt="" />
            </div>
            <p>
              В IT-сфере очень много перспективных дорожек. От создания сайтов и
              программ до графического дизайна мобильных игр или приложений. Вам
              вовсе не обязательно проводить 24/7 за написанием «сложного» кода
              для того, чтобы быть успешным
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="info_card"
          >
            <p>
              В IT-сфере очень много перспективных дорожек. От создания сайтов и
              программ до графического дизайна мобильных игр или приложений. Вам
              вовсе не обязательно проводить 24/7 за написанием «сложного» кода
              для того, чтобы быть успешным
            </p>
            <div className="info_img">
              <img className="info_image" src={Info2} alt="" />
              <div className="info_number">
                <div className="info_nomer">
                  <h6 className="info_bold">01</h6>
                  <span>02</span>
                  <span>03</span>
                  <span>04</span>
                </div>
                <img className="info_number_img" src={InfoLogo} alt="" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="info_card_dark"
          >
            <div className="info_img_dark">
              <div className="info_number_dark">
                <div className="info_nomer_dark">
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                  <h6 className="info_bold">04</h6>
                </div>
                <img className="info_number_img" src={InfoLogo2} alt="" />
              </div>
              <img className="info_image" src={Info4} alt="" />
            </div>
            <p>
              В IT-сфере очень много перспективных дорожек. От создания сайтов и
              программ до графического дизайна мобильных игр или приложений. Вам
              вовсе не обязательно проводить 24/7 за написанием «сложного» кода
              для того, чтобы быть успешным
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
