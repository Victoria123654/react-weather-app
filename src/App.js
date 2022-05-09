
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Long Beach" />

        <footer>
          This project was coded by{" "}
          Viktoriia K
         {" "}
          and is{" "}
          <a
            href="https://github.com/Victoria123654/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}

        </footer>
      </div>
    </div>
  );
}

