import React, { useState } from "react";
import Btn from "../../assets/btn-link.png";
import "./footer.css";
import Logo from "../../assets/ORACLEDIGITAL.png";
import { BsFillCheckCircleFill, BsWhatsapp } from "react-icons/bs";
function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email) && name.length > 3) {
      console.log({ email: email, message: message, name: name });
      setEmail("");
      setMessage("");
      setName("");
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3000);
      return;
    } else {
      console.log("error?");
    }
  };
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer_form">
            <div className="footer_title">
              <h2>У вас остались вопросы?</h2>
              <p>
                Maecenas ut magna netus purus enim. Et sit est arcu facilisi
                tortor ipsum sem.
              </p>
            </div>
            <form onSubmit={handleSubmit} action="" className="footer_form_in">
              <div className="footer_input">
                <input
                  className="footer_in_name"
                  type="name"
                  placeholder="Name*"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="text"
                  id="GET-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message*"
                />
              </div>
              <div className="footer_input">
                <input
                  className="footer_in_name"
                  id="GET-email"
                  value={email}
                  type="email"
                  placeholder="Email*"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button>
                  Отправить <img src={Btn} alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="footer_blog">
            <div className="footer_logo">
              <img src={Logo} alt="" />
              <p>&copy; 2023 OracleDigital All rights Recerved.</p>
            </div>
            <div className="footer_item">
              <div className="footer_menu">
                <h5>Quick Links</h5>
                <a href="#">Главная</a>
                <a href="#">О компании</a>
                <a href="#">Услуги</a>
                <a href="#">Контакты</a>
              </div>
              <div className="footer_menu">
                <h5>Контакты</h5>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M26.5 6H5.5C4.11929 6 3 7.11929 3 8.5V23.5C3 24.8807 4.11929 26 5.5 26H26.5C27.8807 26 29 24.8807 29 23.5V8.5C29 7.11929 27.8807 6 26.5 6Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L16 17L25 10"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>odigital@gmail.com</span>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M5.11066 5.33341H11.0973L13.0267 10.1574L9.92666 12.2241C9.74411 12.3459 9.59444 12.5109 9.49094 12.7044C9.38743 12.8979 9.3333 13.114 9.33333 13.3334C9.33733 13.4587 9.33333 13.3347 9.33333 13.3347V13.3627C9.33412 13.4224 9.33679 13.482 9.34133 13.5414C9.34933 13.6507 9.36266 13.7987 9.388 13.9814C9.44 14.3414 9.54 14.8374 9.73466 15.4214C10.1267 16.5947 10.8947 18.1134 12.3907 19.6094C13.8867 21.1054 15.4053 21.8734 16.5773 22.2654C17.1627 22.4601 17.6573 22.5587 18.02 22.6121C18.2247 22.6407 18.4308 22.6585 18.6373 22.6654L18.6547 22.6667H18.6653C18.6653 22.6667 18.8147 22.6587 18.6667 22.6667C18.9142 22.6666 19.1568 22.5976 19.3674 22.4673C19.5779 22.3371 19.748 22.1509 19.8587 21.9294L20.752 20.1427L26.6667 21.1294V26.8894C23.852 27.2961 16.2493 27.6974 10.276 21.7241C4.30266 15.7507 4.70266 8.14675 5.11066 5.33341ZM12.0973 13.9814L14.5067 12.3761C15.0157 12.0366 15.3924 11.5324 15.5738 10.948C15.7551 10.3637 15.73 9.73477 15.5027 9.16675L13.5733 4.34275C13.3753 3.84796 13.0336 3.42383 12.5923 3.1251C12.151 2.82636 11.6303 2.66671 11.0973 2.66675H5.04133C3.82933 2.66675 2.68933 3.50808 2.49067 4.82275C2.03733 7.81208 1.42267 16.6414 8.39066 23.6094C15.3587 30.5774 24.188 29.9614 27.1773 29.5094C28.492 29.3094 29.3333 28.1707 29.3333 26.9587V21.1294C29.3334 20.4982 29.1095 19.8874 28.7016 19.4057C28.2936 18.9239 27.728 18.6026 27.1053 18.4987L21.1907 17.5134C20.6281 17.4195 20.0503 17.5084 19.542 17.7671C19.0337 18.0258 18.6218 18.4407 18.3667 18.9507L17.9053 19.8747C17.7422 19.8346 17.5807 19.7879 17.4213 19.7347C16.5947 19.4601 15.4467 18.8947 14.276 17.7241C13.1053 16.5534 12.54 15.4054 12.2653 14.5774C12.1997 14.3817 12.1441 14.1828 12.0987 13.9814H12.0973Z"
                      fill="black"
                    />
                  </svg>
                  <span>+996 709 554 789</span>
                </a>
              </div>
              <div className="footer_link">
                <h5>Мы в соц.сетях</h5>
                <div className="footer_phone">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M22.6667 2.66675H18.6667C16.8986 2.66675 15.2029 3.36913 13.9526 4.61937C12.7024 5.86961 12 7.5653 12 9.33341V13.3334H8V18.6667H12V29.3334H17.3333V18.6667H21.3333L22.6667 13.3334H17.3333V9.33341C17.3333 8.97979 17.4738 8.64065 17.7239 8.39061C17.9739 8.14056 18.313 8.00008 18.6667 8.00008H22.6667V2.66675Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M23.12 7.28008C22.8036 7.28008 22.4942 7.37392 22.2311 7.54973C21.968 7.72554 21.7629 7.97543 21.6418 8.26779C21.5207 8.56015 21.489 8.88186 21.5508 9.19223C21.6125 9.50259 21.7649 9.78769 21.9886 10.0115C22.2124 10.2352 22.4975 10.3876 22.8079 10.4493C23.1182 10.5111 23.44 10.4794 23.7323 10.3583C24.0247 10.2372 24.2746 10.0321 24.4504 9.76899C24.6262 9.50588 24.72 9.19653 24.72 8.88008C24.72 8.45573 24.5514 8.04877 24.2514 7.74871C23.9513 7.44865 23.5444 7.28008 23.12 7.28008ZM29.2534 10.5067C29.2274 9.40048 29.0202 8.30595 28.64 7.26675C28.301 6.37759 27.7733 5.57245 27.0934 4.90675C26.4331 4.22332 25.6261 3.69898 24.7334 3.37341C23.6969 2.98163 22.6012 2.76969 21.4934 2.74675C20.08 2.66675 19.6267 2.66675 16 2.66675C12.3734 2.66675 11.92 2.66675 10.5067 2.74675C9.39889 2.76969 8.30314 2.98163 7.26669 3.37341C6.37559 3.70228 5.56927 4.22616 4.90669 4.90675C4.22325 5.56698 3.69892 6.374 3.37335 7.26675C2.98157 8.30321 2.76963 9.39895 2.74669 10.5067C2.66669 11.9201 2.66669 12.3734 2.66669 16.0001C2.66669 19.6267 2.66669 20.0801 2.74669 21.4934C2.76963 22.6012 2.98157 23.697 3.37335 24.7334C3.69892 25.6262 4.22325 26.4332 4.90669 27.0934C5.56927 27.774 6.37559 28.2979 7.26669 28.6267C8.30314 29.0185 9.39889 29.2305 10.5067 29.2534C11.92 29.3334 12.3734 29.3334 16 29.3334C19.6267 29.3334 20.08 29.3334 21.4934 29.2534C22.6012 29.2305 23.6969 29.0185 24.7334 28.6267C25.6261 28.3012 26.4331 27.7768 27.0934 27.0934C27.7763 26.4302 28.3045 25.6243 28.64 24.7334C29.0202 23.6942 29.2274 22.5997 29.2534 21.4934C29.2534 20.0801 29.3334 19.6267 29.3334 16.0001C29.3334 12.3734 29.3334 11.9201 29.2534 10.5067ZM26.8534 21.3334C26.8436 22.1798 26.6904 23.0184 26.4 23.8134C26.1871 24.3937 25.8452 24.918 25.4 25.3467C24.9675 25.7874 24.4443 26.1287 23.8667 26.3467C23.0716 26.6371 22.233 26.7904 21.3867 26.8001C20.0534 26.8667 19.56 26.8801 16.0534 26.8801C12.5467 26.8801 12.0534 26.8801 10.72 26.8001C9.84121 26.8165 8.96615 26.6812 8.13335 26.4001C7.58106 26.1708 7.08183 25.8305 6.66669 25.4001C6.22414 24.9717 5.88648 24.447 5.68002 23.8667C5.3545 23.0603 5.17394 22.2027 5.14669 21.3334C5.14669 20.0001 5.06669 19.5067 5.06669 16.0001C5.06669 12.4934 5.06669 12.0001 5.14669 10.6667C5.15266 9.80149 5.31062 8.94401 5.61335 8.13341C5.84808 7.57063 6.20837 7.06896 6.66669 6.66675C7.07177 6.20831 7.5724 5.84421 8.13335 5.60008C8.94609 5.30681 9.80268 5.15352 10.6667 5.14675C12 5.14675 12.4934 5.06675 16 5.06675C19.5067 5.06675 20 5.06675 21.3334 5.14675C22.1797 5.15646 23.0183 5.30974 23.8134 5.60008C24.4193 5.82495 24.9631 6.19054 25.4 6.66675C25.837 7.07632 26.1784 7.57706 26.4 8.13341C26.6964 8.94533 26.8497 9.80245 26.8534 10.6667C26.92 12.0001 26.9334 12.4934 26.9334 16.0001C26.9334 19.5067 26.92 20.0001 26.8534 21.3334ZM16 9.16008C14.6478 9.16272 13.3266 9.56612 12.2036 10.3193C11.0805 11.0725 10.2059 12.1417 9.6902 13.3918C9.17454 14.6418 9.04099 16.0167 9.30641 17.3427C9.57184 18.6686 10.2243 19.8861 11.1815 20.8414C12.1386 21.7966 13.3574 22.4468 14.6838 22.7096C16.0103 22.9725 17.3849 22.8362 18.634 22.3181C19.883 21.8 20.9505 20.9233 21.7015 19.7988C22.4525 18.6742 22.8533 17.3523 22.8534 16.0001C22.8551 15.1002 22.679 14.2089 22.335 13.3774C21.9911 12.5458 21.4861 11.7905 20.8492 11.1548C20.2123 10.5191 19.456 10.0157 18.6237 9.67332C17.7915 9.33099 16.8999 9.15656 16 9.16008ZM16 20.4401C15.1219 20.4401 14.2634 20.1797 13.5333 19.6918C12.8031 19.2039 12.234 18.5105 11.898 17.6992C11.5619 16.8879 11.474 15.9952 11.6453 15.1339C11.8167 14.2726 12.2395 13.4815 12.8605 12.8605C13.4814 12.2396 14.2725 11.8167 15.1338 11.6454C15.9951 11.4741 16.8878 11.562 17.6991 11.8981C18.5104 12.2341 19.2039 12.8032 19.6917 13.5333C20.1796 14.2635 20.44 15.1219 20.44 16.0001C20.44 16.5831 20.3252 17.1605 20.102 17.6992C19.8789 18.2379 19.5519 18.7273 19.1396 19.1396C18.7273 19.5519 18.2378 19.879 17.6991 20.1021C17.1604 20.3252 16.5831 20.4401 16 20.4401Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M21.3334 10.667C23.4551 10.667 25.4899 11.5098 26.9902 13.0101C28.4905 14.5104 29.3334 16.5453 29.3334 18.667V28.0003H24V18.667C24 17.9597 23.7191 17.2815 23.219 16.7814C22.7189 16.2813 22.0406 16.0003 21.3334 16.0003C20.6261 16.0003 19.9478 16.2813 19.4477 16.7814C18.9476 17.2815 18.6667 17.9597 18.6667 18.667V28.0003H13.3334V18.667C13.3334 16.5453 14.1762 14.5104 15.6765 13.0101C17.1768 11.5098 19.2116 10.667 21.3334 10.667ZM2.66669 12.0003H8.00002V28.0003H2.66669V12.0003Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33335 8.00008C6.80611 8.00008 8.00002 6.80617 8.00002 5.33341C8.00002 3.86066 6.80611 2.66675 5.33335 2.66675C3.86059 2.66675 2.66669 3.86066 2.66669 5.33341C2.66669 6.80617 3.86059 8.00008 5.33335 8.00008Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.71731 18.6934C7.7746 18.7125 7.83351 18.7263 7.8933 18.7347C8.27053 19.6236 8.64565 20.5134 9.01864 21.4041C9.6893 23.0067 10.3653 24.6574 10.5133 25.1321C10.6986 25.7161 10.8933 26.1134 11.1066 26.3854C11.2173 26.5241 11.344 26.6467 11.4933 26.7401C11.5711 26.7887 11.6543 26.8281 11.7413 26.8574C12.168 27.0174 12.5573 26.9507 12.8013 26.8694C12.9445 26.8205 13.0807 26.7533 13.2066 26.6694L13.2133 26.6667L16.9813 24.3174L21.3346 27.6534C21.3986 27.7027 21.468 27.7441 21.5426 27.7774C22.0653 28.0041 22.572 28.0841 23.0493 28.0201C23.524 27.9534 23.9013 27.7547 24.1826 27.5294C24.5057 27.269 24.7632 26.9366 24.9346 26.5587L24.9466 26.5294L24.9506 26.5187L24.9533 26.5134V26.5107L24.9546 26.5094C24.9778 26.452 24.9957 26.3927 25.008 26.3321L28.9813 6.29873C28.9939 6.2346 29.0001 6.16941 29 6.10406C29 5.5174 28.7786 4.95873 28.26 4.6214C27.8146 4.33206 27.32 4.31873 27.0066 4.34273C26.6706 4.3694 26.3586 4.45206 26.1493 4.51873C26.0321 4.55587 25.9165 4.59768 25.8026 4.64406L25.788 4.65073L3.50264 13.3921L3.49997 13.3934C3.42457 13.4211 3.35029 13.4518 3.27731 13.4854C3.10059 13.5648 2.93107 13.6594 2.77064 13.7681C2.46797 13.9747 1.77064 14.5427 1.88931 15.4814C1.98264 16.2281 2.49464 16.6881 2.80797 16.9094C2.97864 17.0307 3.14131 17.1174 3.26131 17.1747C3.31464 17.2014 3.42931 17.2467 3.47864 17.2681L3.49197 17.2721L7.71731 18.6934ZM26.568 6.49073H26.5653C26.5538 6.49583 26.5423 6.50072 26.5306 6.5054L4.21864 15.2587C4.20716 15.2634 4.1956 15.2678 4.18397 15.2721L4.17064 15.2761C4.12988 15.2921 4.08984 15.3099 4.05064 15.3294C4.08775 15.3507 4.12603 15.3698 4.16531 15.3867L8.35464 16.7974C8.4295 16.8226 8.50111 16.8566 8.56797 16.8987L22.404 8.79873L22.4173 8.79206C22.471 8.7594 22.5262 8.72915 22.5826 8.7014C22.6786 8.65206 22.832 8.58006 23.0053 8.52673C23.1253 8.4894 23.4813 8.38406 23.8653 8.50806C24.069 8.57226 24.2505 8.69245 24.3891 8.85489C24.5278 9.01733 24.6179 9.21549 24.6493 9.42673C24.699 9.61173 24.7003 9.80638 24.6533 9.99206C24.56 10.3587 24.304 10.6441 24.0693 10.8627C23.8693 11.0494 21.276 13.5507 18.7173 16.0201L15.2333 19.3801L14.6133 19.9801L22.4426 25.9827C22.5483 26.0271 22.6631 26.0454 22.7773 26.0361C22.8348 26.0283 22.889 26.0042 22.9333 25.9667C22.9874 25.9211 23.0337 25.8671 23.0706 25.8067L23.0733 25.8054L26.9266 6.37473C26.8053 6.40393 26.6862 6.44226 26.5706 6.4894L26.568 6.49073ZM15.2866 23.0161L13.724 21.8187L13.3453 24.2254L15.2866 23.0161ZM12.2906 19.4427L13.844 17.9427L17.328 14.5801L18.6253 13.3294L9.93197 18.4187L9.97864 18.5281C10.5269 19.8233 11.0691 21.1211 11.6053 22.4214L11.9826 20.0214C12.0168 19.7988 12.1254 19.5957 12.2906 19.4427Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M25.4 6.54658C24.1776 5.31182 22.7216 4.33281 21.1169 3.66665C19.5121 3.0005 17.7908 2.66053 16.0533 2.66658C8.77334 2.66658 2.84 8.59992 2.84 15.8799C2.84 18.2132 3.45334 20.4799 4.6 22.4799L2.73334 29.3333L9.73334 27.4933C11.6667 28.5466 13.84 29.1066 16.0533 29.1066C23.3333 29.1066 29.2667 23.1733 29.2667 15.8932C29.2667 12.3599 27.8933 9.03992 25.4 6.54658ZM16.0533 26.8666C14.08 26.8666 12.1467 26.3333 10.4533 25.3333L10.0533 25.0933L5.89334 26.1866L7 22.1333L6.73334 21.7199C5.637 19.9692 5.05486 17.9456 5.05334 15.8799C5.05334 9.82658 9.98667 4.89325 16.04 4.89325C18.9733 4.89325 21.7333 6.03992 23.8 8.11992C24.8233 9.13854 25.6343 10.3501 26.1859 11.6845C26.7375 13.0188 27.0187 14.4494 27.0133 15.8932C27.04 21.9466 22.1067 26.8666 16.0533 26.8666ZM22.08 18.6532C21.7467 18.4932 20.12 17.6933 19.8267 17.5732C19.52 17.4666 19.3067 17.4132 19.08 17.7332C18.8533 18.0666 18.2267 18.8132 18.04 19.0266C17.8533 19.2533 17.6533 19.2799 17.32 19.1066C16.9867 18.9466 15.92 18.5866 14.6667 17.4666C13.68 16.5866 13.0267 15.5066 12.8267 15.1733C12.64 14.8399 12.8 14.6666 12.9733 14.4932C13.12 14.3466 13.3067 14.1066 13.4667 13.9199C13.6267 13.7332 13.6933 13.5866 13.8 13.3732C13.9067 13.1466 13.8533 12.9599 13.7733 12.7999C13.6933 12.6399 13.0267 11.0133 12.76 10.3466C12.4933 9.70658 12.2133 9.78658 12.0133 9.77325H11.3733C11.1467 9.77325 10.8 9.85325 10.4933 10.1866C10.2 10.5199 9.34667 11.3199 9.34667 12.9466C9.34667 14.5733 10.5333 16.1466 10.6933 16.3599C10.8533 16.5866 13.0267 19.9199 16.3333 21.3466C17.12 21.6933 17.7333 21.8933 18.2133 22.0399C19 22.2933 19.72 22.2532 20.2933 22.1732C20.9333 22.0799 22.2533 21.3732 22.52 20.5999C22.8 19.8266 22.8 19.1733 22.7067 19.0266C22.6133 18.8799 22.4133 18.8132 22.08 18.6532Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFormSubmitted ? (
        <div className="alert">
          <BsFillCheckCircleFill /> <span>отправлен</span>
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
