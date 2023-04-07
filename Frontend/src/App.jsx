import React from "react";
import "./App.css";
//import New1 from './components/New1';
//import HeaddingImg from './assets/Hedding.png';
import JobsForm from "./components/jobsForm";
//import JobsHome from "./components/jobsHome";


function App() {
  return (
    <div className="App p-10">
      <h1 className="text-3xl">
        Manusathkama
      </h1>
      <br />
      {/* <img src={HeaddingImg} alt="Heading" /> */}
      {/* <New1 /> */}
      {/* <JobsHome/> */}
      <JobsForm/>
     
      
    </div>
  );
}

export default App;
