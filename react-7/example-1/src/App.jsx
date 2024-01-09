import { createContext, useContext, useState } from "react";
import "./App.css";


const firstContext = createContext();

function App() {
  const [temperature, setTemperature] = useState(0);
  // การทำ context
  return (
    <div id="app">
      
      <firstContext.Provider
      value= {{
        temperature: temperature,
        setTemperature: setTemperature,
      }}
      >
       <Header/>
       <Content/>
       <Footer/>
      </firstContext.Provider>
    </div>
  );
}

function Header() {
  const context = useContext(firstContext);
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {context.temperature}</p>
    </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature />
    </div>
  );
}

function Temperature() {
  const context = useContext(firstContext);
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{context.temperature} Oc</span>
    </div>
  );
}

function Footer() {
  const context = useContext(firstContext);
console.log(firstContext)
  return (
    // Code for Footer
    // <Footer />
    <footer>
      {firstContext.temperature}
      <button onClick={() => context.setTemperature((prev) => prev + 1)}>
        Up
      </button>
      <button onClick={() => context.setTemperature((prev) => prev - 1)}>
        Down
      </button>
    </footer>
  );
}

export default App;
