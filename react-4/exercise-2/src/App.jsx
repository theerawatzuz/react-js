import React, {useState} from 'react';
import getData from '/Data.jsx';

function App() {
  const [newData, setNewData] = useState({
    Name: '',
    Organization: '',
    Position: '',
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    getData.push(newData);
  
    setNewData({
      Name: '',
      Organization: '',
      Position: '',
    });
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="App"> {/* Add class name */}
      <h1>Table Example</h1>
      <div>
        <input type="text" name="Name" placeholder="Type new name here" style={{margin: '4px'}} value={newData.Name} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
        <input type="text" name="Organization" placeholder="Type new organization here" style={{margin: '4px'}} value={newData.Organization} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
        <input type="text" name="Position" placeholder="Type new position here" style={{margin: '4px'}} value={newData.Position} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
        <button style={{margin: '4px'}} onClick={handleSave}>Save</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
       {getData.map((dataItem, index) => (
        <tr key={index}>
          <td>{dataItem.Name}</td>
          <td>{dataItem.Organization}</td>
          <td>{dataItem.Position}</td>
        </tr>
       ))}
       </tbody>
      </table>
    </div>
  );
}

// function getData() {
//   return(
//     <tbody>
//       <tr>
//         <td>{Name}</td>
//         <td>{Organization}</td>
//         <td>{Position}</td>
//       </tr>
//     </tbody>
//   )
// }

export default App;
