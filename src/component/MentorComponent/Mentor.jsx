import React from "react";
import "./mentor.css";
import Logo from "../../assets/btn-link.png";
import NameLogo from "../../assets/mentorLogo.png";

function Mentor() {
  return (
    <div id="mentor">
      <div className="container">
        <div className="mentor">
          <div className="mentor_wrapper">
            <div className="mentor_2">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_title"
              >
                <h2>Получайте знание у самых топовых менторов</h2>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_text"
              >
                <p>
                  Chances are you will be 98% satisfied with the result/ 4.9 is
                  our average
                </p>
                <button className="menton_btn">
                  Записаться <img src={Logo} alt="" />
                </button>
              </div>
            </div>
            <div className="mentor_grid">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_name">
                  <div className="mentor_name_tit">
                    <h2>Jane Doe</h2>
                    <p>UX/UI Design</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_name">
                  <div className="mentor_name_tit">
                    <h2>Jane Doe</h2>
                    <p>UX/UI Design</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_name">
                  <div className="mentor_name_tit">
                    <h2>Alice Doe</h2>
                    <p>Front-End Dev.</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="mentor_card"
              >
                <div className="mentor_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="mobile"
          >
            <div className="mobile1">
              <div className="mentor_mobile">
                <div className="mobile_name">
                  <div className="mobile_title">
                    <h2>Jane Doe</h2>
                    <p>UX/UI Design</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="mobile2"
            >
              <div className="mobile_card">
                <div className="mobile_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="mobile1"
            >
              <div className="mentor_mobile2">
                <div className="mobile_name">
                  <div className="mobile_title">
                    <h2> Alice Doe</h2>
                    <p>Front-End Dev.</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="mobile2"
            >
              <div className="mobile_card2">
                <div className="mobile_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="mobile1"
            >
              <div className="mentor_mobile3">
                <div className="mobile_name">
                  <div className="mobile_title">
                    <h2> Alice Doe</h2>
                    <p>Front-End Dev.</p>
                  </div>
                  <img src={NameLogo} alt="" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="mobile2"
            >
              <div className="mobile_card3">
                <div className="mobile_about">
                  <h2>Lorem</h2>
                  <p>
                    Chances are you will be 98% satisfied with the result/ 4.9
                    is our average
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="mentor_text2"
          >
            <p>
              Chances are you will be 98% satisfied with the result/ 4.9 is our
              average
            </p>
            <button className="menton_btn">
              Записаться <img src={Logo} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
