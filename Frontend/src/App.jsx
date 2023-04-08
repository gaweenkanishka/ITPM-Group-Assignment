import React from "react";
import "./App.css";
import headdingImg from "./assets/hedding.png";
import Banner from "./components/Banner";
import Hedtext from "./components/Hedtext";
import Mission from "./components/Mission";
import Menu from "./components/Menu";
import Text2 from "./components/Text2";

//import Text3 from "./components/Text3";

function App() {
  return (
    <div className="App p-10">
      <Hedtext />
      <Banner />

      <div className="flex justify-center">
        <img src={headdingImg} alt="Heading" />
      </div>

      <Mission />
      <Text2 />
      {/* <Text3 /> */}
       <Menu /> 
     {/* // <SignIn /> */}
    </div>
  );
}

export default App;
