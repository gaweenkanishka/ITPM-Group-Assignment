import React from 'react'
import "./menu.css";
import Banner from "../home/Banner";
import Footer from "../home/Footer";
import Hedtext from "../home/Hedtext";
import Menu from "../home/Menu";
import Mission from "../home/Mission";
import Proceed2 from "../home/Proceed2";
import Text2 from "../home/Text2";
import headdingImg from "./assets/hedding.png";

 function home () {
  return (
    <div>
        <Hedtext />
      <Banner />
      <div className="flex justify-center">
        <img src={headdingImg} alt="Heading" />
      </div>
      <Mission />
      <Text2 />
      <Proceed2 />
      <Menu />
      <Footer />
    </div>
  );
}
export default home;