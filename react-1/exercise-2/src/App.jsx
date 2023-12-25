import React from 'react';


function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

function Header() {
  return (
    <header>
         <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
    </header>
  );
}
function Content() {
  return (
        <main>
          <Temperature/>
        </main>
  );
}


function Temperature() {
  let temperature = "99"
  return (
        <div id="temperature">
          <span>{temperature} Oc</span>
        </div>
  );
}

function Footer() {
  return (
      <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
  );
}

export default App;
