import React from "react";
import Hero from "./Hero";
import All from "./All";
import Header from "../../components/header";

function Food() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-medium text-center mt-10">
        Food Advertisements
      </h1>
      <Hero />
      <All />
    </div>
  );
}

export default Food;
