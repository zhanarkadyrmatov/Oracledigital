import React from "react";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import Blog4 from "../../assets/blog4.png";
import Blog0 from "../../assets/blog0.png";
import Blog01 from "../../assets/blog-0.png";
import "./blog.css";

function Blog() {
  return (
    <div id="blog">
      <div className="container">
        <h2 className="title">Почему выбирают нас?</h2>
        <div className="blog">
          <div className="blog_card">
            <img className="blog_logo" src={Blog1} alt="" />
            <div className="blog_link">
              <h3>Авторский метод</h3>
              <a href="#">
                <img src={Blog01} alt="" />
              </a>
            </div>
          </div>
          <div className="blog_card">
            <img className="blog_logo" src={Blog2} alt="" />
            <div className="blog_link">
              <h3>ОНЛАЙН ОБУЧЕНИЕ</h3>
              <a href="#">
                <img src={Blog0} alt="" />
              </a>
            </div>
          </div>
          <div className="blog_card">
            <img className="blog_logo" src={Blog3} alt="" />
            <div className="blog_link">
              <h3>Авторский метод</h3>
              <a href="#">
                <img src={Blog0} alt="" />
              </a>
            </div>
          </div>
          <div className="blog_card">
            <img className="blog_logo" src={Blog4} alt="" />
            <div className="blog_link">
              <h3>Авторский метод</h3>
              <a href="#">
                <img src={Blog01} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
