import React, { useState } from 'react';

function App() {
    const [resultValue, getValue] = useState()

  const handleClick = (value) => {
    getValue(value)
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")} >Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo value={resultValue} />
    </div>
  );
}

function DisplayInfo(props) {
  const {value} = props
  let ShowResult;
  if (value === 'Fullname') {
    ShowResult = <h2>John Doe</h2>;
  } else if (value === 'Age') {
    ShowResult = <h2>30</h2>;
  } else if (value === 'Picture') {
    ShowResult = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    ShowResult = <p>Please select an option.</p>;
  }

  return (
    <div>
      {ShowResult}
    </div>
  );
}

export default App;
