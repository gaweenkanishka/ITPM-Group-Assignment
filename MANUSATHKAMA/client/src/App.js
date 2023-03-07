import "./App.css";
import React from "react";
import heading from "./image/heading.png";
import { MantineProvider } from "@mantine/core";
import Banner from "./home/Banner";
import Banner2 from "./home/Banner2";
// import image from "../image/image.png";
import HeaderMegaMenu from "./home/navigation";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <h1>Manusathkama</h1>
        <HeaderMegaMenu />
        <img src={heading} alt="heading" />

        <Banner />
        <br />
        <Banner2 />
      </div>
    </MantineProvider>
  );
}

export default App;
