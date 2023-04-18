import React from "react";
import "./App.css";
import headdingImg from "./assets/hedding.png";
import Banner from "./components/home/Banner";
import Hedtext from "./components/home/Hedtext";
import Mission from "./components/home/Mission";
import Menu from "./components/home/Menu";
import Text2 from "./components/home/Text2";
import Proceed2 from "./components/home/proceed2";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="App p-0">
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

export default App;
