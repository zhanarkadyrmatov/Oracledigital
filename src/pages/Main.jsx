import React from "react";
import HeroComponent from "../component/HeroComponent/HeroComponent";
import Blog from "../component/BlogComponent/Blog";
import Footer from "../component/FooterComponent/Footer";
import OurComponent from "../component/OurComponent/OurComponent";
import Info from "../component/InfocComponent/Info";
import Accordion from "../component/AccordionComponent/Accordion";
import Mentor from "../component/MentorComponent/Mentor";
import Folder from "../component/FolderCmponent/Folder";
import Navbar from "../component/NavbarComponent/Navbar";
function Main() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <Blog />
      <OurComponent />
      <Mentor />
      <Folder />
      <Info />
      <Accordion />
      <Footer />
    </div>
  );
}

export default Main;
