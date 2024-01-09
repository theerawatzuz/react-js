import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, [reload]);

  const removeData = async (id) => {
    console.log(id);
    const baseURL = "https://jsd5-mock-backend.onrender.com"
    const deleteRoute = "member/"
    const member_id = id
    axios.delete(`${baseURL}/${deleteRoute}/${member_id}`);
    
    if (response.status === 200){
      alert(response.data.message)
      setReload(!reload)
    }
  };

  return (
    <div className="container">
      <Form submitHandler={removeData} />
      <div className="card-container">
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
