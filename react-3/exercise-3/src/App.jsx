import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemp] = useState(25);

  const increaseTemp= () => {
    setTemp(temperature + 1);
  };

  const decreaseTemp = () => {
    setTemp(temperature - 1);
  };

  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer
        onIncreaseTemp={increaseTemp}
        onDecreaseTemp={decreaseTemp}
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
      <button onClick={props.onIncreaseTemp}>Up</button>
      <button onClick={props.onDecreaseTemp}>Down</button>
    </footer>
  );
}

export default App;
