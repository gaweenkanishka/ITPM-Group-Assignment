import "./App.css";
import New1 from "./components/new1";
import headdingImg from "./assets/hedding.png";

function App() {
  return (
    <div className="App p-10">
      <h1 className="text-3xl" bolt>
        Manusathkama
      </h1>
      <br />
      <img src={headdingImg} alt="Heading" />
      <New1 />
    </div>
  );
}

export default App;
