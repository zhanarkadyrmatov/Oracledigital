import React from "react";
import Header from "../component/HeaderComponent/Header";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import Blog from "../component/BlogComponent/Blog";
import Footer from "../component/FooterComponent/Footer";
import OurComponent from "../component/OurComponent/OurComponent";
import Info from "../component/InfocComponent/Info";
import Accordion from "../component/AccordionComponent/Accordion";
import Mentor from "../component/MentorComponent/Mentor";
function Main() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <Blog />
      <Mentor />
      <Info />
      <Accordion />
      {/* <OurComponent /> */}
      <Footer />
    </div>
  );
}

export default Main;
