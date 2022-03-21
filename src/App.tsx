import React from "react";

import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Chirpus" />
      <Ad flavor="Chocolate" fontSize={32} darkMode={true} />
      <Ad flavor="Vanilla" fontSize={32} darkMode={false} />
      <Ad flavor="Strawberry" fontSize={32} darkMode={true} />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
