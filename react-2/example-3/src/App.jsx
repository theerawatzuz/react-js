import Button from "./components/Button";
import "./App.css";

function App() {
  const welcome = () => {
    alert("Welcome to website");
  };
  const goodbye = () => {
    alert("goodbye from website");
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div id="app">
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <button onClick={welcome}>Welcome</button>
      <button onClick={goodbye}>Goodbye</button>
    </div>
  );
}

export default App;
