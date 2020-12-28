import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BitonicSearch } from "./BitonicSearch";

function App() {
  new BitonicSearch([1, 5, 23, 65, 88, 4632, 235, 234, 233, 122, 12], 5);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          style={{
            color: "black",
            marginTop: "100px",
          }}
        >
          Check your console for Bitonic Search in TypeScript... visit{" "}
          <a href="https://www.gabruism.com">Gabruism</a>
        </h1>
      </header>
    </div>
  );
}

export default App;
