// import { useState } from "react";
import Card from "./assets/components/card";
import backgroundFundo from "./assets/imgs/dragon-ball-background.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <img src={backgroundFundo} alt="" />
      </div>
      <Card />
    </>
  );
}

export default App;
