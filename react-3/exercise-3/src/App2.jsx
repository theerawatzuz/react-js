import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(12);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer
        onIncreaseTemperature={increaseTemperature}
        onDecreaseTemperature={decreaseTemperature}
      />
    </div>
  );
}

function Header(props) {
  const tempInHeader = props.temp;
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempInHeader}</p>
    </header>
  );
}

function Content(props) {
  const tempInContent = props.tempContent;
  return (
    <div>
      <Temperature tempTemperature={tempInContent} />
    </div>
  );
}

function Temperature(props) {
  const tempInTemperature = props.tempTemperature;
  return (
    <div id="temperature">
      <span>{tempInTemperature} Oc</span>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <button onClick={props.onIncreaseTemperature}>Up</button>
      <button onClick={props.onDecreaseTemperature}>Down</button>
    </footer>
  );
}

export default App;
