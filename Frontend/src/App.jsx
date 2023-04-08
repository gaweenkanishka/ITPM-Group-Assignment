import React from "react";
import "./App.css";
//import New1 from './components/New1';
//import HeaddingImg from './assets/Hedding.png';
import JobsForm from "./components/jobsForm";
// import JobsHome from "./components/jobsHome";
// import JobVacancy from "./components/JobVacancy";
// import Banner from "./components/Banner";
// import Hedtext from "./components/Hedtext";
// import Mission from "./components/Mission";
// import Menu from "./components/Menu";
// import Text2 from "./components/Text2";

//import Text3 from "./components/Text3";

function App() {
  return (
    <div className="App p-10">
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
