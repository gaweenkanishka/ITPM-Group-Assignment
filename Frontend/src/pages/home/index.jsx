import React from "react";
import "./menu.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Hedtext from "./Hedtext";
import Menu from "./Menu";
import Mission from "./Mission";
import Proceed2 from "./Proceed2";
import Text2 from "./Text2";
//import headdingImg from "../assets/hedding.png";
import headdingImg from "../../assets/hedding.png";


function Home() {
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
export default Home;
