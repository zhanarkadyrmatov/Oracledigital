import React from "react";
import "./folder.css";
import People from "../../assets/people.png";
import Next from "../../assets/next.png";
import Prev from "../../assets/prev.png";
function Folder() {
  return (
    <div id="folder">
      <div className="container">
        <div className="folder">
          <div className="folder_left">
            <h2>Что говорят наши студенты</h2>
            <div className="folder_left_text">
              <h3>4.9</h3>
              <p>
                Chances are you will be 98% satisfied with the result/ 4.9 is
                our average
              </p>
            </div>
          </div>
          <div className="folder_rigth">
            <div className="folder_wrapper">
              <div className="folder_slide">
                <h4>5.0</h4>
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
            </div>
            {/* <div className="folder_button">
              <img src={Next} alt="" />
              <img src={Prev} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
