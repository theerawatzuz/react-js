import { useEffect, useState } from "react";

import axios from "axios"; // อย่าลืม import Axios ด้วย
import Card from "./Card";
import "./App.css";

const bFunction = async () => {

}
const cFunction = async () => {

}

// เรียกใช้ await ใน async ได้เท่านั้น 
const asyncFunction = async () => {
  await bFunction()
  cFunction()
}




const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const textRes = await axios.get("https://jsd5-mock-backend.onrender.com/members")

    setMembers(textRes.data)
    console.log(textRes.data)
  };
    getData() 
  }, []);

  const postData = async () => {
    try {
      const postData = {
        id: "",
        name: "string",
        lastname: "string",
        position: "string",
      };

      const postRes = await axios.post("https://jsd5-mock-backend.onrender.com/members", postData);
      

      console.log("POST Response:", postRes.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="container">
      {members.map((member) => (
        <Card
          age={member.age}
          name={member.name}
          id={member.id}
          status={member.status}
          weight={member.weight}
        />
      ))}
      <button onClick={postData}>Post Data</button>
    </div>
  );
};

export default App;

