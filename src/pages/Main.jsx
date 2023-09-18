import React from "react";
import Header from "../component/HeaderComponent/Header";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import Blog from "../component/BlogComponent/Blog";
import Footer from "../component/FooterComponent/Footer";
import OurComponent from "../component/OurComponent/OurComponent";
import Info from "../component/InfocComponent/Info";
import Accordion from "../component/AccordionComponent/Accordion";
import Mentor from "../component/MentorComponent/Mentor";
import Folder from "../component/FolderCmponent/Folder";
function Main() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <Blog />
      {/* <OurComponent /> */}
      <Mentor />
      {/* <Folder /> */}
      <Info />
      <Accordion />
      <Footer />
    </div>
  );
}

export default Main;
